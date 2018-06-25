$('document').ready(function(){
	// Select color input
	// Select size input
	let height, width, color, canvas;


	// When size is submitted by the user, call makeGrid()
	$('#sizePicker').submit(function(event) {
		event.preventDefault();
		height = $('#inputHeight').val();
		width = $('#inputWeight').val();
		makeGrid(height, width);
		//console.log('The height is:' +height+ ' and the width is:' +width);
	})

	function makeGrid(x, y) {
		canvas = $('#pixelCanvas');
		$('tr').remove();
		for (let i = 1; i <= x; i++) {
			canvas.append('<tr id=table' + i +'></tr>');
			for (let j = 1; j <= y; j++) {
				$('#table' + i).append('<td></td>');
			}
		}

		// add color
		$('td').click(function addColor() {
			color = $('#colorPicker').val();

			if ($(this).attr('style')) {
				$(this).removeAttr('style');
			}
			else {
				$(this).attr('style', 'background-color:' + color);
			}
			
		});
	}

});
