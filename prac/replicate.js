$(document).ready(function(){
	$('#cat01').on('show.bs.collapse', function () {
	  $('#cat02').collapse('hide');
	  $('#cat03').collapse('hide');
	})
	$('#cat02').on('show.bs.collapse', function () {
	  $('#cat01').collapse('hide');
	  $('#cat03').collapse('hide');
	})

	$('#cat03').on('show.bs.collapse', function () {
	  $('#cat01').collapse('hide');
	  $('#cat02').collapse('hide');
	})
});

// order of the items
var itemOrder = ['volleyball','met','bat']

//what position is the user in their cart
var position = 0
//addItem is called when user selects on the correct item
//parameter: value - for name of item selected by user
function addItem(value){
	//is the value they select in the
	//correct order position as the itemOrder array
	if(itemOrder.indexOf(value)==position){
    //item is in array and in correct order!
		position++;
		document.getElementById("cart").innerHTML = position;
		$('#cat01').collapse('hide');
		$('#cat02').collapse('hide');
		$('#cat03').collapse('hide');
    //if they have all the items - take them to survey - they are done!
		if(position>=itemOrder.length){
			// window.open("https://goo.gl/forms/vAoU5KlNVPBTEOCf2");
		}
	}
}
//countdown timer for user - when done - redirect to the form!
$("#countdown").countdown360({
  radius      : 60.5,
  seconds     : 30,
  strokeWidth : 15,
  fillStyle   : '#0276FD',
  strokeStyle : '#003F87',
  fontSize    : 50,
  fontColor   : '#FFFFFF',
  autostart: false,
  onComplete  : function () {
		console.log('completed')
		// window.open("https://goo.gl/forms/vAoU5KlNVPBTEOCf2");
	}
}).start()
