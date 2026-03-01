const app = require("./src/app");
const Submission = require("./models/Submission");

const mongoose = require("mongoose");

const problems = require("./problems");






mongoose.connect("mongodb://127.0.0.1:27017/codelab")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Mongo Error:", err));


const Problem = mongoose.model(
    "Problem",
    new mongoose.Schema({}, { strict: false })
);


app.get("/seed", async(req, res) => {
    try {
        await Problem.deleteMany({});
        await Problem.insertMany(problems);
        res.json({ message: "Problems inserted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





app.get("/problems/:chapter/:code", (req, res) => {
    const chapter = parseInt(req.params.chapter);
    const code = req.params.code;

    const problem = problems.find(
        p => p.chapter === chapter && p.problemCode === code
    );

    if (!problem) {
        console.log("Problem not found:", chapter, code);
        return res.status(404).json({ error: "Problem not found" });
    }

    res.json(problem);
});



const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

app.post("/run", async(req, res) => {
    try {
        const { code, language, input, chapter, problemCode } = req.body;
        console.log("BODY:", req.body);
        console.log("chapter", chapter);
        console.log("ProblemCode", problemCode);
        console.log("Code", code);
        console.log("Language", language);
        console.log("input", input);

        const tempDir = path.join(__dirname, "temp");
        if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

        let fileName = "";
        let compileCmd = "";
        let imageName = "";

        if (language === "c") {
            fileName = "main.c";
            imageName = "c-sandbox";
            compileCmd = `gcc main.c -o main && echo "${input}" | ./main`;
        } else if (language === "java") {
            fileName = "Main.java";
            imageName = "java-sandbox";
            compileCmd = "javac Main.java && java Main";
        } else if (language === "python") {
            fileName = "main.py";
            imageName = "python-sandbox";
            compileCmd = "python3 main.py";
        }


        fs.rmSync(tempDir, { recursive: true, force: true });
        fs.mkdirSync(tempDir, { recursive: true });

        const filePath = path.join(tempDir, fileName);
        fs.writeFileSync(filePath, code);
        console.log("Files in temp:", fs.readdirSync(tempDir));
        const windowsPath = tempDir; // DO NOT convert
        const inputPath = path.join(tempDir, "input.txt");
        fs.writeFileSync(inputPath, input);

        const command =
            `docker run --rm -v "${windowsPath}:/app" c-sandbox sh -c "cd /app && gcc main.c -o main && ./main < input.txt"`;


        console.log("Running command:", command);

        exec(command, { timeout: 5000 }, async(error, stdout, stderr) => {
            const finalOutput = (stdout || stderr || "").trim();

            // Get expected output from problems.js
            const problem = problems.find(
                p => p.chapter === chapter && p.problemCode === problemCode
            );

            let expectedOutput = "";

            if (problem && problem.testCases && problem.testCases[0]) {
                expectedOutput = problem.testCases[0].expectedOutput.trim();
            }

            const cleanOutput = (finalOutput || "").trim().replace(/\s+/g, " ");
            const cleanExpected = (expectedOutput || "").trim().replace(/\s+/g, " ");
            console.log("Chapter:", chapter);
            console.log("ProblemCode:", problemCode);
            console.log("Expected:", expectedOutput);
            console.log("Final:", finalOutput);

            const status =
                cleanOutput === cleanExpected ?
                "Accepted" :
                "Wrong Answer";
            try {
                await Submission.create({
                    chapter,
                    problemCode,
                    language,
                    code,
                    input,
                    output: finalOutput,
                    status
                });

                console.log("Saved to DB");

            } catch (dbErr) {
                console.log("DB Error:", dbErr);
            }

            res.json({
                output: finalOutput,
                status
            });

        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});