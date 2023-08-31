let show = document.getElementById("show");
let hide = document.getElementById("hide");
let text = document.getElementById("texte");
hide.addEventListener("click",()=>{
    text.style.display="none"
})
show.addEventListener("click",()=>{
    text.style.display="block"
})
