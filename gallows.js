let words = ['absurd','sister','alaeremil','puppy','quiz','zombie','jackpot','nightclub','vodka','injury','pixel','oxygen'];

function selectrandomWord(){
    return words[Math.floor(Math.random()*words.length)];
}

   let randomWord = selectrandomWord();
   let wordLenght = document.getElementById('words'); 
   wordLenght.innerHTML = randomWord.length;
   let GuessBox = document.getElementById('Guess');

for (let i = 0; i < randomWord.length; ++i){
    let WordGuess = document.createElement('p');
    WordGuess.classList.add('word-guess')
    WordGuess.textContent = "_";
    GuessBox.appendChild(WordGuess);
}

function updateWordGuess(index, letter) {
    let WordGuess = document.getElementsByClassName('word-guess')[index];
    WordGuess.textContent = letter;
  }

   let keyboard = document.getElementById('keyboard');
   let lifeLeft = document.getElementById('lifeLeft');
   let resultGame = document.getElementById('resultGame');
   let showLost = document.getElementById('life');
   let lifes = 7;
   let winner = 0;
   let checkGuess  = false;

function handleGuess(button) {        

    let letterGuess = button.textContent;   
    let occurrenceLetter = [];

    for (let indexword = 0; indexword < randomWord.length; ++indexword){
        if (randomWord[indexword] === letterGuess){
                                              //'sister' letter s
            occurrenceLetter.push(indexword); // [0, 2]
        }
        
    }

    if (occurrenceLetter.length !== 0 && lifes !== 1){
        
        for (let k = 0; k < occurrenceLetter.length; ++k){
            updateWordGuess(occurrenceLetter[k], letterGuess);// occurrenceLetter[0] = 0, occurrenceLetter[1] = 2;
            button.style.visibility = "hidden";
            ++winner;
              
        }
        if (lifes > 0 && winner === randomWord.length) {
            lifeLeft.innerHTML = lifes;
            resultGame.innerHTML = 'You win!!!'
            checkGuess = true; 
        }

    }else{

        if (!checkGuess){
            button.disabled = true; 
            if (lifes > 1){
                --lifes;
                lifeLeft.innerHTML = lifes;
            }else if (lifes === 1){
                showLost.innerHTML = 'You Lost!';
                resultGame.innerHTML = 'Game over';
            }
                
        }

    }
 };


for (let i = 97; i <= 122; ++i){

    let letter = String.fromCharCode(i);
    let button = document.createElement('button');
    button.textContent = letter;
    button.className = "btn btn-primary";
    keyboard.appendChild(button);

    button.addEventListener('click', function() {
        handleGuess(button);
      });
}

  