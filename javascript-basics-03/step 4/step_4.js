const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");
const input = document.getElementsByTagName('input')
const button = document.querySelector("button");
button.addEventListener("click",()=>{
    if(password.value!==confirmation.value){
        for(let i =0 ; i<2;i++){
            input[i].style.borderBlockColor="red"
        }
    }
})