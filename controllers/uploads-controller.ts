import { Request, response, Response } from "express";
import fileUpload from 'express-fileupload';
import { SubirArchivo, SubirBanner, BorrarImagen, SubirBannerCloudinary, SubirNoticiaCloudinary, BorrarImagenCloudinary } from '../helpers/subir-archivo';
import Noticia from '../models/notis';
import Banner from '../models/banner-model';
import Beneficio from '../models/beneficios';



// export const mostrarImagen = async( req: Request, res: Response)=> {

//     const {id} =req.params;

//     try{
//         const noticia = await Noticia.findByPk(id);
//         console.log(noticia);

//         if( !noticia ){
//             return res.status(404).json({
//                 valido: 0,
//                 msg:'No existe la noticia'
//             })
//         }

//         res.json({
//             valido: 1,
//             nombreImagen: noticia.imagen
//         })
//     }catch(err){
//         res.status(400).json(err);
//     }
// }

export const uploadNoticia = async( req: Request, res: Response) => {

    const {id} =req.params;

      if (!req.files || Object.keys(req.files).length === 0 || !req.files.noticiaImagen) {
        return res.status(400).json('No hay archivos para subir.');
      }

      try{
        const noticia = await Noticia.findByPk(id);
        console.log(noticia);

        if( !noticia ){
            return res.status(404).json({
                msg:'No existe la noticia'
            })
        }

          const nombreImagen = await SubirArchivo( id, req.files, 'uploadsNoticias' );

          const bodyUpdate = {
            imagen: nombreImagen,
            id
            }

         await noticia.update( bodyUpdate );
          res.json({ msg: nombreImagen, msg2: noticia });

      }catch(msg){
          res.status(400).json(msg);
      }
}



export const uploadBanner = async( req: Request, res: Response) => {


      if (!req.files || Object.keys(req.files).length === 0 || !req.files.bannerImg) {
        return res.status(400).json('No hay archivos para subir.');
      }

      try{

          console.log(req.files.bannerImg);
          const nombreImagen = await SubirBanner( req.files, 'uploadsBanners' );

          const bannerBody = {
            archivo: nombreImagen,
            ubicacion: '',
            orden: 1,
            activo: 1
            }

          const banner = Banner.build(bannerBody);
          await banner.save();
          res.json({ msg: nombreImagen, msg2: banner });

      }catch(msg){
          res.status(400).json(msg);
      }
}

export const uploadNoticiaCloudinary = async( req: Request, res: Response) => {

  const {id} =req.params;

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.noticiaImagen) {
      return res.status(400).json('No hay archivos para subir.');
    }

    try{
      const noticia = await Noticia.findByPk(id);
      console.log(noticia);

      if( !noticia ){
          return res.status(404).json({
              msg:'No existe la noticia'
          })
      }

        const nombreImagen = await SubirNoticiaCloudinary( req.files );
        
        const bodyUpdate = {
          imagen: nombreImagen,
          id
          }

       await noticia.update( bodyUpdate );
        res.json({ msg: nombreImagen, msg2: noticia });

    }catch(msg){
        res.status(400).json(msg);
    }
}

export const uploadBannerCloudinary = async( req: Request, res: Response) => {


  if (!req.files || Object.keys(req.files).length === 0 || !req.files.bannerImg) {
    return res.status(400).json('No hay archivos para subir.');
  }

  try{
      const nombreImagen = await SubirBannerCloudinary( req.files );
      console.log('se recupera la respuesta de SubirBannerCloudinary')
      console.log(nombreImagen);
      const bannerBody = {
        archivo: nombreImagen,
        ubicacion: nombreImagen,
        orden: 1,
        activo: 1
        }
      console.log(bannerBody);
      const banner = Banner.build(bannerBody);
      await banner.save();
      res.json({ msg: nombreImagen, msg2: banner });

  }catch(msg){
      res.status(400).json(msg);
  }
}

export const uploadBeneficioCloudinary = async( req: Request, res: Response) => {

  const {id} =req.params;

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.beneficioImagen) {
      return res.status(400).json('No hay archivos para subir.');
    }

    try{
      const beneficio = await Beneficio.findByPk(id);
      console.log(beneficio);

      if( !beneficio ){
          return res.status(404).json({
              msg:'No existe la noticia'
          })
      }

        const nombreImagen = await SubirNoticiaCloudinary( req.files );
        
        const bodyUpdate = {
          imagen: nombreImagen,
          id
          }

       await beneficio.update( bodyUpdate );
        res.json({ msg: nombreImagen, msg2: beneficio });

    }catch(msg){
        res.status(400).json(msg);
    }
}

export const getBanners = async( req: Request, res: Response) =>{

  const banners = await Banner.findAll({
    where: {
      activo: 1
    },
    order:[
      ['id','DESC']
    ]
  });

  res.json({banners});

  
}

export const borrarBanners = async( req: Request, res: Response) =>{

  const {id} =req.params;
  const {nombreBanner} =req.body;
  console.log(nombreBanner);

  try{
    

    const banner = await Banner.findByPk(id);
        console.log(banner);

        if( !banner ){
          return res.status(404).json({
              msg:'No existe la noticia'
          })
      }

      const resp = await BorrarImagen(nombreBanner,'uploadsBanners');

    const bodyUpdate = {
      id,
      activo: 0
    }

   await banner.update( bodyUpdate );
    res.json({msg:'Borrado exitosamente '+nombreBanner});
  }catch(msg){
          res.status(400).json(msg);
      }

  
}

export const borrarBannersCloudinary = async( req: Request, res: Response) =>{

  const {id} =req.params;
  const {nombreBanner} =req.body;
  console.log(nombreBanner);

  try{
    

    const banner = await Banner.findByPk(id);
        console.log(banner);

        if( !banner ){
          return res.status(404).json({
              msg:'No existe la noticia'
          })
      }

      BorrarImagenCloudinary(nombreBanner);

    const bodyUpdate = {
      id,
      activo: 0
    }

   await banner.update( bodyUpdate );
    res.json({msg:'Borrado exitosamente '+nombreBanner});
  }catch(msg){
          res.status(400).json(msg);
      }

  
}


