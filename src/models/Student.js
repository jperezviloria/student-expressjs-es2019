import Sequelize from "sequelize"
import {sequelize} from "../database/config/database"

const Student = sequelize.define('student',{
    idStudent:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nameStudent:{
        type: Sequelize.TEXT
    },
    ageStudent:{
        type: Sequelize.INTEGER
    }
});





export default Student
