let link = document.getElementsByTagName('a')
let text = document.getElementById("texte");
for (let i = 0; i < 2; i++) {
    link[i].addEventListener("click", () => {
        if (link[i].id == "show") { text.style.display = "block" }
        else { text.style.display = "none" }
    })
}






