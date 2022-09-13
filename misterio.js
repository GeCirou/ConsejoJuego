var vict1 = getElementById("v1");
var vict2 = getElementById("v1");

var investigador = "";
var victima = [];
var asesino = [];
var herramienta = [Hacha, Navaja, Soga, Fogón, Pala, Lobato, Cucharón, Cajón de patrulla, Garrafa, Letrina];
var lugar = [Hall, Sala de estar, Comedor, Cocina, Salón de baile, Jardín de invierno, Sala de billar, Biblioteca, Estudio];
var solucion = "";

class solucion{
    constructor(victima){
        this.victima = victima;
        this.asesino = asesino;
        this.herramienta = herramienta;
        this.lugar = lugar;
    }
}

if (vict1){
    var victima = [Gato, Buey, Ardilla, Lince, Orca, Tiburón, Oso, Fonti];
    var asesino = [Tero, Lorna, Búho, Pantera, Cigüeña, Edith, Llama, Claudia];
} else if (vict2){
    var asesino = [Gato, Buey, Ardilla, Lince, Orca, Tiburón, Oso, Fonti];
    var victima = [Tero, Lorna, Búho, Pantera, Cigüeña, Edith, Llama, Claudia];
}

