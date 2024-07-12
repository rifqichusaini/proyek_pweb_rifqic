document.getElementById("sign-in-form").addEventListener("submit", function(event) {
    let isValid = true;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();
    const origin = document.getElementById("origin").value.trim();
    const status = document.getElementById("status").value.trim();

    if (username === "") {
        alert("Username is required.");
        isValid = false;
    }

    if (password === "") {
        alert("Password is required.");
        isValid = false;
    }

    if (birthdate === "") {
        alert("Tanggal Lahir is required.");
        isValid = false;
    }

    if (origin === "") {
        alert("Asal Anda is required.");
        isValid = false;
    }

    if (status === "") {
        alert("Status Anda is required.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
