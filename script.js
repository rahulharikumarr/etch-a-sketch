document.addEventListener('DOMContentLoaded', () => {

let size = 0;
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')

const erasebtn = document.querySelector('#erase')



createGrid(4)



btn1.addEventListener('click', () => {
    createGrid(4)
    let squares = document.querySelectorAll('#grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    });
    

    

    
})

btn2.addEventListener('click', () => {
    createGrid(10)
    let squares = document.querySelectorAll('#grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    });
})

btn3.addEventListener('click', () => {
    createGrid(16)
    let squares = document.querySelectorAll('#grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    });
})

btn4.addEventListener('click', () => {
    createGrid(50)
    let squares = document.querySelectorAll('#grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });
    });
})

console.log(size)

function createDiv(size) {
    let div = document.createElement('div')
    div.id = 'grid-square'
    div.style.width = `calc(500px / ${size})`;
    div.style.height = `calc(500px / ${size})`;
    
    return div
}

function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    for(let i =0; i<size; i++)
    {
        let row = document.createElement('div')
        row.classList.add('row');
        row.style.width = '500px';
        row.style.height = `calc(500px / ${size})`;
        row.style.display = 'flex'

        for(let j=0; j<size; j++)
        {
            let cell = createDiv(size)
            row.appendChild(cell)
        }
        container.appendChild(row)
    }
}

let squares = document.querySelectorAll('#grid-square');


squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('active');
    });
});



})