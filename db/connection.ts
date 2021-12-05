import { Sequelize } from 'sequelize';

const db = new Sequelize('jaguardb','root','123456', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'

})

export default db;