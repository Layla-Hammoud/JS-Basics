document.getElementById("validate").addEventListener('click', (event) => {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    if (age > 18) {
        alert("you are over 18")
    }
    else {
        alert("you are under 18")
    }
})