function cellAt(x, y) {
	var row = document.getElementById('field').children[y]
    if (row)
    	return row.children[x]
}
	
// opens the cell at (x, y)
function toggle(x, y) {
	var cell = cellAt(x, y)
    if (cell)
	    $(cell).toggleClass("open");
}

function createField(width, height) {
    function open(x, y) {
        for (let qx = 0; qx < width; qx++) toggle(qx, y); // width + height
        for (let qy = 0; qy < height; qy++) toggle(x, qy);
        toggle(x, y);
      //   for (let qx = 0; qx < width; qx++) { // width * height
      //       for (let qy = 0; qy < height; qy++) if(x == qx || y == qy) {
      //        toggle(qx, qy);
            // }    
      //   }
        if (isWinner()) {
            $("#result").addClass('win')
        }
    }

    function isWinner() {
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                var $cell = $(cellAt(x, y));
                if (!$cell.hasClass("open")) {
                    return false
                }
            }
        }
        return true
    }

    var $field = document.getElementById('field') //http://javascript.ru/forum/misc/15298-sobytie-windows-onload.html
    while ($field.firstChild) {
        $field.removeChild($field.firstChild);
    }
    for (let y = 0; y < height; ++y) { // for each row
        var $row = document.createElement('div')
        $row.className = 'row'
        for (let x = 0; x < width; ++x) { // for each cell in row
            let $cell = document.createElement('div')
            $cell.className = 'cell'
            $row.appendChild($cell)
            $cell.onclick = function() { open(x, y); }
        }
        $field.appendChild($row)
    }
}

var first = document.getElementById("level1");
var second = document.getElementById("level2");
var third = document.getElementById("level3");

first.onclick = function() {
    createField(5, 5);
}

second.onclick = function() {
    createField(10, 10);
}
third.onclick = function() {
    createField(15, 15);
}

window.oncontextmenu = function() { return false }
$(".boom").hide()
