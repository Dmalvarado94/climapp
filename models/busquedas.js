

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad( lugar =  '' ) {
        //peticion http
        console.log(lugar);

        return []; // retornar lugares similares
    }
}


module.exports = Busquedas;