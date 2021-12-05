import { DataTypes } from 'sequelize'

import db from '../db/connection';


const Usuario = db.define('Usuario',{
    usuario: { type: DataTypes.STRING},
    pass: { type: DataTypes.STRING},
    activado:{ type: DataTypes.INTEGER}
})

export default Usuario;
