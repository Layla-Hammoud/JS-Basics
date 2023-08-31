document.getElementById("validate").addEventListener('click', (event) => {
    event.preventDefault();
    let first_number = parseInt(document.getElementById("first_number").value);
    let second_number = parseInt(document.getElementById("second_number").value);
    alert(first_number*second_number);
})