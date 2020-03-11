const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/passWordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('./../libs/checkLib')
const token = require('./../libs/tokenLib')

/* Models */
const userModel = mongoose.model('User');
const authModel = mongoose.model('Auth');
const meetingModel = mongoose.model('Meeting');


let meetingAlert=()=>{
  
}
let mailList=()=>{
    let res=meetingAlert();
    console.log("result is:"+res);
}

module.exports={
    mailList:mailList,
    meetingAlert:meetingAlert
}