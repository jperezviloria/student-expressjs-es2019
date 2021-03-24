import {sequelize} from "./config/database";



export const getAllStudents = async () => {

    try{
        const [results, metadata] = await sequelize.query('SELECT * FROM Student')
        console.log(results)
        return results;
    }catch(error){
        console.log(error)
    }
}

export const getStudentById = async(id) =>{
    try{
        const [results, metadata] = await sequelize.query('SELECT * FROM Student WHERE idStudent = :idStudent',
    {
        replacements: {
            idStudent: id
        }
    })
    return results;
    }catch(error){
        console.log(error)
    }
}

export const saveStudent = async (nameVariable, ageVariable) => {
    try {
        const [results, metadata] = await sequelize.query('INSERT INTO Student (nameStudent, ageStudent) VALUES( :nameStudent, :ageStudent)', {
            replacements: {
                nameStudent: nameVariable,
                ageStudent: ageVariable
            }
        })
        return "The student was created"
    } catch(error){
        console.log(error)
    }
}

export const deleteStudentById = async(idVariable) =>{
    try{
        const [results, metadata] = await sequelize.query('DELETE Student WHERE idStudent = :idStudent', {
            replacements: {
                idStudent: idVariable,
            }
        })      
          
    }catch(error){
        console.log(error)
    }
}

export const updateStudentById = async (idVariable,nameVariable, ageVariable) => {
    try {
        const [results, metadata] = await sequelize.query('UPDATE Student SET nameStudent = :nameStudent, ageStudent = :ageStudent WHERE idStudent = :idStudent', {
            replacements: {
                idStudent: idVariable,
                nameStudent: nameVariable,
                ageStudent: ageVariable
            }
        })
        return "The student was updated"
    } catch(error){
        console.log(error)
    }
}

//UPDATE Student SET nameStudent = 'Pablo', ageStudent = 11 WHERE idStudent = 5