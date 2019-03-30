var display_element;

var tNow;
var tMin;
var THour;




function start_time(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();

	h = checkTime(h);
	m = checkTime(m);

	document.getElementById()
}


function start_display(){
	display_element = document.getElementById("display");

	start_time();

}