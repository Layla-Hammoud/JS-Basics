document.getElementById("validate").addEventListener('click', (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let city = document.getElementById("city").value;
    alert(`name : ${name}
surname : ${surname}
city : ${city}`);
})