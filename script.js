document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid');
    
    function createDiv(size) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        return div;
    }
    
    function createGrid(gridSize) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                grid.appendChild(createDiv(grid.clientWidth / gridSize));
            }
        }
    }
    
    // Call the createGrid function to create the grid
    createGrid(4); // You can specify the desired grid size here
});
