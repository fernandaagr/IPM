var expandImg = document.getElementById("expandedImg");

function showClicked(imgs) {
  expandImg.src = imgs.src;
  //document.getElementById("small").style.display = "none";
  document.getElementById("big").style.display = "block";
}

function closeImg(){
  document.getElementById("big").style.display = "none";
  //document.getElementById("small").style.display = "block";
}

//seta o indice (slideIndex) para a primeira imagem - 1
var slideIndex = 1;

//quando clica em uma das setas plusDivs() subtrai ou soma 1 ao indice
function plusDivs(n) {
    showImages(slideIndex += n);
}
function showImages(n) {
    var i;
    //pega elementos com a classe slides
    var x = document.getElementsByClassName("slide");
    //se o indice for maior que a quantidade elementos, seta  em 1
    if (n > x.length){
      slideIndex = 1;
    } 
    //se for menor que 1 seta no numero de elementos, no caso, no ultimo elemento
    if (n < 1) {
      slideIndex = x.length;
    }

    //var imgText = document.getElementById("imgtext");
    expandImg.src = x[slideIndex-1].src;
   
}

