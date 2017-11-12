var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
$(document).ready(function(){
	$('#cat01').on('show.bs.collapse', function () {
	  $('#cat02').collapse('hide');
	  $('#cat03').collapse('hide');
		console.log("ddd");
		counter1 +=1;
		if(counter1>1){
			$('#ad01').show();
			$('#ball06').hide();
		}
	})
	$('#cat02').on('show.bs.collapse', function () {
	  $('#cat01').collapse('hide');
	  $('#cat03').collapse('hide');
	  		console.log("ddd");
		counter2 +=1;
		if(counter2>1){
			$('#ad02').show();
		}
	})

	$('#cat03').on('show.bs.collapse', function () {
	  $('#cat01').collapse('hide');
	  $('#cat02').collapse('hide');
		console.log("ddd");
		counter3 +=1;
		if(counter3>1){
			$('#ad03').show();
		}
	})
});

<<<<<<< HEAD

$("#countdown").countdown360({
  radius      : 60.5,
  seconds     : 5,
=======
$("#countdown").countdown360({
  radius      : 60.5,
  seconds     : 30,
>>>>>>> pytseng/master
  strokeWidth : 15,
  fillStyle   : '#0276FD',
  strokeStyle : '#003F87',
  fontSize    : 50,
  fontColor   : '#FFFFFF',
<<<<<<< HEAD
  autostart: false,
  onComplete  : function () {
		console.log('completed')
		// window.location.href = "https://docs.google.com/forms/u/0/?tgif=d"
	}
=======
  autostart: true,
  onComplete  : function () { console.log('FUCK YOU') }
>>>>>>> pytseng/master
}).start()
