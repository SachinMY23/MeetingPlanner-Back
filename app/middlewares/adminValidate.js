const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const request = require("request")
const AuthModel = mongoose.model('Auth')

const logger = require('./../libs/loggerLib')
const responseLib = require('./../libs/responseLib')
const token = require('./../libs/tokenLib')
const check = require('./../libs/checkLib')

const adminKey="GisG"

let isAdmin = (req, res, next) => {
  
  if (req.body.adminKey && req.body.adminKey!=undefined) {
  if (req.body.adminKey==adminKey) {
        req.body.isAdmin=true;
         next()
        
      } else {
         logger.error('Invalid Admin Key Is Present', 'AdminValidate Middleware', 10)
        let apiResponse = responseLib.generate(true, 'Invalid Or Expired Admin Key', 404, null)
        res.send(apiResponse)
    } 


  } else {
     req.body.isAdmin=false;
     next();
    
  }
}


module.exports = {
  isAdmin: isAdmin
}
