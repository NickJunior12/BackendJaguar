import { Request, Response } from "express";
import Noticia from '../models/notis';
import Usuario from '../models/user-model';
import { Sequelize, Op } from 'sequelize';

export const getNoticias = async( req: Request, res: Response) =>{

    const notis = await Noticia.findAll({
        where:{
            activado: 1
        },
        order: [
            ['id','DESC']
        ]
    });

    res.json(
        {notis}
    );
}

export const getNoticia = async( req: Request, res: Response) =>{

    const {id} =req.params;

    const notis = await Noticia.findByPk(id);
    if( notis ){
        res.json({notis});
    }
    else{
        res.status(404).json
        ({ msg: `No existe la noticia con ese id ${ id }`})
    }
}

export const findNoticiaText = async( req: Request, res: Response) =>{

    
    const {body} = req;

    const notis = await Noticia.findAll({
        where: {
            titulo: {
                [Op.substring]: body.buscador
            }
        }
    });

    if( notis ){
        res.json({notis});
    }
    else{
        res.status(404).json
        ({ msg: `No existe la noticia con el texto buscado ${ body.buscador }`})
    }
}

export const nuevaNoticia = async( req: Request, res: Response) =>{
    const { body } = req;

    try{
        const noticia = Noticia.build(body);
        await noticia.save();
        res.json(noticia);
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador'});
    }
}

export const actualizarNoticia = async( req: Request, res: Response) =>{

    const {id} =req.params;
    const {body} = req;

    try{
        const noticia = await Noticia.findByPk(id);
console.log(noticia);
        if( !noticia ){
            return res.status(404).json({
                msg:'No existe la noticia'
            })
        }

        await noticia.update( body );

        res.json(noticia);
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador'});
    }
}

export const borrarNoticia = async( req: Request, res: Response) =>{

    const {id} =req.params;

    try{
        const noticia = await Noticia.findByPk(id);
console.log(noticia);
        if( !noticia ){
            return res.status(404).json({
                msg:'No existe la noticia'
            })
        }

        //await noticia.destroy();

        await noticia.update({activado:0});
        res.json({
            msg: 'Noticia eliminada, satisfactoriamente',

        });
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador'});
    }
}

export const login = async( req: Request, res: Response) =>{
    const { body} = req;

    try{

        const user = await Usuario.findAll({
            where: {
                usuario: body.usuario,
                pass: body.pass,
                activado: 1
            }
        });


        if( user.length === 0 ){
            res.status(500).json({
                valido: false,
                msg: 'El usuario y/o contraseña son erroneos'
            });

        }

        res.json({
            valido: 1,
            msg: 'Usuario validado',
            user
        });

    }catch(error){
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador '+error});
    }
}