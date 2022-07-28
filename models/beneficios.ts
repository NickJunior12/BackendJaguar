import { DataTypes } from 'sequelize'

import db from '../db/connection';


const Beneficio = db.define('Beneficios',{
    id: {type: DataTypes.INTEGER, primaryKey: true },
    titulo: { type: DataTypes.STRING},
    descripcion: { type: DataTypes.STRING},
    activado:{ type: DataTypes.INTEGER},
    imagen: {type: DataTypes.STRING}
})

export default Beneficio;
