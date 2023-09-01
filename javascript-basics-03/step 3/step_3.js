const text = document.getElementById("text")
const divs= document.querySelectorAll('div');
for(const div of divs){
    div.addEventListener("click",()=>{
        if(div.classList.contains("green")){
            text.style.color="green"
        }
        if(div.classList.contains("red")){
            text.style.color="red"
        }
        if(div.classList.contains("blue")){
            text.style.color="blue"
        }
    })
}
