const allButtons = [...document.querySelectorAll('.square')];
const primaryColors = ["green", "red", "blue"];
const secondaryColors = ["yellow", "orange", "pink", "purple", "cyan", "indigo", "Magenta", "coral", "chartreuse", "burlywood", "gold", "maroon","orangered", "tomato", "olive", "cadetblue"]
const displayScreen = document.querySelector(".navbar")
const resetButton = document.querySelector(".reset")

allButtons.forEach((btn) => {
    btn.addEventListener("click", function(e){
        const value = e.target.textContent
        console.log(e.target.textContent)

        if(value%2 == 0) {
            displayScreen.style.backgroundColor = primaryColors[Math.floor(Math.random() *3)];
        } else {
            displayScreen.style.backgroundColor = secondaryColors[Math.floor(Math.random() *16)];
        }
    });
})

resetButton.addEventListener("click", function(){
    displayScreen.style.backgroundColor = "white"
})






