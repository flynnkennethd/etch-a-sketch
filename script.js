const canvas = document.querySelector('#div-canvas')
let gridWidth = 100;
let gridSize = gridWidth * gridWidth;
for(i=0; i<gridSize; i++) {
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
