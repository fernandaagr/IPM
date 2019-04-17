var display_element, tNow, tMin, tHour, t, time;

function start_time(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();

	h = checkTime(h);
	m = checkTime(m);

	document.getElementById("clock_display").innerHTML = h + ":" + m;
	document.getElementById("spanClock").innerHTML = h + ":" +m;
	
	//tNow = m + h*100;
	//console.log("tNow = m + h*100 ="+ tNow);

	tHour = h;
	tMin = m;			
	
	t = setTimeout(start_time, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function start_display(){
	start_time();

}
function lockScreen(){
	//document.getElementById("display").style.display = "none";
	event.preventDefault();
	$("#unlocked").css("display", "none");
	document.getElementById('locked').style.display = "block";
}
function unlockScreen(){
	event.preventDefault();
	document.getElementById("locked").style.display = "none";
	document.getElementById('unlocked').style.display = "block";
	/*
	$('#locked').fadeOut();
	$('#display').fadeIn();
		*/
}
function openScreen(event, screen){
	event.preventDefault();
	document.getElementById("previous").innerHTML = ""+screen;
	document.getElementById('icons').style.display = "none";
	//document.getElementById(screen).style.display = "block";
	//console.log(screen);

	// Declare all variables
    var i, tab;

    // Get all elements with class="tabcontent" and hide them
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(screen).style.display = "block";
}
function backToScreen(event, current){
	event.preventDefault();
	var previousScreen = document.getElementById("previous").innerHTML;
	//console.log(previousScreen);
	document.getElementById(current).style.display = "none";
	if (previousScreen == current) {
		document.getElementById("icons").style.display = "flex";
	}else{
		document.getElementById(previousScreen).style.display = "block";
	}	
}
$(document).ready(function(){
	//console.log("page loaded");
	$('#locked').click(function(event) {
		event.preventDefault();
		unlockScreen();				
	});
	$('#unlocked').click(function(){
		//lockScreen();				
	});
	$('#homeBtn').click(function(){
		//console.log("clicou");
		var isLocked = $('#locked').css('display');

	    if(isLocked == "none"){
			// Get all elements with class="tab" and hide them
			tab = document.getElementsByClassName("tab");
			for (i = 0; i < tab.length; i++) {
				tab[i].style.display = "none";
			}
			document.getElementById("icons").style.display = "flex";   
	    }else{
	    	console.log("its locked");
	    }
	});

	$('#search-input').click(function(){
		//console.log("search");
		//metodo para exibir keyboard
	});
});