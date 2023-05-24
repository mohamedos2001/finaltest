import department from "../models/department.js"
import subject from "../models/subject.js"

export const index=async(req,res)=>{
    const subjects = await subject.find({},{name:1}).lean()

    res.render('subjects/index',{subjects})
}


export const create=async(req,res)=>{
    const departments =await department.find().lean()
    res.render('subjects/create',{departments});
   
}

export const store=async(req,res)=>{
    const{name,code,department}=req.body
    // console.log(req.body);

  await  subject.create({
        name,
        code,
        department
    });
res.redirect('/subjects')

}

export const show=async(req,res)=>{
    const {_id}=req.params

  const singlesubject =  await subject.findById(_id).populate('department').lean()
//   console.log(singlesubject)

  res.render('subjects/show',{subject:singlesubject})
}

export const edit=async(req,res)=>{
    const {_id}=req.params
    const editforsubject= await subject.findById(_id).lean()
    const departments =await department.find().lean()
    res.render('subjects/edit',{departments,subject:editforsubject});
   
}

export const update=async(req,res)=>{
    const{name,code,department}=req.body
    const {_id}=req.params
    await subject.findByIdAndUpdate(_id,
        {$set:{name, code , department}})

    
//   await  subject.create({
//         name,
//         code,
//         department
//     });
res.redirect('/subjects')

}

export const deleteone=async(req,res)=>{
    const {_id}=req.params
    await subject.findByIdAndDelete(_id)
 return   res.redirect('/subjects')
}