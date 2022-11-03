
let play = document.getElementById("btn");
let reset = document.getElementById("reset");
let gano = document.getElementById("cont-gano");
let perdio = document.getElementById("cont-perdio");
let replay = document.getElementById("volver");
let resu = document.getElementById("resultados");
let prim = document.getElementById("priresu");

console.log(replay)


let cont = 0;
let gana = 0;
let pierde = 0;
let suma = 0;

function Jugar() {

    let apuesta = document.getElementById("valor").value;
    let opcion = parseInt(document.getElementById("opc").value);
    // let opc = parseInt(document.getElementById("decision").value);

    let seguir = true;

    if (apuesta <= 0) {
        Swal.fire(`No valido ingrese un valor para apostar`)
    }

    apuesta = parseInt(apuesta)

    if (opcion <= 0) {
        Swal.fire(`No valido, elija un opcion`)
    }
    
    while (seguir != false && apuesta >= 1 && opcion >= 1) {

        let alt = 1 + (parseInt(Math.random() * 2));
        console.log(`alt ${alt}`)

        if (opcion == alt) {

            suma = suma + apuesta;
            cont = cont + 1;
            gana = gana + 1;
            // alert(`Gano apuesta: ${apuesta}, contador:${cont}`)

            prim.innerHTML = `<div><h6>¡Felicitaciones! Ganaste</h6>
            <p>El dinero obtenido es : ${suma}</p></div>`;

        } else if (opcion != alt) {
            suma = suma - apuesta;
            cont = cont + 1;
            pierde = pierde + 1;
            prim.innerHTML = `<div><h6>Lo sentimos, Perdiste :c</h6>
            <p>El dinero obtenido es : ${suma}</p></div>`;
        } 
        

        seguir = false;

    } 

    resu.innerHTML = `<div class="resul">
    <h2 class="cont-titulo">Resultados</h2>
    <p>Las partidas jugadas fueron ${cont}, <br> 
    Dinero Inicial ${apuesta}<br> 
    Dinero acumulado ${suma} </p>
    </div>`

    gano.innerHTML = `<p>${gana}</p>`;
    perdio.innerHTML = `<p>${pierde}</p>`;


    console.log(`opcion ${opcion}`)
    console.log(`apuesta ${apuesta}`)
}

play.addEventListener('click', Jugar);

function recargar() {

    resu.innerHTML = ``;
    gano.innerHTML = ``;
    perdio.innerHTML = ``;
    prim.innerHTML = ``;
    cont = 0;
    suma = 0;
    gana = 0;
    pierde = 0;
    
}

reset.addEventListener('click', recargar);