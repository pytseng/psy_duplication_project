var counter = 1;
$(document).ready(function(){

	$('#collapseExample').on('hidden.bs.collapse', function () {
		console.log("ddd");
		counter +=1;
		if(counter>1){
			$('#ad01').show();
		}		
	})

});
