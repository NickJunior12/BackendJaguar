    import { DataTypes } from 'sequelize'

    import db from '../db/connection';
    
    
    const DocumentosBeneficios = db.define('DocumentosBeneficios',{
        id: {type: DataTypes.INTEGER, primaryKey: true },
        id_beneficio: { type: DataTypes.INTEGER},
        documento: { type: DataTypes.STRING},
        activado:{ type: DataTypes.INTEGER}
    })
    
    export default DocumentosBeneficios;