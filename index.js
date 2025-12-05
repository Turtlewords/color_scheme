// Elements

const submitBtn = document.querySelector(".submit-btn");
const colorPicker = document.querySelector(".color-picker");
const colorMode = document.querySelector("#color-mode");
const colors = document.querySelectorAll(".color");
const hexes = document.querySelectorAll(".hex");


// Event Listeners

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substring(1)}&mode=${colorMode.value}&count=5`)
    .then(response => response.json())
    .then((data) => {
        
        colors.forEach((color, index) => {
        color.style.backgroundColor = data.colors[index].hex.value
    })

        hexes.forEach((hex, index) => {
        hex.textContent = data.colors[index].hex.value
    })
    })

})

colors.forEach((color) => {
    color.addEventListener("click", copyColorToClipboard)
})

hexes.forEach((hex) => {
    hex.addEventListener("click", copyHexToClipboard)
})
// Functions

function copyColorToClipboard(e) {
    
    navigator.clipboard.writeText(e.target.style.backgroundColor)
}

function copyHexToClipboard(e) {
    navigator.clipboard.writeText(e.target.textContent)
}