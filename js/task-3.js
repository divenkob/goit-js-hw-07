const inputsName = document.querySelector("#name-input");
const outputsName = document.querySelector("#name-output");

inputsName.addEventListener("input", (event) => {
    const nameLine = event.target.value.trim();
    if (nameLine === " ") {
        outputsName.textContent = "Anonymous";
    } else {
        outputsName.textContent = nameLine;
    };
});