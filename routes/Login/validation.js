const form = document.getElementById("loginForm");
const emailOrPhone = document.getElementById("emailOrPhone");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    resetError(emailOrPhone, emailError);
    resetError(password, passwordError);

    const value = emailOrPhone.value.trim();
    const pass = password.value.trim();

    if (!value.includes("@") || !value.includes(".")) {
        showError(emailOrPhone, emailError, "Please enter a valid email");
        isValid = false;
    }

    if (pass.length <= 8) {
        showError(password, passwordError, "Password must be greater than 8 characters");
        isValid = false;
    }

    if (isValid) {
        location.replace("../Shop/shop.html")
    }
});

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
    input.classList.add("border-red-500");
}

function resetError(input, errorElement) {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
    input.classList.remove("border-red-500");
}