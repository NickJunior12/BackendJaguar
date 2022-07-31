import { Request, Response } from "express";
import Beneficio from '../models/beneficios';
import { Sequelize, Op } from 'sequelize';

export const getBeneficios = async( req: Request, res: Response) =>{

    const bene = await Beneficio.findAll({
        where:{
            activado: 1
        },
        order: [
            ['id','DESC']
        ]
    });

    res.json(
        {bene}
    );
}

export const getBeneficio = async( req: Request, res: Response) =>{

    const {id} =req.params;

    const bene = await Beneficio.findByPk(id);
    if( bene ){
        res.json({bene});
    }
    else{
        res.status(404).json
        ({ msg: `No existe el beneficio con ese id ${ id }`})
    }
}

export const findBeneficioText = async( req: Request, res: Response) =>{

    
    const {body} = req;

    const bene = await Beneficio.findAll({
        where: {
            titulo: {
                [Op.substring]: body.buscador
            }
        }
    });

    if( bene ){
        res.json({bene});
    }
    else{
        res.status(404).json
        ({ msg: `No existe el beneficio con el texto buscado ${ body.buscador }`})
    }
}

export const nuevoBeneficio = async( req: Request, res: Response) =>{
    const { body } = req;

    try{
        const beneficio = Beneficio.build(body);
        await beneficio.save();
        res.json(beneficio);
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador'});
    }
}

export const actualizarBeneficio = async( req: Request, res: Response) =>{

    const {id} =req.params;
    const {body} = req;

    console.log("entre");
    // res.json("{resp: 'ok'}");
    try{
        const beneficio = await Beneficio.findByPk(id);
        console.log(beneficio);
        if( !beneficio ){
            return res.status(404).json({
                msg:'No existe el beneficio'
            })
        }
        console.log("Pase el if, esta bien el beneficio");
        await beneficio.update( body );
        console.log("Actualizo correctamente el beneficio");
        res.json(beneficio);
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador'});
    }
}

export const borrarBeneficio = async( req: Request, res: Response) =>{

    const {id} =req.params;

    try{
        const beneficio = await Beneficio.findByPk(id);

        if( !beneficio ){
            return res.status(404).json({
                msg:'No existe el beneficio'
            })
        }

        await beneficio.update({activado:0});
        res.json({
            msg: 'Beneficio eliminado, satisfactoriamente',

        });
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador'});
    }
}
