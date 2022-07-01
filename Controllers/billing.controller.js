const { ObjectId } = require("mongodb");
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


/* Get Billing Lists  */
const billingListController = async(req, res) =>{
    const decodedEmail = req.decoded.email;
    const email = req.query.email;
    if(decodedEmail === email){
        const result = await billingCollection.find({"author.email": email}).toArray();
        if(result.length >0){
            res.send({message: true, data: result});
        }
    }else{
        res.status(403).send({success: false, message: "You are not Authorized to perform this action"});
    }   
}

/* Delete Billing Controller */
const deleteBillingController = async(req, res) =>{
    const id = req.query.id;
    const decodedEmail = req.decoded.email;
    const email = req.query.email;
    if(decodedEmail === email){
        const result = await billingCollection.deleteOne({_id: ObjectId(id)});
        if(result.acknowledged){
            res.send({success: true, message: "Billing Deleted Successfully"});
        }
    }else{
        res.status(403).send({success: false, message: "You are not Authorized to perform this action"});
    }   
}

module.exports = {addBillingController,billingListController, deleteBillingController }