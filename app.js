'use strict';

const newCardForm = document.querySelector('.new-card-form');   // formular
const overlay = document.querySelector('.overlay'); // ztmavi pozadi
const newCardBtn = document.getElementById('new-card-btn'); // otevre formular 
const saveFlashcardBtn = document.getElementById('save-btn'); // ulozi formular
const cancelNewCardForm = document.getElementById('cancel-btn'); // zavre formular a posledni NEulozi data
let flashcardsArray = [];  


const openNewCardForm = function () {
    newCardForm.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeNewCardForm = function () {
    newCardForm.classList.add('hidden');
    overlay.classList.add('hidden');
};

const hanzi = document.getElementById('input-hanzi');
const pinyin = document.getElementById('input-pinyin');
const translation = document.getElementById('input-translation');
const hskCategory = document.getElementById('category-select');
const flashcard = document.querySelector('.flashcard');


const createFlashcard = (text) => {
    flashcard.innerHTML += '';
    flashcard.innerHTML +=      
     `<div class="card">
    <h1 class="hanzi-fc">${text.znak}</h1>
    <div id="pinyin-fc" class="hide">${text.pinyin}</div>
    <div id="translation-fc" class="hide">${text.preklad}</div>
    <div id="hsk-fc" class="hide">${text.hsk}</div>
    <div class="flashcard-buttons">
      <button id="delete-flashcard-btn" class="btn delete">Delete</button>
    </div>
    </div>`;

    document.querySelector('.flashcards-box').appendChild(flashcard);
    
};

const deleteBtn = document.getElementById('delete-flashcard-btn');
deleteBtn.addEventListener('click', function() {
    console.log('cus');
});

flashcardsArray.forEach(createFlashcard);

const saveFlashcard = (e) => {
    e.preventDefault();

    // 1. vezme INFO od uzivatele ulozi do objektu flashcardInfo
    let flashcardInfo = {
        'znak' : hanzi.value,
        'pinyin' : pinyin.value,
        'preklad' : translation.value,
        'hsk' : hskCategory.value
    };

    // 2. kazdy novy objekt ulozi do pole
    flashcardsArray.push(flashcardInfo);

    // 3. vytvori FLASHCARD - tzn. zavola fci createFlashcard (pro kazdy input se vytvori <div>, ulozi se do nej hodnota) 
    createFlashcard(flashcardsArray[flashcardsArray.length - 1], flashcardsArray.length - 1);

    hanzi.value = '';
    pinyin.value = '';
    translation.value = ''; 
    hskCategory.value = '';

    closeNewCardForm();
};


newCardBtn.addEventListener('click', openNewCardForm);
cancelNewCardForm.addEventListener('click', closeNewCardForm);
saveFlashcardBtn.addEventListener('click', saveFlashcard);

