const inputText = document.getElementById('inputchar'); //add enter field 
inputText.addEventListener("keyup", enterText, false); //add event
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


const ok = document.getElementById('ok'); //add output field 
const error = document.getElementById('error'); //add output field  
const reset = document.getElementById('reset'); //add button
const resultBlock = document.getElementById('result'); //add output field 


reset.addEventListener("click", resetAll, false); // add event reset
let indexTypedWord = 0;
let indexTypeChar = 0;
let meter = 0;
let errorMeter = 0;
let checkWord = [];
let WordsFromVoc;
let timercheck = 1;
let arrayWordsVoc = ['word', 'activity', 'learn', 'create', 'code', 'repository', 'request', 'pull', 'for', 'adapter', 'last', 'team', 'improve', 'power', 'way', 'world', 'access', 'more', 'edit', 'run', 'match', 'built', 'comments', 'design', 'open', 'cool', 'car', 'form', 'camera', 'apple', 'was', 'publish', 'guides', 'maintain', 'component', 'library', 'accomplish', 'window', 'type', 'allow', 'time', 'apps'];


const timeBlock = document.getElementById("time"); //add output field 
let timeSeconds = 0;
let timeMinuts = 0;
resultBlock.innerHTML = ` 0`;
timeBlock.innerHTML = ` 1:00`;
let time;
let timeSecondsZero = "0";







// timer
function timer() {
    timeSeconds = 60;
    time = setInterval(function() {
        timeSeconds--;
        if (timeSeconds <= 9) {
            timeSeconds.toString();
            timeSecondsZero = timeSecondsZero + timeSeconds;
            console.log("timeSeconds");
            timeBlock.innerHTML = `${timeMinuts}:${timeSecondsZero}`;
            timeSecondsZero = "0";
            timeSeconds = timeSeconds + 0;
        } else {
            timeBlock.innerHTML = ` ${timeMinuts}:${timeSeconds}`;
            console.log(timeSeconds);
        }
        if (timeSeconds == 0) {
            clearTimeout(time);
            showResult();
            timeBlock.innerHTML = ` 0:00`;
        }
    }, 1000);

}

//generate vocabulary
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





//show info
ok.innerHTML = ` ${meter}`;
error.innerHTML = ` ${errorMeter}`;
// сycle show word
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

//good typed 
function good() {
    vocWordsArray[indexTypedWord].style.color = '#38c695';
    vocWordsArray[indexTypedWord].classList.remove('selectword');
}
// bed typed
function bed() {
    vocWordsArray[indexTypedWord].style.color = '#fc5f45';
    vocWordsArray[indexTypedWord].classList.remove('selectword');
}




//check entered text
function enterText(event) {
    // Number 33 is the "space" key on the keyboard
    if (event.keyCode === 62) {
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
}




//retunr entered text
function returEnteredWord() {
    if (indexWord == 0 && indexTypeChar == 0 && timercheck == 1) {
        indicator();
        timer();
        timercheck = 0;
    }
    if (indexTypeChar == 0) {
        preparationWord()
        console.log(arrayCheckWord);
    }
    indexTypeChar++; //
    words = inputText.value; //return value input
    arrayWords = words.split(''); //divide up value on array
    arrayWordsSize = arrayWords.length - 1; //size array
    return arrayWords, arrayWordsSize;

}

//preparation word
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
    indexWord++;
    return indexWord;
}


//marking entered text
function indicator() {
    if (indexWord == 0) {
        indexTypedWord = 0;
    } else if (indexWord == 1) {
        indexTypedWord = 1;
    } else {
        indexTypedWord++;
    }
    vocWordsArray[indexWord].classList.add('selectword');
}






//compare the typed word and the word from the dictionary
function compareWord() {
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
            ok.innerHTML = ` ${meter}`;
        } else {
            errorMeter++
            error.innerHTML = ` ${errorMeter}`;
            bed()
        }
    } else {
        errorMeter++
        bed()
        error.innerHTML = ` ${errorMeter}`;
    }
    if (indexWord == checkWord.length) {
        resetWords();
        indexWord = 0;
        indexTypedWord = 0;
        indicator();
    }
}


//reset all
function resetAll() {
    clearTimeout(time);
    timeBlock.innerHTML = ` 1:00`;
    checkIndex = 0
    indexWord = 0;
    wordsVoc = 0;
    index = 0;
    meter = 0;
    indexWordN = 0;
    errorMeter = 0;
    indexTypedWord = 0;
    indexTypeChar = 0;
    timeSeconds = 0;
    timeMinuts = 0;
    timeSecondsZero = "0";
    timercheck = 1;



    //reset meter
    ok.innerHTML = ` ${meter}`;
    error.innerHTML = ` ${errorMeter}`;
    document.getElementById('inputchar').value = "";
    resetWords()
    reset.classList.remove('resetbttn');
    return timercheck, timeSecondsZero, timeMinuts, timeSecondsZero, indexWordN, checkWord, indexWord, indexTypedWord, indexTypeChar, wordsVoc, index, meter, errorMeter;
}
// show result
function showResult() {
    resultBlock.innerHTML = ` ${meter}`;
    checkIndex = 0
    indexWord = 0;
    wordsVoc = 0;
    index = 0;
    meter = 0;
    indexWordN = 0;
    errorMeter = 0;
    indexTypedWord = 0;
    indexTypeChar = 0;
    inputText.removeEventListener("keyup", enterText, false);
    //reset meter
    ok.innerHTML = ` ${meter}`;
    error.innerHTML = ` ${errorMeter}`;
    reset.classList.add('resetbttn');
    return indexWordN, checkWord, indexWord, indexTypedWord, indexTypeChar, wordsVoc, index, meter, errorMeter;
}
//reset  word field 
function resetWords() {
    for (let resetVoc of vocWordsArray) {
        resetVoc.parentNode.removeChild(resetVoc);
    }
    checkWord.length = 0;
    generateRandowVoc();
}
generateRandowVoc()