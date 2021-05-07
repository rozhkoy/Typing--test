const inputText = document.getElementById('inputchar');
//add enter field 

let checkWord = ['word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match'];
// check word
let words;
let checkIndex = 0
let indexWord = 0;
let wordsVoc = 0;
let index = 0;
let indexWordN = 0;
let vocWordsArray;
let reset = document.getElementById('reset');
reset.addEventListener("click", resetAll, false);
let indexTypedWord = 0;
let indexTypeChar = 0;

function resetAll() {
    checkIndex = 0
    indexWord = 0;
    wordsVoc = 0;
    index = 0;
    return checkWord, indexWord, wordsVoc, index;
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
showWord()

document.addEventListener('keyup', returEnteredWord, false);


function returEnteredWord() {

    if (indexTypeChar == 0) {
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
        compareWord();
        indexTypeChar = 0;
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


    vocWordsArray[indexTypedWord].style.background = 'yellow';
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
        } else {
            console.log('no ok');
        }
    } else {
        console.log('no match');
    }
    indexWord++;

}