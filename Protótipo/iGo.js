var display_element;

var tNow;
var tMin;
var tHour;

function start_time(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();

	h = checkTime(h);
	m = checkTime(m);

	document.getElementById("clock_display").innerHTML = h + ":" + m;
	tNow = m + h*100;
	console.log("tNow = m + h*100 ="+ tNow);

	tHour = h;
	tMin = m;
	var t = setTimeout(start_time, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function start_display(){
	display_element = document.getElementById("display");
	start_time();
}