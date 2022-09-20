var vict1 = getElementById("vict1");
var vict2 = getElementById("vict2");

var gato = getElementById("gato");
var tero = getElementById("tero");
var buey = getElementById("buey");
var lor = getElementById("lor");
var ardilla = getElementById("ardilla");
var buho = getElementById("buho");
var lince = getElementById("lince");
var pantera = getElementById("pantera");
var orca = getElementById("orca");
var cigu = getElementById("cigu");
var tibu = getElementById("tibu");
var edi = getElementById("edi");
var oso = getElementById("oso");
var llama = getElementById("llama");
var fonti = getElementById("fonti");
var clau = getElementById("clau");

var hall = getElementById("hall");
var lounge = getElementById("lounge");
var dinner = getElementById("dinner");
var kitchen = getElementById("kitchen");
var ball = getElementById("ball");
var conser = getElementById("conser");
var bil = getElementById("bil");
var lib = getElementById("lib");
var study = getElementById("study");

var axe = getElementById("axe");
var nav = getElementById("nav");
var soga = getElementById("soga");
var fuego = getElementById("fuego");
var pala = getElementById("pala");
var lob = getElementById("lob");
var spoon = getElementById("spoon");
var cajon = getElementById("cajon");
var garrafa = getElementById("garrafa");
var letrina = getElementById("letrina");

var investigador = "";
var victima = [];
var asesino = [];
var herramienta = ["Hacha", "Navaja", "Soga", "Fogón", "Pala", "Lobato", "Cucharón", "Cajón de patrulla", "Garrafa", "Letrina"];
var lugar = [Hall, "Sala de estar", "Comedor", "Cocina", "Salón de baile", "Jardín de invierno", "Sala de billar", "Biblioteca", "Estudio"];
var solucion = "";

if (vict1){
    var victima = ["Gato", "Buey", "Ardilla", "Lince", "Orca", "Tiburón", "Oso", "Fonti"];
    var asesino = ["Tero", "Lorna", "Búho", "Pantera", "Cigüeña", "Edith", "Llama", "Claudia"];
    

    for (var i = 0; i < victima.length; i++) {
        if (victima[i].match("Gato")) victima.splice(victima[i], 1);
        if (victima[i].match("Buey")) victima.splice(victima[i], 1);
        if (victima[i].match("Ardilla")) victima.splice(victima[i], 1);
        if (victima[i].match("Lince")) victima.splice(victima[i], 1);
        if (victima[i].match("Orca")) victima.splice(victima[i], 1);
        if (victima[i].match("Tiburón")) victima.splice(victima[i], 1);
        if (victima[i].match("Oso")) victima.splice(victima[i], 1);
        if (victima[i].match("Fonti")) victima.splice(victima[i], 1);
    }

    if (victima.length === 1) { console.log(victima)};

    for (var i = 0; i < asesino.length; i++) {
        if (asesino[i].match("Tero")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Lorna")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Búho")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Pantera")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Cigüeña")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Edith")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Llama")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Claudia")) asesino.splice(victima[i], 1);
    }

    if (asesino.length === 1) { console.lo(asesino)};

} else if (vict2){
    var asesino = ["Gato", "Buey", "Ardilla", "Lince", "Orca", "Tiburón", "Oso", "Fonti"];
    var victima = ["Tero", "Lorna", "Búho", "Pantera", "Cigüeña", "Edith", "Llama", "Claudia"];

    for (var i = 0; i < victima.length; i++) {
        if (victima[i].match("Tero")) victima.splice(victima[i], 1);
        if (victima[i].match("Lorna")) victima.splice(victima[i], 1);
        if (victima[i].match("Búho")) victima.splice(victima[i], 1);
        if (victima[i].match("Pantera")) victima.splice(victima[i], 1);
        if (victima[i].match("Cigüeña")) victima.splice(victima[i], 1);
        if (victima[i].match("Edith")) victima.splice(victima[i], 1);
        if (victima[i].match("Llama")) victima.splice(victima[i], 1);
        if (victima[i].match("Claudia")) victima.splice(victima[i], 1);
    }

    if (victima.length === 1) { console.log(victima)};

    for (var i = 0; i < asesino.length; i++) {
        if (asesino[i].match("Gato")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Buey")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Ardilla")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Lince")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Orca")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Tiburón")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Oso")) asesino.splice(victima[i], 1);
        if (asesino[i].match("Fonti")) asesino.splice(victima[i], 1);
    }

    if (asesino.length === 1) { console.log(asesino)};
}

class solucion{
    constructor(victima){
        this.victima = victima;
        this.asesino = asesino;
        this.herramienta = herramienta;
        this.lugar = lugar;
    }
}