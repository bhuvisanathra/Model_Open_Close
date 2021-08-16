'use strict';

//variables
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Functions
//Close the Model Function
const closemodelFunction = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Open the Model Function
const openModelFuntion = function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


//Display the Button Text
for (let i = 0; i < btnOpenModal.length; i++) {

    //Click Event
    btnOpenModal[i].addEventListener('click', openModelFuntion);
}


//Click Close Button To Close
btnCloseModal.addEventListener('click', closemodelFunction);

//Click Overlay To Exit 
overlay.addEventListener('click', closemodelFunction);
