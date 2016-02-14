$(document).ready(function(){


$('#soundbtn').click(function(){
	     $('#soundbtn').children().toggleClass('fa-volume-up','fa-volume-off');
	});

	$('#color').contents().css('color','#3e3267');

	$('ul.colorlist li').on('click',function(){

		var color = $(this).attr('class');

		if (color === "purple"){
			$('#color').contents().css('color','#3e3267');
			$('#gameboy').attr('class','');
			$('#gameboy').attr('class','purple');
		}
		if (color === "yellow"){
			$('#color').contents().css('color','#ffb70d');
			$('#gameboy').attr('class','');
			$('#gameboy').attr('class','yellow');
		}
		if (color === "red"){
			$('#color').contents().css('color','#f3001b');
			$('#gameboy').attr('class','');
			$('#gameboy').attr('class','red');
		}
		if (color === "green"){
			$('#color').contents().css('color','#8ed417');
			$('#gameboy').attr('class','');
			$('#gameboy').attr('class','green');
		}

	});
 
  // Color Dropup

  var colorBtn = document.getElementById('color');

  colorBtn.onclick = function() {
    var colorMenu = document.getElementById('colorlist');
    if (colorMenu.style.display !== 'none') {
        colorMenu.style.display = 'none';
    }
    else {
        colorMenu.style.display = 'block';
    }
  };

  var saveBtn = document.getElementById('saveBtn');

  saveBtn.onclick = function() {
    var saveMenu = document.getElementById('saveMenu');
    if (saveMenu.style.display !== 'none') {
        saveMenu.style.display = 'none';
    }
    else {
        saveMenu.style.display = 'block';
    }
  };

});