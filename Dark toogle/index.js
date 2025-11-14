const inputE1 = document.querySelector(".input");
const body = document.querySelector("body")

inputE1.checked = JSON.parse(localStorage.getItem("mode"))
updateBody()

function updateBody(){
    if(inputE1.checked){
        body.style.background="black";
    }else{
        body.style.background="white";
    }
}
inputE1.addEventListener("input",() => {
    updateBody()
})

function updateLocalStorage(){
    localStorage.setItem("mode",
        JSON.stringify(inputE1.checked))
}
