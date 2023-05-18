var gatoPress = false;
var teroPress = false;
var bueyPress = false;
var lorPress = false;
var ardPress = false;
var buPress = false;
var liPress = false;
var panPress = false;
var orPress = false;
var ciguPress = false;
var tibuPress = false;
var ediPress = false;
var osoPress = false;
var llamPress = false;
var fonPress = false;
var clauPress = false;

var hallPress = false;
var louPress = false;
var dinPress = false;
var kitPress = false;
var ballPress = false;
var stuPress = false;
var billPress = false;
var libPress = false;
var conPress = false;

var navaPress = false;
var sogaPress = false;
var fuePress = false;
var palaPress = false;
var lobPress = false;
var spoPress = false;
var cajPress = false;
var garPress = false;
var letPress = false;

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
    document.getElementById('cellVict1').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
}
function victim2(){
    document.getElementById("victLbl1").style.display = 'none';
    document.getElementById('cellVict2').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
}

// Botones sospechosos:
function sospechoso(name) {
    switch (name){
        case "Gato":
            if (gatoPress === false) {
                document.getElementById('labelGato').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoGato').style.display = 'none';
                gatoPress = true;
            } else {
                document.getElementById('labelGato').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoGato').style.display = 'inline-block';
                gatoPress = false;
            }
            break;
        case "Tero":
            if (teroPress === false) {
                document.getElementById('labelTero').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoTero').style.display = 'none';
                teroPress = true;
            } else {
                document.getElementById('labelTero').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoTero').style.display = 'inline-block';
                teroPress = false;
            }
            break;
        case "Buey":
            if (bueyPress === false) {
                document.getElementById('labelBuey').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBuey').style.display = 'none';
                bueyPress = true;
            } else {
                document.getElementById('labelBuey').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBuey').style.display = 'inline-block';
                bueyPress = false;
            }
            break;
        case "Lor":
            if (lorPress === false) {
                document.getElementById('labelLor').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLor').style.display = 'none';
                lorPress = true;
            } else {
                document.getElementById('labelLor').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLor').style.display = 'inline-block';
                lorPress = false;
            }
            break;
        case "Ard":
            if (ardPress === false) {
                document.getElementById('labelArd').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoArd').style.display = 'none';
                ardPress = true;
            } else {
                document.getElementById('labelArd').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoArd').style.display = 'inline-block';
                ardPress = false;
            }
            break;
        case "Bu":
            if (buPress === false) {
                document.getElementById('labelBu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBu').style.display = 'none';
                buPress = true;
            } else {
                document.getElementById('labelBu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBu').style.display = 'inline-block';
                buPress = false;
            }
            break;
        case "Li":
            if (liPress === false) {
                document.getElementById('labelLi').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLi').style.display = 'none';
                liPress = true;
            } else {
                document.getElementById('labelLi').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLi').style.display = 'inline-block';
                liPress = false;
            }
            break;
        case "Pan":
            if (panPress === false) {
                document.getElementById('labelPan').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoPan').style.display = 'none';
                panPress = true;
            } else {
                document.getElementById('labelPan').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoPan').style.display = 'inline-block';
                panPress = false;
            }
            break;
        case "Orca":
            if (orPress === false) {
                document.getElementById('labelOrca').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoOrca').style.display = 'none';
                orPress = true;
            } else {
                document.getElementById('labelOrca').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoOrca').style.display = 'inline-block';
                orPress = false;
            }
            break;
        case "Cigu":
            if (ciguPress === false) {
                document.getElementById('labelCigu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoCigu').style.display = 'none';
                ciguPress = true;
            } else {
                document.getElementById('labelCigu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoCigu').style.display = 'inline-block';
                ciguPress = false;
            }
            break;
        case "Tibu":
            if (tibuPress === false) {
                document.getElementById('labelTibu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoTibu').style.display = 'none';
                tibuPress = true;
            } else {
                document.getElementById('labelTibu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoTibu').style.display = 'inline-block';
                tibuPress = false;
            }
            break;
        case "Edi":
            if (ediPress === false) {
                document.getElementById('labelEdi').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoEdi').style.display = 'none';
                ediPress = true;
            } else {
                document.getElementById('labelEdi').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoEdi').style.display = 'inline-block';
                ediPress = false;
            }
            break;
        case "Oso":
            if (osoPress === false) {
                document.getElementById('labelOso').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoOso').style.display = 'none';
                osoPress = true;
            } else {
                document.getElementById('labelOso').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoOso').style.display = 'inline-block';
                osoPress = false;
            }
            break;
        case "Llama":
            if (llamPress === false) {
                document.getElementById('labelLlama').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLlama').style.display = 'none';
                llamPress = true;
            } else {
                document.getElementById('labelLlama').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLlama').style.display = 'inline-block';
                llamPress = false;
            }
            break;
        case "Fonti":
            if (fonPress === false) {
                document.getElementById('labelFonti').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoFonti').style.display = 'none';
                fonPress = true;
            } else {
                document.getElementById('labelFonti').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoFonti').style.display = 'inline-block';
                fonPress = false;
            }
            break;
        case "Clau":
            if (clauPress === false) {
                document.getElementById('labelClau').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoClau').style.display = 'none';
                clauPress = true;
            } else {
                document.getElementById('labelClau').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoClau').style.display = 'inline-block';
                clauPress = false;
            }
            break;
    }
}

function donde(lugar){
    switch (lugar){
        case "Hall":
            if (hallPress === false) {
                document.getElementById('labelHall').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoHall').style.display = 'none';
                hallPress = true;
            } else {
                document.getElementById('labelHall').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoHall').style.display = 'inline-block';
                hallPress = false;
            }
            break;
        case "Lounge":
            if (louPress === false) {
                document.getElementById('labelLounge').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLounge').style.display = 'none';
                louPress = true;
            } else {
                document.getElementById('labelLounge').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLounge').style.display = 'inline-block';
                louPress = false;
            }
            break;
        case "Din":
            if (dinPress === false) {
                document.getElementById('labelDin').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoDin').style.display = 'none';
                dinPress = true;
            } else {
                document.getElementById('labelDin').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoDin').style.display = 'inline-block';
                dinPress = false;
            }
            break;
        case "Kit":
            if (kitPress === false) {
                document.getElementById('labelKit').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoKit').style.display = 'none';
                kitPress = true;
            } else {
                document.getElementById('labelKit').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoKit').style.display = 'inline-block';
                kitPress = false;
            }
            break;
        case "Ball":
            if (ballPress === false) {
                document.getElementById('labelBall').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBall').style.display = 'none';
                ballPress = true;
            } else {
                document.getElementById('labelBall').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBall').style.display = 'inline-block';
                ballPress = false;
            }
            break;
        case "Stu":
            if (stuPress === false) {
                document.getElementById('labelStu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoStu').style.display = 'none';
                stuPress = true;
            } else {
                document.getElementById('labelStu').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoStu').style.display = 'inline-block';
                stuPress = false;
            }
            break;
        case "Bill":
            if (billPress === false) {
                document.getElementById('labelBill').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBill').style.display = 'none';
                billPress = true;
            } else {
                document.getElementById('labelBill').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoBill').style.display = 'inline-block';
                billPress = false;
            }
            break;
        case "Lib":
            if (libPress === false) {
                document.getElementById('labelLib').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLib').style.display = 'none';
                libPress = true;
            } else {
                document.getElementById('labelLib').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLib').style.display = 'inline-block';
                libPress = false;
            }
            break;
        case "Con":
            if (conPress === false) {
                document.getElementById('labelCon').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoCon').style.display = 'none';
                conPress = true;
            } else {
                document.getElementById('labelCon').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoCon').style.display = 'inline-block';
                conPress = false;
            }
            break;
    }
}
function conQue(tool){
    switch (tool){
        case "Nava":
            if (navaPress === false) {
                document.getElementById('labelNava').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoNava').style.display = 'none';
                navaPress = true;
            } else {
                document.getElementById('labelNava').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoNava').style.display = 'inline-block';
                navaPress = false;
            }
            break;
        case "Soga":
            if (sogaPress === false) {
                document.getElementById('labelSoga').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoSoga').style.display = 'none';
                sogaPress = true;
            } else {
                document.getElementById('labelSoga').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoSoga').style.display = 'inline-block';
                sogaPress = false;
            }
            break;
        case "Fuego":
            if (fuePress === false) {
                document.getElementById('labelFuego').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoFuego').style.display = 'none';
                fuePress = true;
            } else {
                document.getElementById('labelFuego').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoFuego').style.display = 'inline-block';
                fuePress = false;
            }
            break;
        case "Pala":
            if (palaPress === false) {
                document.getElementById('labelPala').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoPala').style.display = 'none';
                palaPress = true;
            } else {
                document.getElementById('labelPala').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoPala').style.display = 'inline-block';
                palaPress = false;
            }
            break;
        case "Lob":
            if (lobPress === false) {
                document.getElementById('labelLob').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLob').style.display = 'none';
                lobPress = true;
            } else {
                document.getElementById('labelLob').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLob').style.display = 'inline-block';
                lobPress = false;
            }
            break;
        case "Spo":
            if (spoPress === false) {
                document.getElementById('labelSpo').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoSpo').style.display = 'none';
                spoPress = true;
            } else {
                document.getElementById('labelSpo').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoSpo').style.display = 'inline-block';
                spoPress = false;
            }
            break;
        case "Caj":
            if (cajPress === false) {
                document.getElementById('labelCaj').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoCaj').style.display = 'none';
                cajPress = true;
            } else {
                document.getElementById('labelCaj').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoCaj').style.display = 'inline-block';
                cajPress = false;
            }
            break;
        case "Gar":
            if (garPress === false) {
                document.getElementById('labelGar').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoGar').style.display = 'none';
                garPress = true;
            } else {
                document.getElementById('labelGar').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoGar').style.display = 'inline-block';
                garPress = false;
            }
            break;
        case "Letri":
            if (letPress === false) {
                document.getElementById('labelLetri').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(255, 0 , 0, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLetri').style.display = 'none';
                letPress = true;
            } else {
                document.getElementById('labelLetri').style.backgroundImage = 'linear-gradient(180deg,rgba(0,0,0,0.8), rgba(3, 77 , 51, 0.8), rgba(0,0,0,0.8))';
                document.getElementById('logoLetri').style.display = 'inline-block';
                letPress = false;
            }
            break;
    }
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