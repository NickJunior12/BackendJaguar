import { Request, response, Response } from "express";
import { ConnetSoffid, GetToken, TokenSoffid, GetUserInfo, Revoke } from '../helpers/conntect-soffid';
import axios from "axios";

export const ConnectSoffidPaso1 = async( req: Request, res: Response) =>{

    const token = await ConnetSoffid();

    res.json(
        {token}
    );
}

export const AuthSoffid = async( req: Request, res: Response) => {

    const resp = await GetToken('');

    console.log('controller: ');
    console.log(resp);
    res.json({resp});
}

export const Token = async( req: Request, res: Response) => {

    const { body } = req;
    console.log('Se recibe el code: '+body.code);

    // tslint:disable-next-line:no-shadowed-variable
    GetToken(body.code).then((response)=>{
        console.log("Ya recibi en controller: "+response);res.json({response});
    });


}

export const UserInfo = async( req: Request, res: Response) => {
    
    const { body } = req;
    console.log('Se recibe el code: '+body.token);

    // tslint:disable-next-line:no-shadowed-variable
    GetUserInfo(body.token).then((response)=>{
        console.log("Ya recibi el nombre de usuario en el controlador: "+response);res.json({response});
    });

}

export const RevokeToken = async(req: Request, res: Response) =>{

    const { body } = req;
    console.log('Se recibe el token a revocar: ' + body.token);

    Revoke(body.token).then( response => {

        res.json({response});
        
    });


}
