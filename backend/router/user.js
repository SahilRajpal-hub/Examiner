import User from "../models/user.js";
import express  from 'express'
const router=new express.Router();

router.post('/users', async (req, res) => {
    try{
    const user = new User(req.body)
    await user.save();
    res.status(201).send(user);
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user=await User.findByCredentials(req.body.email,req.body.password);
        res.send(user);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

export default router;

