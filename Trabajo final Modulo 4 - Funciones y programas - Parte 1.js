//Desarrolla una función que puntúe una mano de cartas, que tenga como parámetro un array de cartas, cada una representada por un diccionario con palo y valor. Al puntuar, las cartas suman su valor excepto si es un as que suma 20. Prueba a invocarla con varias manos de cartas con y sin ases.




function puntuarMano(mano) {
    let puntuacion = 0;
    mano.forEach(carta => {
        if (carta.valor === 'A') {
            puntuacion += 20;
        } else {
            puntuacion += carta.valor;
        }
    });
    return puntuacion;
}

// Pruebas
const mano1 = [{ palo: 'corazones', valor: 2 }, { palo: 'diamantes', valor: 3 }, { palo: 'picas', valor: 'A' }];
const mano2 = [{ palo: 'corazones', valor: 5 }, { palo: 'diamantes', valor: 7 }, { palo: 'picas', valor: 9 }];
const mano3 = [{ palo: 'corazones', valor: 'A' }, { palo: 'diamantes', valor: 'A' }, { palo: 'picas', valor: 'A' }];

console.log(puntuarMano(mano1)); // Debería imprimir 25
console.log(puntuarMano(mano2)); // Debería imprimir 21
console.log(puntuarMano(mano3)); // Debería imprimir 60
