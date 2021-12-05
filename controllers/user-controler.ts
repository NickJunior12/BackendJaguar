import { Request, Response } from "express";
import Usuario from '../models/user-model';

export const getUsers = async( req: Request, res: Response) => {

    return res.json({
        msg: 'Get de prueba para el api de usuarios'
    })
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