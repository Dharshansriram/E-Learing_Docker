function signup() {
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const dept = document.getElementById("dept").value;
    const year = document.getElementById("year").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (!name || !roll || !dept || !year || !password) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    const user = {
        name,
        roll,
        dept,
        year,
        password,
        credits: 0
    };
    fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message || "Signup successful");
            window.location.href = "index.html";
        })
        .catch(err => {
            console.error("Signup error:", err);
        });
}

function switchToLogin() {
    document.getElementById("authTitle").innerText = "Sign In";
    document.getElementById("authBtn").innerText = "Sign In";
    document.getElementById("confirmPassword").style.display = "none";

    document.querySelector(".switch").innerHTML = `
    Don't have an account?
    <span onclick="switchToSignup()">Create Account</span>
  `;

    document.getElementById("authBtn").onclick = login;
}

function switchToSignup() {
    window.location.reload();
}

function login() {
    const roll = document.getElementById("roll").value.trim();
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.roll !== roll || user.password !== password) {
        alert("Invalid credentials");
        return;
    }

    window.location.href = "index.html";
}