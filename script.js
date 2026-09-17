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
sketchContainer.addEventListener('pointerover', (event) => {
    event.target.style.backgroundColor = color;
}); 

clearBtn.addEventListener('click', () => {
    sketchContainer.replaceChildren();
    generateSketchGrid();

});

// Code
if (!sketchContainer.hasChildNodes()) generateSketchGrid();