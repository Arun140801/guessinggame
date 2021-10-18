
//=====================Variables====================//
const randomNumber = Math.floor(Math.random()*100+1)
let chances = 5;
let isWin = false;

//=====================Variables====================//


//=======================Import=====================//

const userguess = document.querySelector("#number")
const resultDiv = document.querySelector(".result")
const historyDiv = document.querySelector(".history")
const submitButton = document.querySelector("#submit")

//======================Import=====================//



//=======================main function============//

const GuessingGame = () =>{
    const guess = userguess.value;
    
    let result;
    if(guess>100 || guess<1){
        return resultDiv.innerHTML=<h4>$(result)</h4>
    }else if(chances && !isWin){
        if(randomNumber === guess){
            result = "You Won"; 
            isWin = true;
        }else if(randomNumber < guess){
            if(chances == 1){
                result = `Game Over The number is` 
                $(randomNumber)
            }else{
                result = "Your value too high";
            isWin = false;

            }
            
        }else if(randomNumber > guess){
            if(chances == 1){
                result = `Game Over The number is`
                $(randomNumber)
            }else{
                result = "Your value too low";
            isWin = false;
        }
            
        }
        chances--;
            
        historyDiv.innerHTML += <h4> You Guessed $(guess)</h4>
        return resultDiv.innerHTML = <h4>$(result)</h4>
    
    }
//========================main function=======================//

//========================reload==============================//
    const Reload =()=>{
        if(!chances || isWin)
        location.reload()
    }
    
}
//=============================reload========================//
