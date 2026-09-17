// Globals


// Mutable Vars
let gridSize = 16; //cells per row and per column

// Queries
const sketchContainer = document.querySelector('#container');
// Functions

function createRow () {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < gridSize; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        row.append(cell);
    }

    return row;
}

function createSketchGrid () {

    for (let i = 0; i < gridSize; i++) {
        sketchContainer.appendChild(
            createRow()
        );
    }
}

// Code
if (!sketchContainer.hasChildNodes()) createSketchGrid();