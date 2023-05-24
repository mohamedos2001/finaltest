import { Router } from "express";
import course from "../Database/course.js";
import filed from "../Database/file.js";


const router =new Router()

router.get("/", (req, res) => {
    res.render('doctor/doctor')
  })


  // save the file 
router.post("/", async(req, res) => {

      const {file} = req.body
      console.log(file);
      
  await  filed.create({
        file,
})
res.render('doctor/file')

})




export default router