var display_element;

    var t;
    var time;
    function start_time(){
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();

      h = checkTime(h);
      m = checkTime(m);

      
      document.getElementById("clock_display").innerHTML = h + ":" + m;
      document.getElementById("spanClock").innerHTML = h + ":" + m;
      
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
      console.log(screen);

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
      console.log(previousScreen);
      document.getElementById(current).style.display = "none";
      if (previousScreen == current) {
        document.getElementById("icons").style.display = "flex";
      }else{
        document.getElementById(previousScreen).style.display = "block";
      }
      
      
    }

    $(document).ready(function(){
      console.log("page loaded");
      $('#locked').click(function(event) {
        event.preventDefault();
        unlockScreen();       
      });
      $('#unlocked').click(function(){
        //lockScreen();       
      });
      $('#homeBtn').click(function(){
        console.log("clicou");
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
    });


//funcao para o evento onkeydown numa caixa de texto
// dado o id da div que queremos add codigo html
function showKeyboard(obj){
  console.log("showKeyboard");

  var search_input = $("#search-input").val();
  //se estiver vazio 
  if(!search_input){

    var strid = "#"+obj.id;
    console.log("strid="+strid);

    var conteudo = "<ul id=\"keyboard\">\n";

    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">`</span><span class=\"on\">~</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">1</span><span class=\"on\">!</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">2</span><span class=\"on\">@</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">3</span><span class=\"on\">#</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">4</span><span class=\"on\">$</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">5</span><span class=\"on\">%</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">6</span><span class=\"on\">^</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">7</span><span class=\"on\">&amp;</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">8</span><span class=\"on\">*</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">9</span><span class=\"on\">(</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">0</span><span class=\"on\">)</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">-</span><span class=\"on\">_</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">=</span><span class=\"on\">+</span></li>\n<li class=\"delete lastitem\">delete</li>\n");
    conteudo = conteudo.concat("<li class=\"tab\">tab</li>\n<li class=\"letter\">q</li>\n<li class=\"letter\">w</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">e</li>\n<li class=\"letter\">r</li>\n<li class=\"letter\">t</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">y</li>\n<li class=\"letter\">u</li>\n<li class=\"letter\">i</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">o</li>\n<li class=\"letter\">p</li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">[</span><span class=\"on\">{</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">]</span><span class=\"on\">}</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol lastitem\"><span class=\"off\">\\</span><span class=\"on\">|</span></li>\n");
    conteudo = conteudo.concat("<li class=\"capslock\">caps lock</li>\n<li class=\"letter\">a</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">s</li>\n<li class=\"letter\">d</li>\n<li class=\"letter\">f</li>\n<li class=\"letter\">g</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">h</li>\n<li class=\"letter\">j</li>\n<li class=\"letter\">k</li>\n<li class=\"letter\">l</li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">;</span><span class=\"on\">:</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">'</span><span class=\"on\">&quot;</span></li>\n");
    conteudo = conteudo.concat("<li class=\"return lastitem\">return</li>\n<li class=\"left-shift\">shift</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">z</li>\n<li class=\"letter\">x</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">c</li>\n<li class=\"letter\">v</li>\n<li class=\"letter\">b</li>\n<li class=\"letter\">n</li>\n");
    conteudo = conteudo.concat("<li class=\"letter\">m</li>\n<li class=\"symbol\"><span class=\"off\">,</span><span class=\"on\">&lt;</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">.</span><span class=\"on\">&gt;</span></li>\n");
    conteudo = conteudo.concat("<li class=\"symbol\"><span class=\"off\">/</span><span class=\"on\">?</span></li>\n");
    conteudo = conteudo.concat("<li class=\"right-shift lastitem\">shift</li>\n<li class=\"space lastitem\">&nbsp;</li>\n</ul>");

    $(strid).append(conteudo);
    $(strid+":last-child").after("<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js\"></script>\n<script type=\"text/javascript\" src=\"js/keyboard.js\"></script>");

    $("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"kbd.css\">");
  }
}



$(function(){
  var $write = $('#textBox'),
    shift = false,
    capslock = false;
  
  $('#keyboard li').click(function(){
  var $this = $(this),
    character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
  
    // Shift keys
    if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
      $('.letter').toggleClass('uppercase');
      $('.symbol span').toggle();
      
      shift = (shift === true) ? false : true;
      capslock = false;
      return false;
    }

    // Caps lock
    if ($this.hasClass('capslock')) {
      $('.letter').toggleClass('uppercase');
      capslock = true;
      return false;
    }

    // Delete
    if ($this.hasClass('delete')) {
      var html = $write.html();
      
      $write.html(html.substr(0, html.length - 1));
      return false;
    }

    // Special characters
    if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
    if ($this.hasClass('space')) character = ' ';
    if ($this.hasClass('tab')) character = "\t";
    if ($this.hasClass('return')) character = "\n";

    // Uppercase letter
    if ($this.hasClass('uppercase')) character = character.toUpperCase();

    // Remove shift once a key is clicked.
    if (shift === true) {
      $('.symbol span').toggle();
      if (capslock === false) $('.letter').toggleClass('uppercase');
      
      shift = false;
    }

    // Add the character
    $write.html($write.html() + character);

  });

});