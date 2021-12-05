import { DataTypes } from 'sequelize'

import db from '../db/connection';


const Banner = db.define('Banners',{
    id: {type: DataTypes.INTEGER, primaryKey: true },
    archivo: { type: DataTypes.STRING},
    ubicacion: { type: DataTypes.STRING},
    orden: { type: DataTypes.INTEGER},
    activo:{ type: DataTypes.INTEGER}
})

export default Banner;
