document.querySelector("#rollDice").addEventListener("click", rollDice)
document.addEventListener("keydown", function(event){
    switch (event.key) {
        case " ":
            rollDice()
            break;
    
        default:
            break;
    }
})

let i = 1;

function rollDice() {
   

    var diceOne = Math.floor(Math.random() * 6) + 1;
    var diceTwo = Math.floor(Math.random() * 6) + 1;

    var diceOneImageSuccess = "img/success/Success-" + diceOne + ".png";
    var diceOneImageDanger = "img/danger/Fail-" + diceOne + ".png";
    var diceOneImageNeutral = "img/neutral/Neutral-" + diceOne + ".png";
    var diceTwoImageSuccess = "img/success/Success-" + diceTwo + ".png";
    var diceTwoImageDanger = "img/danger/Fail-" + diceTwo + ".png";
    var diceTwoImageNeutral = "img/neutral/Neutral-" + diceTwo + ".png";

    if (i === 1) {
        document.getElementById("dice-rolls").innerHTML = "You have rolled the dice " + i + " time."
    } else {
        document.getElementById("dice-rolls").innerHTML = "You have rolled the dice " + i + " times."
    }

    if (diceOne === diceTwo) {
        document.getElementById("header").innerHTML = "It's a draw!"
        document.getElementById("dOne").src = diceOneImageNeutral;
        document.getElementById("dTwo").src = diceTwoImageNeutral;
    } else if (diceOne > diceTwo) {
        document.getElementById("header").innerHTML = "Player One wins!"
        document.getElementById("dOne").src = diceOneImageSuccess;
        document.getElementById("dTwo").src = diceTwoImageDanger;
        } else { 
            document.getElementById("header").innerHTML = "Player Two wins!"
            document.getElementById("dTwo").src = diceTwoImageSuccess;
            document.getElementById("dOne").src = diceOneImageDanger;
        }   
    i++;
}


