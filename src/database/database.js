import Sequelize from "sequelize";

new Sequelize(
    'StudentModel', 
    'sa', 
    'Password01.', 
    {
    host: 'localhost',
    dialect: 'mssql',
  })