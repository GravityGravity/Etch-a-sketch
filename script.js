// Globals


// Mutable Vars
let gridSize = 16; //cells per row and per column
let color = 'black'

// Queries
const sketchContainer = document.querySelector('#container');
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
    console.log(event); 
    event.target.style.backgroundColor = color;
}

// Events
sketchContainer.addEventListener('click', (event) => {
    console.log(event); 
    event.target.style.backgroundColor = color;
}); 

// Code
if (!sketchContainer.hasChildNodes()) generateSketchGrid();