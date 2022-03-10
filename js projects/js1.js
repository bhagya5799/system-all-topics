const button=document.querySelector("button")
const body=document.querySelector("body")
const color=["red","green","blue","yellow","pink","purple"]
body.style.background="green"
button.addEventListener("click",chageb)
function chageb(){
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.background=color[colorIndex]
}

