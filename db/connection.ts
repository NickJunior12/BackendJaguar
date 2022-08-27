import { Sequelize } from 'sequelize';

const baseProd = 'u117119134_jaguardb';
const usuarioProd = 'u117119134_jaguaradmin';

const baseQA = 'u117119134_jaguardbqa';
const usuarioQA = 'u117119134_jaguarqa';

const db = new Sequelize(baseProd,usuarioProd,'Mexico2021', {
    host: 'sql441.main-hosting.eu',
    port: 3306,
    dialect: 'mysql'

})

export default db;