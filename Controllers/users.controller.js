
const usersController = async(req, res) =>{
    res.send({success: true, message: "Welcome to the USERS ROUTE API"});
};


module.exports = {usersController}