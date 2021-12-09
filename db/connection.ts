import { Sequelize } from 'sequelize';

// const db = new Sequelize('jaguardb','root','123456', {
//     host: 'localhost',
//     port: 3306,
//     dialect: 'mysql'

// })

const db = new Sequelize('u117119134_jaguardb','u117119134_jaguaradmin','Mexico2021', {
    host: 'sql441.main-hosting.eu',
    port: 3306,
    dialect: 'mysql'

})

export default db;