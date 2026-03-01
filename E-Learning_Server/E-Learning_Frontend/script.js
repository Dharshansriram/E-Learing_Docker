let editor;
document.addEventListener("DOMContentLoaded", function() {

    // ALL your existing script.js code here


    require.config({
        paths: {
            'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs'
        }
    });


    require(['vs/editor/editor.main'], function() {

        editor = monaco.editor.create(document.getElementById('editor'), {
            value: "",
            language: 'c',
            theme: 'vs-dark',
            automaticLayout: true
        });

        // Load first problem only AFTER editor is ready
        loadProblem(1, "A");


    });
});

// ================= LOAD PROBLEM =================

function loadProblem(chapter, code) {

    fetch(`http://localhost:5000/problems/${chapter}/${code}`)
        .then(res => {
            console.log("Response status:", res.status);
            return res.json();
        })
        .then(data => {
            console.log("Received data:", data);

            if (!data) {
                console.error("No data received from backend");
                return;
            }

            document.getElementById("problem-title").innerText = data.title || "";
            document.getElementById("problem-description").innerText = data.description || "";

            const testCase = data.testCases && data.testCases.length > 0 ?
                data.testCases[0] :
                null;

            document.getElementById("problem-input").innerText =
                testCase ? testCase.input : "";

            document.getElementById("problem-output").innerText =
                testCase ? testCase.expectedOutput : "";

            if (editor) {
                editor.setValue(data.starterCode || "");
            }
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
}

// ================= RUN CODE =================

function runCode() {

    if (!editor) return;

    const code = editor.getValue();
    const language = document.getElementById("languageSelect").value;
    const input = document.getElementById("problem-input").innerText;
    const output = document.getElementById("output");

    output.innerText = "Running...";
    output.style.color = "#999";

    fetch("http://localhost:5000/run", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: code, language: language, input: input })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Backend Response", data);
            output.style.color = "#22c55e";
            output.innerText = data.output;
        })
        .catch(err => {
            console.error(err);
            output.style.color = "red";
            output.innerText = "Backend not reachable";
        });
}

function submitCode() {

    const code = editor.getValue();
    const language = document.getElementById("languageSelect").value;
    const input = document.getElementById("problem-input").innerText;

    fetch("http://localhost:5000/run", { // we can reuse /run
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code,
                language,
                input,
                chapter: currentChapter,
                problemCode: currentProblemCode
            })
        })
        .then(res => res.json())
        .then(data => {
            const outputBox = document.getElementById("output");
            outputBox.innerText = data.output + "\n\nStatus: " + data.status;
        });
}
window.runCode = runCode;