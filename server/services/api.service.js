const {User}= require('../models/user');

exports.getUserList= async function(query){
    try{
        var users=await User.find(query)
        return users;
    }
    catch(error) {
        console.log('error: ', error);
    };
}