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

// Botones sospechosos:
function sospechoso(name) {
    switch (name){
        case "Gato":
            document.getElementById('labelGato').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoGato').style.display = 'none';
            break;
        case "Tero":
            document.getElementById('labelTero').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoTero').style.display = 'none';
            break;
        case "Buey":
            document.getElementById('labelBuey').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoBuey').style.display = 'none';
            break;
        case "Lor":
            document.getElementById('labelLor').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoLor').style.display = 'none';
            break;
        case "Ard":
            document.getElementById('labelArd').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoArd').style.display = 'none';
            break;
        case "Bu":
            document.getElementById('labelBu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoBu').style.display = 'none';
            break;
        case "Li":
            document.getElementById('labelLi').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoLi').style.display = 'none';
            break;
        case "Pan":
            document.getElementById('labelPan').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoPan').style.display = 'none';
            break;
        case "Orca":
            document.getElementById('labelOrca').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoOrca').style.display = 'none';
            break;
        case "Cigu":
            document.getElementById('labelCigu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoCigu').style.display = 'none';
            break;
        case "Tibu":
            document.getElementById('labelTibu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoTibu').style.display = 'none';
            break;
        case "Edi":
            document.getElementById('labelEdi').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoEdi').style.display = 'none';
            break;
        case "Oso":
            document.getElementById('labelOso').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoOso').style.display = 'none';
            break;
        case "Llama":
            document.getElementById('labelLlama').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoLlama').style.display = 'none';
            break;
        case "Fonti":
            document.getElementById('labelFonti').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoFonti').style.display = 'none';
            break;
        case "Clau":
            document.getElementById('labelClau').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
            document.getElementById('logoClau').style.display = 'none';
            break;
    }
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