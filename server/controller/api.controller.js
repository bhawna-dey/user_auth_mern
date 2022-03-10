var ApiService = require('../services/api.service')    


exports.getUserList= async function(req, res) {

    const data=await ApiService.getUserList({});
    return (res.json(data));
};