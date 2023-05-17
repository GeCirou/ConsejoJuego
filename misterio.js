var invBoton = investigadorButton = getElementById("investigador--boton");

var vict1 = document.getElementById("vict1");
var vict2 = document.getElementById("vict2");

var gato = document.getElementById("gato");
var tero = document.getElementById("tero");
var buey = document.getElementById("buey");
var lor = document.getElementById("lor");
var ardilla = document.getElementById("ardilla");
var buho = document.getElementById("buho");
var lince = document.getElementById("lince");
var pantera = document.getElementById("pantera");
var orca = document.getElementById("orca");
var cigu = document.getElementById("cigu");
var tibu = document.getElementById("tibu");
var edi = document.getElementById("edi");
var oso = document.getElementById("oso");
var llama =document. getElementById("llama");
var fonti = document.getElementById("fonti");
var clau = document.getElementById("clau");

var hall = document.getElementById("hall");
var lounge = document.getElementById("lounge");
var dinner = document.getElementById("dinner");
var kitchen = document.getElementById("kitchen");
var ball = document.getElementById("ball");
var conser = document.getElementById("conser");
var bil = document.getElementById("bil");
var lib = document.getElementById("lib");
var study = document.getElementById("study");

var axe = document.getElementById("axe");
var nav = document.getElementById("nav");
var soga = document.getElementById("soga");
var fuego = document.getElementById("fuego");
var pala = document.getElementById("pala");
var lob = document.getElementById("lob");
var spoon = document.getElementById("spoon");
var cajon = document.getElementById("cajon");
var garrafa = document.getElementById("garrafa");
var letrina = document.getElementById("letrina");

var col1 = 0;
var col2 = 0;
var victima = [];
var asesino = [];
var herramienta = 0;
var lugar = 0;

function investigadorBoton() {
    document.getElementById("investigador--input").style.display = 'none';
}

function victim1(){
    document.getElementById("victLbl2").style.display = 'none';
}
function victim2(){
    document.getElementById("victLbl1").style.display = 'none';
}

function sospechoso() {
    alert("Fui yo?")
}

function donde(){
    alert("Acá?");
}
function herramienta(){
    alert("Con esto?");
}
    
const solucion = {
    victima: "",
    asesino: "",
    herramienta: "",
    lugar: "",
};
function solucionBoton() {
    document.getElementById("solucion--div").style.display = 'none';
}