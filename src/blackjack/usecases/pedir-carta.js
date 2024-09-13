

/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck  de tipo array
 * @returns {String} Una nueva carta
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}  