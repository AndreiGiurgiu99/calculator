

const cifra = document.querySelectorAll(".digit")
const display = document.querySelector(".display")


cifra.forEach( cif => {
    cif.addEventListener("click", () => {
        display.textContent = cif.textContent
    })
})