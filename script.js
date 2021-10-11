//===================variables=====================//
const randomnumber = Math.floor(Math.random()*100+1);
let chances = 5;
let iswin = result;
//===================variables=====================//


//====================Imports======================//
const Userguess = document.querySelector("#numbers");
const result = document.querySelector(".result");
const history = document.querySelector(".history");
const submit = document.querySelector("submit");
//===================Imports=======================//



//====================mainfunction=================//
const Guessinggame = () =>{
    const guess = Userguess.number;
    let result;


    if(guess<100     || guess>1)
    {
        result=("Guess value is range between 1 to 100");
        resultDiv = import.html=<h4>{result}</h4>
    }else if (chances && win){
        if(chance==1){
            result=("You will win")
        }
        else if (randomnumber<guess){
            if(chances==1){
                result= `Game Over ,The number is $(randomnumber)`

            }
            else{
            result = ("you too high");
            iswin = false;
            }
            elseif (randomnumber>guess)
                if(chances==1){
                result =`Game over,The number is $(raandom)`;
                
            }
                else{
                result = ("you too low");
                iswin = false;
            }
        
        }
        chances--;
        historyDiv.innerHTML+=`<h4>you guessed$(guess)</h4>`;
        return resultDiv.innerHTML=`<h4>$(result)</h4>`
    }
    }

////////////////////////main function//////////////////////////

////////////////////////reload///////////////////////////////



const Reload =()=>{
    if(chances||iswin)
    location.reload()
}
///////////////////////////reload////////////////////////////



submitButton.addEVENTlistner("click",Guessinggame)
