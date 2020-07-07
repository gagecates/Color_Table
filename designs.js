// declare DOM element variables
var color = document.getElementById("colorPicker");

var height = document.getElementById("inputHeight");

var width = document.getElementById("inputWidth");

var table = document.getElementById("pixelCanvas");

var gridSize = document.getElementById("sizePicker");

// Add event listener to form submit button. Prevent page refresh, clear the colors in the cells, and call the make grid function.
gridSize.addEventListener("submit", function(ev){
    ev.preventDefault();
    table.innerHTML = ""
    makeGrid(width.value, height.value)
});

// Creates a blank table based on users height and width input. Then color the clicked cells according to users color choice.
function makeGrid(width, height) {
    var x;
    var y;
    for(x = 0; x <= height; ++x){
        var row = table.insertRow(x);
        table.appendChild(row);
        for(y = 0; y < width; ++y){
            var cell = document.createElement('td')
            row.appendChild(cell);
            cell.addEventListener("click",function(ev) {
                ev.target.style.backgroundColor = color.value;
            });
            
        }
    }
}