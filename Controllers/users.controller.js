const client = require("./../Connection/connection.js");
const usersCollection = client.db("power-pack").collection("users");
const bcrypt = require("bcrypt")
const usersRegisterController = async(req, res) =>{
    await client.connect();
    const {name, email, password} = req.body;
    const isHas = await usersCollection.findOne({email: email});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    
    if(isHas){
        return res.send({success: false, message: "Users already exists"});
    }
    const result = await usersCollection.insertOne({name: name, email: email, password: hashPassword});
    if(result.acknowledged){
        return res.send({success: true, message: "Users registered successfully"});
    }
};


/* User Login Function */
const userLoginController = async(req, res) =>{
    await client.connect();
    
    const email = req.query.email;
    const password = req.query.password;
    console.log(email, password);
 
}




module.exports = {usersRegisterController,userLoginController}