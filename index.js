const tortuga = {
    vidas: 5,
    cabeza: [false,false],  //El primer valor marca si está pintado.
    pata1: [false,false],   //El segundo valor marca si está bloqueado.
    pata2: [false,false],   //Solo se bloqueará si está pintado y vuelve a tocar el número
    pata3: [false,false],
    pata4: [false,false],
    caparazon: [false,false],
    racha: 0,
}



const htmlJuego = {
    vidas: document.getElementById("vidas"),
    cabeza: document.getElementById("cabeza"),
    pata1: document.getElementById("pata1"),
    pata2: document.getElementById("pata2"),
    pata3: document.getElementById("pata3"),
    pata4: document.getElementById("pata4"),
    caparazon: document.getElementById("caparazon"),
    dado: document.getElementById("dado"),
    racha: document.getElementById("racha"),
    btnDado: document.getElementById("btn-dado"),
}

const reiniciarJuego = () => {
    tortuga.cabeza[1] = true;
    tortuga.cabeza[2] = false;
    tortuga.pata1[1] = true;
    tortuga.pata1[2] = false;
    tortuga.pata2[1] = true;
    tortuga.pata2[2] = false;
    tortuga.pata3[1] = true;
    tortuga.pata3[2] = false;
    tortuga.pata4[1] = true;
    tortuga.pata4[2] = false;
    tortuga.caparazon[1] = true;
    tortuga.caparazon[2] = false;
    for (let i = 0; i <= 6; i++){
        tortuga.racha = 0;
        pintarCara(i);
    }
    tortuga.vidas = 5;
    htmlJuego.dado.setAttribute("src","./images/dado.gif");
    htmlJuego.vidas.innerText = tortuga.vidas;
    mostrarMensaje("Trotugame");
    htmlJuego.btnDado.disabled = false;
}



const tirarDado = () => {
    htmlJuego.btnDado.disabled = true;
    let valor;
    do {      
        valor = Math.random() * 10;
        valor = Math.floor(valor);
        console.log(valor);
    } while(valor < 1 || valor > 6)
    dado.setAttribute("src","./images/dado.gif")
    
    setTimeout(() => {
        pintarCara(valor);
    }, 1000)

}

const mostrarMensaje = (msj) => {
    htmlJuego.racha.innerText = msj;
}

const comprobarVictoria = () => {
    let hasWon = true;
    if(tortuga.pata1[1] == false) {
        hasWon = false;
    }
    if(tortuga.pata2[1] == false) {
        hasWon = false;
    }
    if(tortuga.pata3[1] == false) {
        hasWon = false;
    }
    if(tortuga.pata4[1] == false) {
        hasWon = false;
    }
    if(tortuga.cabeza[1] == false) {
        hasWon = false;
    }
    if(tortuga.caparazon[1] == false)  {
        hasWon = false;
    }
    return hasWon;

}



const pintarCara = (valor) => {
    
    htmlJuego.btnDado.disabled = false;
    console.log("Racha: "+ tortuga.racha);
    console.log("Valor: "+ valor);
    switch (valor){
        case 1: srcImagen = "./images/cara1.jpg";
                if (tortuga.cabeza[2] == true) {
                    mostrarMensaje("Cabeza ya bloqueada");
                    break;
                }

                if(tortuga.racha == valor && tortuga.cabeza[1] == true ) {
                    tortuga.cabeza[2] = true;
                    htmlJuego.cabeza.style.backgroundColor = "var(--green-block)";
                    mostrarMensaje("Racha! Cabeza bloqueada");
                    break;
                } else {
                    tortuga.racha = valor;
                }

                if(tortuga.cabeza[1] == true) {
                    htmlJuego.cabeza.style.backgroundColor = "";
                    tortuga.cabeza[1] = false;
                    tortuga.vidas -= 1;
                    mostrarMensaje("Pierdes una vida");
                } else {
                    tortuga.cabeza[1] = true;
                    htmlJuego.cabeza.style.backgroundColor = "var(--green-turtle)";
                    mostrarMensaje("Pieza pintada");
                }
        break;
        case 2: srcImagen = "./images/cara2.jpg";
                if (tortuga.pata1[2] == true) {
                    mostrarMensaje("Pata ya bloqueada");
                    break;
                }

                if(tortuga.racha == valor && tortuga.pata1[1] == true) {
                    tortuga.pata1[2] = true;
                    htmlJuego.pata1.style.backgroundColor = "var(--green-block)";
                    mostrarMensaje("Racha! Pata bloqueada");
                    break;
                } else {
                    tortuga.racha = valor;
                }

                if(tortuga.pata1[1] == true) {
                    htmlJuego.pata1.style.backgroundColor = "";
                    tortuga.pata1[1] = false;
                    tortuga.vidas -= 1;
                    mostrarMensaje("Pierdes una vida");
                } else {
                    tortuga.pata1[1] = true;
                    htmlJuego.pata1.style.backgroundColor = "var(--green-turtle)";
                    mostrarMensaje("Pieza pintada");
                }
        break;
        case 3: srcImagen = "./images/cara3.jpg";
                if (tortuga.pata2[2] == true) {
                    mostrarMensaje("Pata ya bloqueada");
                    break;
                }

                if(tortuga.racha == valor && tortuga.pata2[1] == true) {
                    tortuga.pata2[2] = true;
                    htmlJuego.pata2.style.backgroundColor = "var(--green-block)";
                    mostrarMensaje("Racha! Pata bloqueada");
                    break;
                } else {
                    tortuga.racha = valor;
                }

                if(tortuga.pata2[1] == true) {
                    htmlJuego.pata2.style.backgroundColor = "";
                    tortuga.pata2[1] = false;
                    tortuga.vidas -= 1;
                    mostrarMensaje("Pierdes una vida");
                } else {
                    tortuga.pata2[1] = true;
                    htmlJuego.pata2.style.backgroundColor = "var(--green-turtle)";
                    mostrarMensaje("Pieza pintada");
                }
        break;
        case 4: srcImagen = "./images/cara4.jpg";
                if (tortuga.pata3[2] == true) {
                    mostrarMensaje("Pata ya bloqueada");
                    break;
                }

                if(tortuga.racha == valor && tortuga.pata3[1]) {
                    tortuga.pata3[2] = true
                    htmlJuego.pata3.style.backgroundColor = "var(--green-block)";
                    mostrarMensaje("Racha! Pata bloqueada");
                    break;
                } else {
                    tortuga.racha = valor;
                }

                if(tortuga.pata3[1] == true) {
                    htmlJuego.pata3.style.backgroundColor = "";
                    tortuga.pata3[1] = false;
                    tortuga.vidas -= 1;
                    mostrarMensaje("Pierdes una vida");
                } else {
                    tortuga.pata3[1] = true;
                    htmlJuego.pata3.style.backgroundColor = "var(--green-turtle)";
                    mostrarMensaje("Pieza pintada");
                }
        break;
        case 5: srcImagen = "./images/cara5.jpg";
                if (tortuga.pata4[2] == true) {
                    mostrarMensaje("Pata ya bloqueada");
                    break;
                }

                if(tortuga.racha == valor && tortuga.pata4[1]) {
                    tortuga.pata4[2] = true;
                    htmlJuego.pata4.style.backgroundColor = "var(--green-block)";
                    mostrarMensaje("Racha! Pata bloqueada");
                    break;
                } else {
                    tortuga.racha = valor;
                }

                if(tortuga.pata4[1] == true) {
                    htmlJuego.pata4.style.backgroundColor = "";
                    tortuga.pata4[1] = false;
                    tortuga.vidas -= 1;
                    mostrarMensaje("Pierdes una vida");
                } else {
                    tortuga.pata4[1] = true;
                    htmlJuego.pata4.style.backgroundColor = "var(--green-turtle)";
                    mostrarMensaje("Pieza pintada");
                }
        break;
        case 6: srcImagen = "./images/cara6.jpg";
                if (tortuga.caparazon[2] == true) {
                    mostrarMensaje("Caparazón ya bloqueado");
                    break;
                }
                
                if((tortuga.racha == valor && tortuga.caparazon[1]) || tortuga.caparazon[2] == true) {
                    tortuga.caparazon[2] = true;
                    htmlJuego.caparazon.style.backgroundColor = "var(--brown-block)";
                    mostrarMensaje("Racha! Caparazón bloqueado");
                    break;
                } else {
                    tortuga.racha = valor;
                }

                if(tortuga.caparazon[1] == true) {
                    htmlJuego.caparazon.style.backgroundColor = "";
                    tortuga.caparazon[1] = false;
                    tortuga.vidas -= 1;
                    mostrarMensaje("Pierdes una vida");
                } else {
                    tortuga.caparazon[1] = true;
                    htmlJuego.caparazon.style.backgroundColor = "var(--brown-turtle)";
                    mostrarMensaje("Pieza pintada");
                }
        break;

    }
    dado.setAttribute("src",srcImagen);
    htmlJuego.vidas.innerText = tortuga.vidas;

    if (comprobarVictoria() == true) {
        mostrarMensaje("Ganaste el juego");
        htmlJuego.btnDado.disabled = true;
    }

    if (tortuga.vidas == 0) {
        mostrarMensaje("Perdiste el juego");
        htmlJuego.btnDado.disabled = true;
    }
}

