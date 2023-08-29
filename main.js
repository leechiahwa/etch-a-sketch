const container = document.querySelector('.container');

let row = 16;
let column = 16;

for (i = 0; i < row; i++)
{
    for (j = 0; j < column; j++)
    {
        const grid = document.createElement("div");
        grid.classList.add("square");
        container.appendChild(grid);
    }
}