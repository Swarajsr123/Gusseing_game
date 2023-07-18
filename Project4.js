let random= parseInt(Math.random() * 100 + 1);
// console.log(random);

const submit= document.querySelector('#subt');
const userinput=document.querySelector('#guessfield');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastresult');
const loworHi=document.querySelector('.loworhi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess = []
let numGuess = 1

let playgame = true;

// check the user is ready or not to play the game and then pass the entered value to the functions 
if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess = parseInt(userinput.value)
       console.log(guess);
       validateGuess(guess);
    })
}

// to validate the entered number with all the conditions and to procced further 
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a valid number')
    }else if(guess > 100){
        alert('Please enter a valid number')
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// to check the guessed number with the random value 
function checkGuess(guess){
    if(guess === random){
        displayMessage(`You gussed it right`);
        endGame()
    }else if(guess < random){
        displayMessage(`Number is Tooo Low`);
    }else if(guess > random){
        displayMessage(`Number is Tooo High`);
    }
}

// to clean the guessfield, add guesses in the array and to decrease the guesses and many more function 
function displayGuess(guess){
    userinput.value ='';
    guessSlot.innerHTML += `${guess} ,` ;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

// to display the msg about lose or win the game or low or high 
function displayMessage(message){
    loworHi.innerHTML =`<h2>${message}</h2>`
}

//to end the game 
function endGame(){
    userinput.value='';
    userinput.setAttribute('disabled' ,'')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playgame = false;
    newGame()
}

// to start the new game 
function newGame(){
    const newGame=document.querySelector('#newGame')
    newGame.addEventListener('click', function(e){
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`
        userinput.removeAttribute(`disabled`)
        startOver.removeChild(p);
        playgame=true;
    })
}








