import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export const SubirArchivo = (id: any, files: any, carpeta = '' ) => {

    return new Promise( (resolve, reject) => {

        const{ noticiaImagen } = files;

        const nombreCortado = noticiaImagen.name.split('.');
        const extension = nombreCortado[ nombreCortado.length - 1];

        const extensionesValidas = ['png','jpg','gif', 'jpeg']
          if( !extensionesValidas.includes(extension) ){
              reject(`La extensión ${extension} no es válida, permitidas ${ extensionesValidas }`);
          }

          const nombreTempo = id + '_' + uuidv4() + '.' + extension;
         const uploadPath = path.join(__dirname, '../../public/',carpeta,'/', nombreTempo);
console.log(__dirname);
console.log(uploadPath);
         noticiaImagen.mv(uploadPath, (err: any) => {
          if (err){
              reject(err);
          }
          resolve(nombreTempo);
        });
    });
}

export const BorrarImagen = (nombre: string, carpeta = '') =>{

    return new Promise( (resolve, reject) => {
    const pathBorrar = path.join(__dirname, '../../public/',carpeta,'/', nombre);
    console.log(pathBorrar);
    if( fs.existsSync(pathBorrar) ){
        console.log('si existe y voy a borrarlo');
        fs.unlinkSync( pathBorrar );
    }
        resolve(pathBorrar);
    });

}

export const SubirBanner = (files: any, carpeta = '' ) => {

    return new Promise( (resolve, reject) => {

        const{ bannerImg } = files;

        const nombreCortado = bannerImg.name.split('.');
        const extension = nombreCortado[ nombreCortado.length - 1];

        const extensionesValidas = ['png','jpg','gif', 'jpeg']
          if( !extensionesValidas.includes(extension) ){
              reject(`La extensión ${extension} no es válida, permitidas ${ extensionesValidas }`);
          }

            const nombreTempo = uuidv4() + '.' + extension;
            const uploadPath = path.join(__dirname, '../../public/',carpeta,'/', nombreTempo);
            console.log(__dirname);
            console.log(uploadPath);
            bannerImg.mv(uploadPath, (err: any) => {
          if (err){
              reject(err);
          }
          resolve(nombreTempo);
        });
    });
}
