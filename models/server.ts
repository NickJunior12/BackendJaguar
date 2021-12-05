import express, { Application } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload'

import * as noticiasRoutes from '../routes/noticia';
import * as usuariosRoutes from '../routes/user-routes';
import * as uploadsRoutes from '../routes/upload-routes';

import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apis = {
        noticias: '/api/nots',
        users: '/api/users',
        uploads: '/api/uploads'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();

        this.routes();

        this.dbConnection();

    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log("Base de datos conectada");
        }
        catch(error){
            console.log('Error en conexion');
            throw new Error();
        }
    }

    middlewares(){
       this.app.use( cors() );

       this.app.use( express.json() );

       this.app.use( express.static('public'));

       this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }

    routes(){
        this.app.use( this.apis.noticias, noticiasRoutes.default ),
        this.app.use( this.apis.users, usuariosRoutes.default ),
        this.app.use( this.apis.uploads, uploadsRoutes.default )
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log('Servidor backend ejecutandose en el puerto '+this.port);
        })
    }
}


export default Server;