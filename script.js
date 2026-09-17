// Globals


// Mutable Vars
let gridSize = 16; //cells per row and per column
let color = 'black'

// Queries
const sketchContainer = document.querySelector('#container');
const clearBtn = document.querySelector('#clear-btn');
const gridSizeBtn = document.querySelector('#grid-size-btn');

// Functions
function createRow () {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < gridSize; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = 'white';
        row.append(cell);
    }
    return row;
}

function generateSketchGrid () {

    for (let i = 0; i < gridSize; i++) {
        sketchContainer.appendChild(
            createRow()
        );
    }
}

function colorTarget (event) {
    event.target.style.backgroundColor = color;
}

// Events
sketchContainer.addEventListener('mouseover', (event) => {
    if(event.buttons) event.target.style.backgroundColor = color;
}); 

sketchContainer.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = color;
}); 

clearBtn.addEventListener('click', () => {
    sketchContainer.replaceChildren();
    generateSketchGrid();

});

gridSizeBtn.addEventListener('click', () => {
    let input = prompt('Please input a positive integer grid size');
    gridSize = (input <= 0) ? 1 : +input;
    if (!typeof input) gridSize = 1;
    clearBtn.click();
});

// Code
if (!sketchContainer.hasChildNodes()) generateSketchGrid();