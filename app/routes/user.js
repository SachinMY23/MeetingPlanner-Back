const express = require('express');
const router = express.Router();
const userController = require('./../controller/userController');
const appConfig = require('./../../config/appConfig');
const auth = require('./../middlewares/auth')
const admin = require('./../middlewares/adminValidate')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    app.post(`${baseUrl}/signup`, admin.isAdmin, userController.signUpFunction);
    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {post} /api/v1/users/signup api to signup a user
    *
    * @apiParam {string} firstName firstName of the user. (body params) (required)
    * @apiParam {string} lastName lastName of the user. (body params) (required)
    * @apiParam {string} email email of the user. (body params) (required)
    * @apiParam {string} mobileNumber mobile number of the user. (body params) (required)
    * @apiParam {string} password password of the user. (body params) (required)
    * @apiParam {string} countryCode countryCode of the user. (body params) (required)
    * @apiParam {string} adminKey key to signup as a admin. (body params) (optional)


    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    {
    "error": false,
    "message": "User created",
    "status": 200,
    "data": {
             "userId": "V4eTMj6o",
             "firstName": "Nirmala",
             "lastName": "Mallikarjun",
             "countryCode": 91,
             "mobileNumber": 9686464589,
             "email": "nmy@gmail.com",
             "isAdmin": true,
             "createdOn": "2020-03-02T11:44:07.000Z"
             }
    }
   */
    app.post(`${baseUrl}/login`, userController.logInFunction);
    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {post} /api/v1//users/login api to login a user.
    *
    
    * @apiParam {string} email email of the user. (body params) (required)
    * @apiParam {string} password password of the user. (body params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
      {
       "error": false,
       "message": "Login Successful",
       "status": 200,
       "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjJzeTRfWVdvIiwiaWF0IjoxNTgzMTUwMjgyMjYxLCJleHAiOjE1ODMyMzY2ODIsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9MaXN0IiwiZGF0YSI6eyJ1c2VySWQiOiJWNGVUTWo2byIsImZpcnN0TmFtZSI6Ik5pcm1hbGEiLCJsYXN0TmFtZSI6Ik1hbGxpa2FyanVuIiwiY291bnRyeUNvZGUiOjkxLCJtb2JpbGVOdW1iZXIiOjk2ODY0NjQ1ODksImVtYWlsIjoibm15QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWV9fQ.SpjDgpEfOe2hUlQzZ9WDVEhqubQpN8uIhADWWF_qlLQ",
                "userDetails": {
                "userId": "V4eTMj6o",
                "firstName": "Nirmala",
                "lastName": "Mallikarjun",
                "countryCode": 91,
                "mobileNumber": 9686464589,
                "email": "nmy@gmail.com",
                "isAdmin": true
                 }
                }
        }

   */
    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logOutFunction);

    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {post} /api/v1/users/logout api to logout a user.
    
    * @apiParam {string} userId Id of the user. (body params) (required)
    * @apiParam {string} authToken authToken of the user. (body params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
       {
          "error": false,
          "message": "Logged Out Successfully",
          "status": 200,
         "data": null
        }
   */
    app.get(baseUrl + '/all/users', auth.isAuthorized, userController.getUsers);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/all/users api to get all users.
     *
     * @apiParam {string} authToken authToken of the user. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
    "error": false,
    "message": "All User Details Found",
    "status": 200,
    "data": [
        {
            "userId": "uX-0U1xg",
            "firstName": "XYZ",
            "lastName": "abc",
            "countryCode": 91,
            "mobileNumber": null,
            "email": "xyz@gmail.com",
            "isAdmin": true,
            "createdOn": "2020-03-02T11:42:57.000Z"
        },
        {
            "userId": "V4eTMj6o",
            "firstName": "Nirmala",
            "lastName": "Mallikarjun",
            "countryCode": 91,
            "mobileNumber": 9686464589,
            "email": "nmy@gmail.com",
            "isAdmin": true,
            "createdOn": "2020-03-02T11:44:07.000Z"
        },
        {
            "userId": "c4re3YUy",
            "firstName": "Sachin",
            "lastName": "M Yattinahalli",
            "countryCode": 91,
            "mobileNumber": 9686464589,
            "email": "sachinmy612@gmail.com",
            "isAdmin": false,
            "createdOn": "2020-03-02T11:46:53.000Z"
        }
    ]
}
    */

   app.get(baseUrl + '/single/user/:userId', auth.isAuthorized, userController.getSingleUserFunction);
   /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/single/user/:userId api to get a single user.
     *
     * @apiParam {string} authToken authToken of the user. (body params) (required)
     * @apiParam {string} userId userId of the user. (url params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
      {
    "error": false,
    "message": "User details found Successfully",
    "status": 200,
    "data": [
        {
            "userId": "c4re3YUy",
            "firstName": "Sachin",
            "lastName": "M Yattinahalli",
            "countryCode": 91,
            "mobileNumber": 9686464589,
            "email": "sachinmy612@gmail.com",
            "isAdmin": false,
            "password": "$2a$10$uVpIQnQMtk7BVBBS4nvlkuj3zp2FMyi2seeX3oJIm8yDYDR7bhJea",
            "createdOn": "2020-03-02T11:46:53.000Z"
        }
    ]
        }
     */

    app.post(`${baseUrl}/recover/password`, userController.recoverPasswordFunction);
    /** 
     * @apiGroup users
      * @apiVersion  1.0.0
      * @api {post} /api/v1/users/recover/password api to recover password of a user.
      *
      * @apiParam {string} email email of the user. (body params) (required)
      * 
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
            {
    "error": false,
    "message": "Password sent to mail successfully",
    "status": 200,
    "data": null
}
     */
    app.post(`${baseUrl}/delete/all`, auth.isAuthorized, userController.deleteAllUsersFunction);
    /** 
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {post} /api/v1/users/delete/all api to delete all the users.
      *
      * @apiParam {string} authToken authToken of the user. (body params) (required)
     
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
         {
    "error": false,
    "message": "Users Deleted Successfully",
    "status": 200,
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
     */
    app.post(`${baseUrl}/delete/single/:userId`, auth.isAuthorized, userController.deleteSingleUserFunction);
    /** 
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {post} /api/v1/delete/single/:userId api to delete a single user.
      *
      * @apiParam {string} authToken authToken of the user. (body params) (required)
      * @apiParam {string} userId    userId of the user. (url params) (required)
      
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
          {
    "error": false,
    "message": "User Deleted Successfully",
    "status": 200,
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
     */
    app.post(`${baseUrl}/edit/profile/:userId`, auth.isAuthorized, userController.editProfileFunction);
    /** 
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {post} /api/v1/edit/profile/:userId api to edit the profile information of a user.
      *
      * @apiParam {string} authToken authToken of the user. (body params) (required)
      * @apiParam {string} firstName firstName of the user. (body params) (optional)
      * @apiParam {string} lastName lastName of the user. (body params) (optional)
      * @apiParam {string} email email of the user. (body params) (optional)
      * @apiParam {string} mobileNumber mobile number of the user. (body params) (optional)
      * @apiParam {string} countryCode countryCode of the user. (body params) (optional)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
         {
          "error": false,
          "message": "User profile Edited Successfully.",
          "status": 200,
          "data": {
                   "n": 1,
                   "nModified": 1,
                   "ok": 1
                   }
         }
     */

app.post(`${baseUrl}/change/password/:userId`,auth.isAuthorized, userController.changePasswordFunction);
/**
* @apiGroup users
* @apiVersion  1.0.0
* @api {post} /api/v1/users/signup api to signup a user
*
* @apiParam {string} oldPassword firstName of the user. (body params) (required)
* @apiParam {string} newPassword lastName of the user. (body params) (required)
* @apiParam {string} email email of the user. (body params) (required)


* @apiSuccess {object} myResponse shows error status, message, http status code, result.
* 
* @apiSuccessExample {object} Success-Response:
{
"error": false,
"message": "User created",
"status": 200,
"data": {
         "userId": "V4eTMj6o",
         "firstName": "Nirmala",
         "lastName": "Mallikarjun",
         "countryCode": 91,
         "mobileNumber": 9686464589,
         "email": "nmy@gmail.com",
         "isAdmin": true,
         "createdOn": "2020-03-02T11:44:07.000Z"
         }
}
*/
}
