/*declare variables for canvas, grid dimensions,
grid area, slider,color selectors and main color variable*/
const canvas = document.querySelector('#div-canvas')
let gridWidth = 50;
let gridArea = gridWidth * gridWidth;
const slider = document.querySelector('#slider');
let color = 'black';

//function to create grid
function createGrid(width) {
    gridArea = width * width;
    canvas.style.cssText = `grid-template-columns: repeat(${width}, 1fr)`
    for(i=0; i<gridArea; i++) {
        let div = document.createElement('div');
        div.classList.add('sketch-div');
        canvas.appendChild(div);
    }
    const sketchDivs = document.querySelectorAll('.sketch-div');
    sketchDivs.forEach(element => {
        element.addEventListener('mouseover', function( event ) {
            event.target.style.backgroundColor = `${color}`;
        })
    })
}

//function to update dimensions indicator
function indicatorUpdater(value){
    const sliderIndicator = document.querySelectorAll('.slider-value');
    sliderIndicator.forEach(element => {
    element.innerHTML = value
    })
}

//function to reset grid
function clearGrid() {
    canvas.innerHTML = '';
}

//function to update grid with new dimensions
function updateGrid(width) {
    clearGrid();
    createGrid(width);
    indicatorUpdater(width);
}
window.onload = updateGrid(slider.value);