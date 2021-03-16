import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const StudentSchema=new mongoose.Schema( {
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique:true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    Exams:[{
        Exam:{
            type:String,
            trim:true
        }
    }],
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
},{
    timestamps:true
});

//@ Delete Exams,hashed Password,createdAt,updatedAt from json
StudentSchema.methods.toJSON=function(){
    const student=this;
    const studentObject=student.toObject();
    delete studentObject.password;
    delete studentObject.createdAt;
    delete studentObject.updatedAt;
    delete studentObject.Exams;
    delete studentObject.tokens;
    return studentObject;
}


StudentSchema.methods.generateAuthToken= async function(){
    const student=this;
    const token=jwt.sign({_id:student._id.toString()},"Examiner",{expiresIn:"1 day"});
    student.tokens= student.tokens.concat({token});
    await student.save();
    return token;
}


//finds the student by email then verify the password
StudentSchema.statics.findByCredentials=async (email,password)=>{
    const student=await Student.findOne({email});
    if(!student){
        throw ("Unable to login");
    }
     const isMatch=await bcrypt.compare(password,student.password);
     if(!isMatch){
        throw ("Unable to login");
     }
     return student;
}

//@ hashed the password before  save the document if modified
StudentSchema.pre("save",async function(next){
    const student=this;

    if(student.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        student.password= await bcrypt.hash(student.password,salt);
    }

    next();
});

const Student = mongoose.model('Student',StudentSchema);

export default Student