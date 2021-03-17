import Student from '../Model/StudentSchema.js'

//  @desc => Authenticate the student
//  @route => GET '/api/auth/'
//  @access => Public
const authUser =async function(req,res,next){
    try {
        const token=req.header("Authorization").replace("Bearer ","");
        const decoded=jwt.verify(token,"Examiner");
 
        const student=await Student.findOne({_id:decoded._id,"tokens.token":token});
        if(!student){
            throw new Error();
        }
        
     next();
    } catch (e) {
        res.status(401).send({Error:"Please authenticate"});
    }
}

//@desc => Create the student
//@route => POST '/api/users/'
const createStudent=async (req, res) => {
  try{
    const student = new Student(req.body)
    await student.save();
    const token=await student.generateAuthToken();
    res.status(201).send(student);
  }catch(e){
    console.log(e);
    res.status(400).send(e);
  }
}

//@desc => Login the student
//@route => POST '/api/users/login'
const loginStudent=async (req,res)=>{
  try {
    const student=await Student.findByCredentials(req.body.email,req.body.password);
    const token=await student.generateAuthToken();
    res.send(student);
  }catch (e){
    console.log(e);
    res.status(400).send(e);
  }
}

export {authUser,createStudent,loginStudent}
