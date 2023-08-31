let inputs = document.getElementsByTagName('input')
let reset = document.querySelector("button")
reset.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the inputs?")) {
        inputs.name.value = "";
        inputs.surname.value = "";
        inputs.city.value = "";
    };

})
