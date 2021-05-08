const inputText = document.getElementById('inputchar');
//add enter field 
let arrayInputAddWords;
let randomNumber = 0;
let arrayWordsVocMeter = 0;
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
let resultBlock = document.getElementById('result');
reset.addEventListener("click", resetAll, false);
let indexTypedWord = 0;
let indexTypeChar = 0;
let meter = 0;
let errorMeter = 0;
let checkWord = [];
let WordsFromVoc;
arrayWordsVoc = ['word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match', 'word', 'time', 'match'];
let timeBlock = document.getElementById("time");
let timeSeconds = 60;
let timeMinuts = 0;
resultBlock.innerHTML = "Result: 0";
timeBlock.innerHTML = `Time: 1:00`;
let time;
let timeSecondsZero = "0";

function timer() {
    time = setInterval(function() {
        timeSeconds--;

        if (timeSeconds <= 9) {
            timeSeconds.toString();
            timeSecondsZero = timeSecondsZero + timeSeconds;

            timeBlock.innerHTML = `Time: ${timeMinuts}:${timeSecondsZero}`;
            timeSecondsZero = "0";
            timeSeconds = timeSeconds + 0;
        } else {
            timeBlock.innerHTML = `Time: ${timeMinuts}:${timeSeconds}`;
            console.log(timeSeconds);

        }
        if (timeSeconds == 0) {
            clearTimeout(time);
            showResult()
            timeBlock.innerHTML = `Time: 1:00`;
            timeSeconds = 60;
        }
    }, 1000);

}


function generateRandowVoc() {
    for (let i = 0; i < arrayWordsVoc.length; i++) {
        randomNumber = Math.floor(Math.random() * arrayWordsVoc.length);
        // console.log(randomNumber);
        checkWord[arrayWordsVocMeter] = arrayWordsVoc[randomNumber];
        arrayWordsVocMeter++;

    }
    arrayWordsVocMeter = 0;
    randomNumber = 0
    showWord()
}



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
    index = 0;
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

    if (indexWord == 0 && indexTypeChar == 0) {
        indicator();
        timer();
    }
    indexTypeChar++; //

    words = inputText.value; //return value input
    arrayWords = words.split(''); //divide up value on array
    arrayWordsSize = arrayWords.length - 1; //size array
    return arrayWords, arrayWordsSize;

}


function preparationWord() {
    if (checkWord[indexWord] == undefined) {
        resetWords();
        indexWord = 0;
        if (indexWord == 0 && indexTypeChar == 0) {
            indicator();
        }
    } else {
        arrayCheckWord = checkWord[indexWord].split('');
    }
    return indexWord;
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
    timeSeconds = 60;
    timeMinuts = 0;
    timeSecondsZero = "0";
    //reset meter
    ok.innerHTML = `OK: ${meter}`;
    error.innerHTML = `Error: ${errorMeter}`;
    document.getElementById('inputchar').value = "";
    resetWords()

    //reset indicator
    for (let resetArray of vocWordsArray) {
        resetArray.style.background = '#0000';
    }
    return timeSecondsZero, timeMinuts, timeSecondsZero, indexWordN, checkWord, indexWord, indexTypedWord, indexTypeChar, wordsVoc, index, meter, errorMeter;
}

function showResult() {
    resultBlock.innerHTML = `Result: ${meter}`;
    resetAll();

}

function resetWords() {
    for (let resetVoc of vocWordsArray) {
        resetVoc.parentNode.removeChild(resetVoc);
    }
    checkWord.length = 0;
    generateRandowVoc();


}
generateRandowVoc()