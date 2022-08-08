// Select color input from HTML file
const color = document.getElementById("colorPicker");
// select size input
const sizePicker = document.getElementById("sizePicker");
// pixelCanvas HTML table
const pixelCanvas = document.getElementById('pixelCanvas');

//call makeGrid when clicking submit
sizePicker.addEventListener("submit", makeGrid);



function makeGrid(event) 
{
    //Reset table so table doesnt append
    ResetTable()

    //Clicking on a "Submit" button, prevent it from submitting a form
    event.preventDefault();
    // take the value of the inputs height and width (cells)
    var row = this.elements.height.value;
    var cell = this.elements.width.value;
    // pass row & cell counts to createTable fucntion
    createTable(row, cell);
}

function createTable(row, cell) 
{
    //Create row(s)
    for (let x = 0; x < row; x++)
     {
        tableRow = document.createElement('tr');
        //Create cell(s)
        for (let y = 0; y < cell; y++) 
        {
            tableCell = document.createElement('td');
            tableCell.addEventListener("click", setColor)
            tableRow.appendChild(tableCell);
        }
        //add row(s) & cell(s) to pixelCanvas HTML table
        pixelCanvas.appendChild(tableRow);
  }
}
//set cell color selection from HTML form
function setColor()
{
    //set object's color
    this.style.backgroundColor = color.value;
}
//Resets table, removes HTML from pixelCanvas
function ResetTable() 
{
    pixelCanvas.innerHTML = '';
}