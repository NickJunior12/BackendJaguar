import { Request, response, Response } from "express";
import { ConnetSoffid } from '../helpers/conntect-soffid';

export const ConnectSoffidPaso1 = async( req: Request, res: Response) =>{

    const token = await ConnetSoffid('usuario');

    res.json(
        {token}
    );
}
