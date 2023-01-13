function hambac(){
    document.getElementById("side").style.width="370px";
    document.getElementById("buttonham").style.display="none";
    setTimeout(function(){    document.getElementById("closham").style.display="inline-block";
    document.getElementById("sidemain").style.display="inline";
    document.getElementById("sideprices").style.display="inline";
    document.getElementById("sidelocate").style.display="inline";
    document.getElementById("sidecommunicate").style.display="inline";

},800)
}
function hamkapa(){
    document.getElementById("side").style.width="85px";
    document.getElementById("buttonham").style.display="inline-block";
    document.getElementById("closham").style.display="none";
    document.getElementById("sidemain").style.display="none";
    document.getElementById("sideprices").style.display="none";
    document.getElementById("sidelocate").style.display="none";
    document.getElementById("sidecommunicate").style.display="none";
}
function openmain(){
    document.getElementById("mainicerik").style.display="block";
    document.getElementById("priceicerik").style.display="none";
    document.getElementById("locateicerik").style.display="none";
    document.getElementById("comicerik").style.display="none";
}
function openprice(){
    document.getElementById("mainicerik").style.display="none";
    document.getElementById("priceicerik").style.display="block";
    document.getElementById("locateicerik").style.display="none";
    document.getElementById("comicerik").style.display="none";
}
function openadress(){
    document.getElementById("mainicerik").style.display="none";
    document.getElementById("priceicerik").style.display="none";
    document.getElementById("locateicerik").style.display="block";
    document.getElementById("comicerik").style.display="none";
}
function openiletisim(){
    document.getElementById("mainicerik").style.display="none";
    document.getElementById("priceicerik").style.display="none";
    document.getElementById("locateicerik").style.display="none";
    document.getElementById("comicerik").style.display="block";
}