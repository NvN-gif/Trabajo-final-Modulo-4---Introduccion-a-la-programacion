//Desarrolla un programa que use la función anterior para puntuar las manos de cartas de dos jugadores e imprima por consola al ganador, es decir, al que obtenga mayor puntuación.


function puntuarMano(mano) {
    let puntuacion = 0;
    mano.forEach(carta => {
        let valorCarta = carta.valor === 'A' ? 20 : carta.valor;
        if (carta.palo === 'corazones' || carta.palo === 'diamantes') {
            valorCarta *= 2;
        }
        puntuacion += valorCarta;
    });
    return puntuacion;
}

function determinarGanador(manoJugador1, manoJugador2) {
    const puntuacionJugador1 = puntuarMano(manoJugador1);
    const puntuacionJugador2 = puntuarMano(manoJugador2);

    console.log(`Puntuación del Jugador 1: ${puntuacionJugador1}`);
    console.log(`Puntuación del Jugador 2: ${puntuacionJugador2}`);

    if (puntuacionJugador1 > puntuacionJugador2) {
        console.log('El ganador es el Jugador 1');
    } else if (puntuacionJugador2 > puntuacionJugador1) {
        console.log('El ganador es el Jugador 2');
    } else {
        console.log('Es un empate');
    }
}

// Pruebas
const manoJugador1 = [{ palo: 'corazones', valor: 2 }, { palo: 'diamantes', valor: 3 }, { palo: 'picas', valor: 'A' }];
const manoJugador2 = [{ palo: 'corazones', valor: 5 }, { palo: 'diamantes', valor: 7 }, { palo: 'picas', valor: 9 }];

determinarGanador(manoJugador1, manoJugador2); // Debería imprimir que el ganador es el Jugador 2