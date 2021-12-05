import { DataTypes } from 'sequelize'

import db from '../db/connection';


const Noticia = db.define('Noticias',{
    id: {type: DataTypes.INTEGER, primaryKey: true },
    titulo: { type: DataTypes.STRING},
    descripcion: { type: DataTypes.STRING},
    vigencia: { type: DataTypes.DATE},
    activado:{ type: DataTypes.INTEGER},
    imagen: {type: DataTypes.STRING}
})

export default Noticia;


