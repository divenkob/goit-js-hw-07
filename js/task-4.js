const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
    const emailInputValue = emailInput.value.trim();
    const passwordInputValue = passwordInput.value.trim();

    if (emailInputValue === '' || passwordInputValue === '') {
        alert('All form fields must be filled in');
        return;
    };

    const formValues = {
        email: emailInputValue,
        password: passwordInputValue
    };

    console.log(formValues);
    loginForm.reset();
});