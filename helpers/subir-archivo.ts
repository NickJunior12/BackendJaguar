import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'dcjspxg4i', 
  api_key: '512599969441776', 
  api_secret: 'PLbU7vJmaMVm4brIk1PN7UmZf8E' 
});

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

export const BorrarImagenCloudinary=async(nombreBanner: string)=>{

    const nombre = nombreBanner.split('/');
    const nom = nombre[nombre.length-1];
    const [ public_id ] = nom.split('.');

    console.log(public_id);

    cloudinary.uploader.destroy(public_id);

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

export const SubirBannerCloudinary = async (files: any, carpeta = '' ) => {



        const{ bannerImg } = files;
        console.log(bannerImg);
        const tempPath = bannerImg.tempFilePath;
        console.log(tempPath);
        const {secure_url} = await cloudinary.uploader.upload(tempPath);
        console.log('imprimir respuesta de cloudinary');
        console.log(secure_url);
       
        return secure_url;
    
}

export const SubirNoticiaCloudinary = async (files: any ) => {



    const{ noticiaImagen } = files;
    
    const tempPath = noticiaImagen.tempFilePath;
    
    const {secure_url} = await cloudinary.uploader.upload(tempPath);
    
   
    return secure_url;

}
