import {getAllStudents, getStudentById ,saveStudent, deleteStudentById, updateStudentById} from "../database/StudentDatabase"


export const GetAllStudents = async (req, res) => {
    const students = await getAllStudents();

    try{
        if(students != ""){
            return res.json({
                status: 200,
                message:`The students was found`,
                data: students,
            })
        }else{
            return res.json({
                status: 404,
                message:`The students was not found`,
            })
        }
    }catch(error){
        return res.json({
            status: 500,
            message: error,
    })
}
    
}

export const GetStudentById = async (req, res) => {
    const idStudent = req.params.idStudent;

    try{   
        const student = await getStudentById(idStudent);
        if(student != ""){
            return res.json({
                status: 200,
                message:`The students with the id: ${idStudent} was found`,
                data: student,
        })
        }else{
            return res.json({
                status: 404,
                message:`The students with the id: ${idStudent} was not found`,
        })      
    }
    }
    catch(error){
        return res.json({
            status: 500,
            message: error,
    })
}}


export const SaveStudent = async (req, res) => {
    const {
        nameStudent,
        ageStudent
    } = req.body;

    try {
        const newStudent = await saveStudent(nameStudent, ageStudent)
        console.log(newStudent)
        if (newStudent == "The student was created"){
            return res.send({
                status: 201,
                message: "Student was created",
            })
        }
    } catch(error){
        return res.json({
            status: 500,
            message: error,
    })

    }
}

export const DeleteStudentById = async (req, res) => {
    const idStudent = req.params.idStudent;

    try{   
        const student = await deleteStudentById(idStudent);
        return res.json({
        status: 200,
        message:`The students with the id: ${idStudent} was deleted`,
    })
    }catch(error){
        return res.json({
            status: 500,
            message: error,
    })}}

export const UpdateStudentById = async (req, res) => {
    const {
        idStudent,
        nameStudent,
        ageStudent
    } = req.body;

    try {
        const updatedStudent = await updateStudentById(idStudent, nameStudent, ageStudent)
        console.log(updatedStudent)
        if (updatedStudent == "The student was updated"){
            return res.send({
                status: 200,
                message: "Student was updated",
            })
        }
    } catch(error){
        return res.json({
            status: 500,
            message: error,
    })

    }
}