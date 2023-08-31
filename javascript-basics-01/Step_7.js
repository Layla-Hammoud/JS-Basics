document.getElementById("validate").addEventListener('click', (event) => {
    event.preventDefault();
    let result = applyArithmeticsOperations()
    alert(result);
})
const applyArithmeticsOperations = () =>{
    let shoe_size = parseInt(document.getElementById("shoe_size").value);
    let year = parseInt(document.getElementById("year").value);
    let result = ((shoe_size*2+5)*50)-year+1766;
    return result

}