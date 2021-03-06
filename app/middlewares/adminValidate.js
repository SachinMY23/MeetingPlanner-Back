const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const request = require("request")
const AuthModel = mongoose.model('Auth')

const logger = require('./../libs/loggerLib')
const responseLib = require('./../libs/responseLib')
const token = require('./../libs/tokenLib')
const check = require('./../libs/checkLib')

const adminKey = "GisG"

let isAdmin = (req, res, next) => {
  console.log("admin key is"+req.body.adminKey)
  if ((req.body.adminKey) == "" || req.body.adminKey === 'undefined') {
    req.body.isAdmin = false;
    next()
  }
  else if (req.body.adminKey == adminKey) {
    req.body.isAdmin = true;
    next()

  } else {
    logger.error('Invalid Admin Key Is Present', 'AdminValidate Middleware', 10)
    let apiResponse = responseLib.generate(true, 'Invalid Or Expired Admin Key', 404, null)
    res.send(apiResponse)
  }


}

module.exports = {
  isAdmin: isAdmin
}
