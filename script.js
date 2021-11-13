/*declare variables for canvas, grid dimensions,
grid area, slider*/
const canvas = document.querySelector('#div-canvas')
let gridWidth = 50;
let gridArea = gridWidth * gridWidth;
const slider = document.querySelector('#slider');

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
            event.target.classList.add('touched');
        })
    })
}
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
function updateGrid (width) {
    clearGrid();
    createGrid(width);
    indicatorUpdater(width);
}