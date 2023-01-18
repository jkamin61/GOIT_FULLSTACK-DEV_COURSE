const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;
if (email.value === "" || password.value === "") {
    alert("Fill all the blank inputs.")
}
const inputData = {
    email: email.value,
    password: password.value
};
console.log(inputData);
    event.currentTarget.reset();
});

