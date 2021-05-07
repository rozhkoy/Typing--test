const inputText = document.getElementById('inputchar');
//add enter field 

let checkWord = ['word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match'];

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







document.addEventListener('keyup', returEnteredWord, false);


function returEnteredWord() {

    if (indexWord == 0) {
        indicator();
    }
    indexTypeChar++;

    words = inputText.value;
    //return value input
    arrayWords = words.split('');
    //divide up value on array
    arrayWordsSize = arrayWords.length - 1;
    //size array
    if (arrayWords[arrayWordsSize] == " ") {
        console.log(words);
        indexTypeChar = 0;
        compareWord();
        if (indexTypeChar == 0) {
            indicator();
        }
    }

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
        indexTypedWord = 0;
    } else {
        indexTypedWord++;
    }


    vocWordsArray[indexTypedWord].style.background = '#0000';
    vocWordsArray[indexWord].style.background = 'red';

}



function compareWord() {
    preparationWord();

    document.getElementById('inputchar').value = "";
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
            ok.innerHTML = `OK: ${meter}`;
        } else {
            errorMeter++
            error.innerHTML = `Error: ${errorMeter}`;
        }
    } else {
        errorMeter++
        error.innerHTML = `Error: ${errorMeter}`;
    }
    indexWord++;

}


showWord()