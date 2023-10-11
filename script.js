document.addEventListener('DOMContentLoaded', () => {

let size = 0;
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')

createGrid(4)

btn1.addEventListener('click', () => {
    createGrid(4)
})

btn2.addEventListener('click', () => {
    createGrid(10)
})

btn3.addEventListener('click', () => {
    createGrid(16)
})

btn4.addEventListener('click', () => {
    createGrid(30)
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





})