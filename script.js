// ============= variables ================== //

const randomNumber = Math.floor(Math.random()*100+1)
let chances = 5;
let isWin = false;

// ==================== variables ==================== //

// =============== imports ========================= //

const Userguess = document.querySelector("#number")
const resultDiv = document.querySelector(".result")
const historyDiv = document.querySelector(".history")
const submitButton = document.querySelector("#submit")



// =============== imports ========================= //

// =================== main function ================ //

const GuessingGame = () => {
    const guess = Userguess.value;
    let result;

    if (guess > 100 || guess < 1) {
        result = "Guess a number in the range of 1 & 100"
        resultDiv.innerHTML = `<h4>${result}</h4>`

    } else if ( chances && !isWin ) {
        if (randomNumber == guess) {
            result = "You Won";
            isWin = true;
        } else if ( randomNumber < guess ) {
            if (chances == 1) {
                result = `Game Over, The number is ${randomNumber}`
            } else {
                result = "You too high! 😢";
                isWin = false
            }
            
        }else if ( randomNumber > guess ) {
            if (chances == 1) {
                result = `Game Over, The number is ${randomNumber}`
            } else {
            result = "You too low! 😢";
            isWin = false
            }
        }
        chances--;
        historyDiv.innerHTML += `<h4>You Guessed ${guess}</h4>`
        return resultDiv.innerHTML = `<h4>${result}</h4>`
    }
    
}

// ================= main function =================//

// ================== reload function ==============//

const Reload = () => {
    if (!chances || isWin)
    location.reload()
}

// ================== reload function ===============//

submitButton.addEventListener('click', GuessingGame)

