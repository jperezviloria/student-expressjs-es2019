import {Router} from "express"

import {SaveStudent, GetAllStudents, GetStudentById, DeleteStudentById, UpdateStudentById} from "../controllers/Student.controller"
//import {getAllStudents} from "../database/StudentDatabase"

const router = Router()


router.route("/")
.post(SaveStudent)
.get(GetAllStudents)
.put(UpdateStudentById)

router.route("/:idStudent")
.get(GetStudentById)
.delete(DeleteStudentById)



export default router;

