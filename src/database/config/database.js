import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'StudentModel', 
    'sa', 
    'Password01.', 
    {
    host: 'localhost',
    dialect: 'mssql',
  })