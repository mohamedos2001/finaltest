import { Router } from "express";
import department from "../models/department.js";
import subject from "../models/subject.js";
import { create, deleteone, edit, index, show, store, update } from "../controllers/subject.js";
const router =new Router()

router.get('/',index)
router.get('/create',create)
// store the data
router.post('/',store);
router.put('/:_id',update);
router.get('/:_id/edit',edit)
router.get('/:_id',show)
router.delete('/:_id',deleteone)














// router.get('/deparment',async(req,res)=>{
//     await department.create({
//         name:'computer science',
//         code:'cs'
//     })
//     await department.create({
//         name:'information technlogy',
//         code:'it'
//     })
//     await department.create({
//         name:'information system',
//         code:'is'
//     })
// res.send("Done")
// })
// /////////////////////////////////
// router.get('/subject',async(req,res)=>{
//     await subject.create({
//         name:'java',
//         code:'cs'
//     })
//     await subject.create({
//         name:'image',
//         code:'it'
//     })
//     await subject.create({
//         name:'DB',
//         code:'is'
//     })
// res.send("Add")
// })



export default router;