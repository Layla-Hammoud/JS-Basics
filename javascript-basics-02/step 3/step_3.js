let input = document.querySelector("#name")
let form = document.querySelector("form")
let div = document.createElement("div");
input.addEventListener("input",()=>{
    form.appendChild(div).innerHTML=input.value;
})

