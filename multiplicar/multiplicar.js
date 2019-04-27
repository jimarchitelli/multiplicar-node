//#region Requireds
const fs = require('fs');
const colors = require('colors');
//#endregion

//#region Funciones
let listarTabla = (base, limite = 10) => {
    
    return new Promise((resolve, reject) => {
    
        if (!Number(base))
        {
            reject(`La base ${base} no es un número`);
            return;
        }

        if (!Number(limite))
        {
            reject(`El limite ${limite} no es un número`);
            return;
        }
    
        let data = '';

        for(i=1; i < limite + 1; i++)
            data += `${ base } * ${i} = ${ base * i}\n`  ;                
    
            resolve(data);
     });
}

let crearArchivo = (base, limite = 10) => {

 return new Promise((resolve, reject) => {
    
    if (!Number(base))
    {
        reject(`El valor instroducido ${base} no es un número`);
        return;
    }       

    if (!Number(limite))
    {
        reject(`El limite ${limite} no es un número`);
        return;
    }

    let ruta = 'tablas/';
    let nombreArchivo = 'tabla-' + base + '.txt';
    let data = ''    
    
    for(i=1; i < limite + 1; i++)
        data += `${ base } * ${i} = ${ base * i}\n`  ;
    
        fs.writeFile(ruta + nombreArchivo, data, 'utf8', (err) => {
            if (err)
             reject(err);
        });

        resolve(nombreArchivo);
 });
}
//#endregion

module.exports = {
    crearArchivo,
    listarTabla
}