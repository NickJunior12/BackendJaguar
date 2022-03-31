import { Request, response, Response } from "express";
import { ConnetSoffid, AuthorizationSoffid, TokenSoffid } from '../helpers/conntect-soffid';

export const ConnectSoffidPaso1 = async( req: Request, res: Response) =>{

    const token = await ConnetSoffid('usuario');

    res.json(
        {token}
    );
}

export const AuthSoffid = async( req: Request, res: Response) => {

    const resp = await AuthorizationSoffid('','');

    console.log('controller: ');
    console.log(resp);
    res.json({resp});
}

export const Token = async( req: Request, res: Response) => {

    const { body } = req;
    console.log('code: '+body.code);
    console.log('nonce: '+body.nonce);

    const resp = await TokenSoffid(body.code, body.nonce);

    console.log(resp);

    res.json({resp});

}