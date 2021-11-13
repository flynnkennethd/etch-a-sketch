/*declare variables for canvas and slider*/
const canvas = document.querySelector('#div-canvas')
const slider = document.querySelector('#slider');

//color buttons and color variable
let color = 'black';
const black = document.querySelector('#black');
const white = document.querySelector('#white');
const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const indigo = document.querySelector('#indigo');
const violet = document.querySelector('#violet');

//color updater
black.onclick =() => color = 'black';
white.onclick =() => color = 'white';
red.onclick =() => color = 'red';
orange.onclick =() => color = 'orange';
yellow.onclick =() => color = 'yellow';
green.onclick =() => color = 'green';
blue.onclick =() => color = 'blue';
indigo.onclick =() => color = 'indigo';
violet.onclick =() => color = '#6600cc';

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