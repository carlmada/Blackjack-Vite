import _ from 'underscore';

// Esta función crea un nuevo deck
//Utiliza un export para ello.

/**
 * 
 * @param {Array<String>} tiposDeCarta ['C','D','H','S'] 
 * @param {Array<String>} tiposEspeciales ['A','J','Q','K']
 * @returns {Array<String>} Nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    //Comprobacion...
    if ( !tiposDeCarta || tiposDeCarta.length ===0 ) 
        throw new Error ('Tipos de cartas es obligatorio como un array de string.');

    if ( !tiposEspeciales || tiposEspeciales ===0 ) 
        throw new Error ('Tipos de cartas especiales es obligatorio como un array de string.');
 

    //Creamos un let deck.
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
      
    return deck;
}
  