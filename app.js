//#region Requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//#endregion

//#region Variables
let comando = argv._[0];
//#endregion

switch(comando)
{
   case "crear":{
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${ archivo.yellow }`))
        .catch( err => console.log(err.red));
   };   
   break;
   case "listar": {
        listarTabla(argv.base, argv.limite)
        .then(tabla => console.log(tabla))
        .catch( err => console.log(err.red));
   };
   break;
   default: console.log("No existe el comando");   
}

