const inputText = document.getElementById('inputchar');
//add enter field 
let checkWord = [];
let addbutton = document.getElementById('ADD');
addbutton.addEventListener("click", addWords, false);
arrayWordsVoc = [];

// ['word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match'];
let arrayInputAddWords;

function addWords() {
    arrayWordsVoc.length = 0;
    arrayInputAddWords = document.getElementById('addWords').value;

    arrayWordsVoc = arrayInputAddWords.split('=').join(',').split(':').split('.');

    generateRandowVoc();
}

let randomNumber = 0;
let arrayWordsVocMeter = 0;

function generateRandowVoc() {
    for (let i = 0; i < arrayWordsVoc.length; i++) {
        randomNumber = Math.floor(Math.random() * arrayWordsVoc.length);
        // console.log(randomNumber);
        checkWord[arrayWordsVocMeter] = arrayWordsVoc[randomNumber];
        arrayWordsVocMeter++;

    }
    showWord()
}



let words;
let checkIndex = 0
let indexWord = 0;
let wordsVoc = 0;
let index = 0;
let indexWordN = 0;
let vocWordsArray;
let ok = document.getElementById('ok');
let error = document.getElementById('error');
let reset = document.getElementById('reset');
reset.addEventListener("click", resetAll, false);
let indexTypedWord = 0;
let indexTypeChar = 0;
let meter = 0;
let errorMeter = 0;

//show mater
ok.innerHTML = `OK: ${meter}`;
error.innerHTML = `Error: ${errorMeter}`;

function showWord() {
    wordsVoc = document.getElementById('words');

    for (let i = 0; i < checkWord.length; i++) {
        let spanblock = document.createElement('div');
        spanblock.className = "wordVoc";
        spanblock.innerHTML = checkWord[index];
        wordsVoc.append(spanblock);
        index++
    }
    vocWordsArray = Array.from(document.querySelectorAll('div.wordVoc'))
    return vocWordsArray;
}

function good() {
    vocWordsArray[indexTypedWord].style.background = '#0f0';
}

function bed() {
    vocWordsArray[indexTypedWord].style.background = '#f00';
}



inputText.addEventListener("keyup", function(event) {
    // Number 33 is the "space" key on the keyboard
    if (event.keyCode === 32) {
        console.log(words);
        returEnteredWord();
        document.getElementById('inputchar').value = "";


        indexTypeChar = 0;
        compareWord();
        if (indexTypeChar == 0) {
            indicator();
        }
    }
    if (event.keyCode != 32) {
        returEnteredWord();
    }
});

function returEnteredWord() {

    if (indexWord == 0) {
        indicator();
    }
    indexTypeChar++; //

    words = inputText.value; //return value input
    arrayWords = words.split(''); //divide up value on array
    arrayWordsSize = arrayWords.length - 1; //size array
    return arrayWords, arrayWordsSize;

}


function preparationWord() {
    if (checkWord[indexWord] == undefined) {
        console.log('ended test');
    } else {
        arrayCheckWord = checkWord[indexWord].split('');
    }

}



function indicator() {
    if (indexWord == 0) {
        indexTypedWord = 0;
    } else if (indexWord == 1) {
        indexTypedWord = 1;
    } else {
        indexTypedWord++;
    }

    vocWordsArray[indexWord].style.background = '#ccc';
}



function compareWord() {
    preparationWord();
    if (arrayCheckWord.length == arrayWordsSize) {
        checkIndex = 0;
        for (let i = 0; i <= arrayCheckWord.length; i++) {
            if (arrayCheckWord[checkIndex] == arrayWords[checkIndex]) {
                checkIndex++;
            }
        }
        if (checkIndex == arrayCheckWord.length) {
            console.log('ok');
            meter++;
            good()
            ok.innerHTML = `OK: ${meter}`;
        } else {
            errorMeter++
            error.innerHTML = `Error: ${errorMeter}`;
            bed()
        }
    } else {
        errorMeter++
        bed()
        error.innerHTML = `Error: ${errorMeter}`;
    }
    indexWord++;

}


//reset all
function resetAll() {
    checkIndex = 0
    indexWord = 0;
    wordsVoc = 0;
    index = 0;
    meter = 0;
    indexWordN = 0;
    errorMeter = 0;
    indexTypedWord = 0;
    indexTypeChar = 0;
    //reset meter
    ok.innerHTML = `OK: ${meter}`;
    error.innerHTML = `Error: ${errorMeter}`;
    document.getElementById('inputchar').value = "";
    //reset indicator
    for (let resetArray of vocWordsArray) {
        resetArray.style.background = '#0000';
    }
    return indexWordN, checkWord, indexWord, indexTypedWord, indexTypeChar, wordsVoc, index, meter, errorMeter;
}
generateRandowVoc()