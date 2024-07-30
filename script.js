//variables//
const container = document.querySelector("#container")
const choice = document.querySelector("#choice")
const rainbow = document.querySelector('#rainbow')
const colorPicker = document.querySelector('#colorPicker')
const eraser = document.querySelector('#eraser')
const clear = document.querySelector('#clear')
const slider = document.querySelector("#sliderRange")
const gridSize = document.querySelector(".gridSize")


//setting up the default size of grid//
let sizeOfGrid = 16;

const createGrid = (sizeOfGrid) => {
    const defaultContainer = document.createElement('div');
    defaultContainer.classList.add('defaultContainer');

    for (let i = 0; i < sizeOfGrid; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let x = 0; x < sizeOfGrid; x++) {
            let gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
            const widthAndHeight = 600/sizeOfGrid;
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            //Default color//
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'navy'
            })

            //Rainbow button//
            rainbow.addEventListener('click', () => {
                gridBox.addEventListener('mouseenter', () => {
                    gridBox.style.backgroundColor = getRandomColor();
                })
            })

            //Color picker//
            colorPicker.addEventListener('click', () => {
                gridBox.addEventListener('mouseenter', () => {
                    gridBox.style.backgroundColor = colorPicker.value
                })
            })

            //Eraser//
            eraser.addEventListener('click', () => {
                gridBox.addEventListener('mouseenter', () => {
                    gridBox.style.backgroundColor = 'white'
                })
            })
            row.appendChild(gridBox);
        }
    defaultContainer.appendChild(row)
    }
    container.appendChild(defaultContainer)
}
createGrid(sizeOfGrid);

//Use the slider to change the grid size//
slider.addEventListener('input', changeGrid)

function changeGrid() {
    let newSize = slider.value
    const defaultContainer = document.querySelector('.defaultContainer')
    defaultContainer.remove()
    createGrid(newSize)
    gridSize.textContent = `${newSize}x${newSize}`
}

//function to get a random color//
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


//'clear' button refreshes page//
function refreshPage () {
    location.reload()
}
clear.addEventListener('click', refreshPage)



