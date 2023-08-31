let inputs = document.getElementsByTagName('input')
let reset = document.querySelector("button")
reset.addEventListener("click",()=>{
    console.log(inputs.name)
    inputs.name.value="";
    inputs.surname.value="";
    inputs.city.value="";

})
