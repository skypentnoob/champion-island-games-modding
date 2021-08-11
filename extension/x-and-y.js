// Get the player position and declare other vars
let playerpos = localStorage.getItem("KITSUNE_PLAYER_POS")
let databox = document.createElement("div")
let datatext = document.createTextNode(playerpos)
databox.style.backgroundColor = "white"
databox.style.fontSize = "x-large"
// Function that checks this variable repeatedly or function that just checks the variable? idk
databox.appendChild(datatext)
function updateData() {
    let playerpos = localStorage.getItem("KITSUNE_PLAYER_POS")
    datatext.nodeValue = playerpos
}
document.body.insertBefore(databox, document.body.firstChild)
// add floating html element showing the x and y
setInterval(
    function(){
        updateData()
    }, 1000
)
