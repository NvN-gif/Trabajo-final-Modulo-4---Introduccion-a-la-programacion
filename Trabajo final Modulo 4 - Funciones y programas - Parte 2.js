//Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble. Prueba a invocarla con varias manos de cartas.


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

// Pruebas
const mano1 = [{ palo: 'corazones', valor: 2 }, { palo: 'diamantes', valor: 3 }, { palo: 'picas', valor: 'A' }];
const mano2 = [{ palo: 'corazones', valor: 5 }, { palo: 'diamantes', valor: 7 }, { palo: 'picas', valor: 9 }];
const mano3 = [{ palo: 'corazones', valor: 'A' }, { palo: 'diamantes', valor: 'A' }, { palo: 'picas', valor: 'A' }];
const mano4 = [{ palo: 'treboles', valor: 4 }, { palo: 'picas', valor: 6 }, { palo: 'corazones', valor: 10 }];

console.log(puntuarMano(mano1)); // Debería imprimir 31 (4 + 6 + 20)
console.log(puntuarMano(mano2)); // Debería imprimir 43 (10 + 14 + 9)
console.log(puntuarMano(mano3)); // Debería imprimir 100 (40 + 40 + 20)
console.log(puntuarMano(mano4)); // Debería imprimir 34 (4 + 6 + 20)