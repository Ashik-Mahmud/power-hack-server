const client = require("../Connection/connection");
const billingCollection = client.db("power-pack").collection("billings");

const addBillingController = async(req, res) =>{
    const data = req.body;
    const decodedEmail = req.decoded.email;
    const userEmail = data.author.email;
    if(decodedEmail === userEmail){
        const result = await billingCollection.insertOne(data);
        if(result.acknowledged){
            res.send({success: true, message: "Billing Added Successfully"});
        }
    }else{
        res.status(403).send({success: false, message: "You are not Authorized to perform this action"});
    }    
}


module.exports = {addBillingController}