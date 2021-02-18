const choice = ['rock','paper','scissor'];
let C=0,P=0,Ronda=0,Img=1;
//  Computer play
function computerPlay() {
    let a = Math.floor(Math.random()*2.99);
    RPS(choice[a],2);
    return choice[a];
}

function pierde(){
    document.getElementById('WS1').innerHTML="<h3>LOOSE</h3>"
    document.getElementById('WS2').innerHTML="<h3>WIN</h3>"
    C++;
}
function gana(){
    document.getElementById('WS1').innerHTML="<h3>WIN</h3>"
    document.getElementById('WS2').innerHTML="<h3>LOOSE</h3>"
    P++;
}

// Battle
function battle(computerPlay,playerPlay) {
    Ronda++;
    // Si ambos lanzan igual
    if (computerPlay==playerPlay) {
        document.getElementById('mensaje').innerHTML=`<h2>Ronda #${Ronda} Es un empate</h2>`;
    }   
    // Jugador: Piedra
    else {
        if(playerPlay=="rock") {
            if (computerPlay=="paper") {
                    document.getElementById('mensaje').innerHTML=`<h2>Ronda #${Ronda} Tu pierdes, papel vence a roca</h2>`;
                    pierde();
            }   
            else {
                document.getElementById('mensaje').innerHTML=`<h2>Ronda #${Ronda} Tu ganas, piedra vence a tijera</h2>`;
                gana();
            }
        }
        // Jugador: Papel   
        else {
            if(playerPlay=="paper") {
                if (computerPlay=="scissor") {
                    document.getElementById('mensaje').innerHTML=`<h2>Ronda #${Ronda} Tu pierdes, tijera vence a papel</h2>`;
                    pierde();
                }   
                else {
                    document.getElementById('mensaje').innerHTML=`<h2>Ronda #${Ronda} Tu ganas, papel vence a roca</h2>`;
                    gana();
                }
            }
            // Jugador: Tijera      
            else {
                if (computerPlay=="rock") {
                    document.getElementById('mensaje').innerHTML=`<h2>Ronda #${Ronda} Tu pierdes, piedra vence a tijera</h2>`;
                    pierde();
                }   
                else {
                    document.getElementById('mensaje').innerHTML=`<h2>Ronda #${Ronda} Tu ganas, tijera vence a papel</h2>`;
                    gana();
                }
            }
        }
    }
}

function game(playerPlay){
    if ((P+C)<5 && P<3 && C<3) {
        RPS(playerPlay,1);
        battle(computerPlay(),playerPlay);
        document.getElementById("puntaje1").innerHTML= P;
        document.getElementById("puntaje2").innerHTML= C;
        if (P==3 || C==3) {
            if (P>C) {
                document.getElementById("mensaje").innerHTML="<h2>Has ganado galan</h2>"
            } else {
                document.getElementById("mensaje").innerHTML="<h2>Has perdido, mejor suerte para la próxima</h2>"
            }
                document.getElementById("reset").style.visibility="visible";
        }
    } 
}

function RPS(sel,a){
    document.getElementById("RPS1").style.visibility="visible";
    document.getElementById("RPS2").style.visibility="visible";
    switch (sel) {
        case 'rock':
            document.getElementById('RPS'+a).src="data:image/png;base64,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"
            break;
        case 'scissor':
            document.getElementById('RPS'+a).src="https://images.vexels.com/media/users/3/212541/isolated/preview/6f50dc4db12e54d96d6951c1f2fa8ee4-tijeras-tijeras-de-icono-plano-gris-by-vexels.png"
            break;
        case 'paper':
            document.getElementById('RPS'+a).src="https://www.clipartmax.com/png/middle/318-3188512_png-file-icono-avion-de-papel-png.png"
            break;
    }
}

function reset(){
    P=0;
    C=0;
    Ronda=0;
    document.getElementById("puntaje1").innerHTML= P;
    document.getElementById("puntaje2").innerHTML= C;
    document.getElementById("RPS1").style.visibility="hidden";
    document.getElementById("RPS2").style.visibility="hidden";
    document.getElementById("mensaje").innerHTML="";
    document.getElementById("reset").style.visibility="hidden";
}