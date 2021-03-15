import mongoose from "mongoose"
import validator  from 'validator'

const userSchema=new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique:true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
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
    }
});



userSchema.statics.findByCredentials=async (email,password)=>{
    const user=await User.findOne({email});
    if(!user){
        throw ("Unable to login");
    }
     return user;
}

const User = mongoose.model('User',userSchema);
export default User;