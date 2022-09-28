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

var investigador = "";
var col1 = ["Gato", "Buey", "Ardilla", "Lince", "Orca", "Tiburón", "Oso", "Fonti"];
var col2 = ["Tero", "Lorna", "Búho", "Pantera", "Cigüeña", "Edith", "Llama", "Claudia"];
var victima = [];
var asesino = [];
var herramienta = ["Hacha", "Navaja", "Soga", "Fogón", "Pala", "Lobato", "Cucharón", "Cajón de patrulla", "Garrafa", "Letrina"];
var lugar = ["Hall", "Sala de estar", "Comedor", "Cocina", "Salón de baile", "Jardín de invierno", "Sala de billar", "Biblioteca", "Estudio"];

console.log(col1);
console.log(col2);
console.log(herramienta);
console.log(lugar);

if (vict1) {
    console.log("funca");
    victima = col1;
    asesino = col2;
    
}

    
const solucion = {
    victima: "",
    asesino: "",
    herramienta: "",
    lugar: "",
};
