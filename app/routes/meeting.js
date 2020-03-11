const express = require('express');
const router = express.Router();
const meetingController = require('./../controller/meetingController');
const appConfig = require('./../../config/appConfig');
const auth=require('./../middlewares/auth')
const admin=require('./../middlewares/adminValidate')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/meetings`;
     
    app.get(baseUrl + '/all/:userId',auth.isAuthorized, meetingController.getAllMeetingsFunction);
    /** @apiGroup meetings
    * @apiVersion  1.0.0
    * @api {get} /api/v1/meetings/all/:userId api to get all the meetings of a single user.
    *
    * @apiParam {string} userID userID of the user. (url params) (required)
    * @apiParam {number} skip   skip the output of api (query params) (optional)
    *    
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
       {
    "error": false,
    "message": "All Meeting Details Found",
    "status": 200,
    "data": [
        {
            "meetingTime": "2020-03-02 00:02",
            "meetingPurpose": "formal",
            "createdOn": "2020-03-02T13:47:58.944Z",
            "adminName": "Nirmala Mallikarjun",
            "meetingId": "bAoeMnmv",
            "userId": "c4re3YUy",
            "adminNo":969699848848
        },
        {
            "meetingTime": "Monday, March 2, 2020 12:02 AM",
            "meetingPurpose": "formal",
            "createdOn": "2020-03-02T12:21:39.149Z",
            "adminName": "Nirmala Mallikarjun",
            "meetingId": "fQevXmU9",
            "userId": "c4re3YUy",
            "adminNo":969699848848
        },
        {
            "meetingTime": "Monday, March 2, 2020 12:02 AM",
            "meetingPurpose": "",
            "createdOn": "2020-03-02T12:20:16.965Z",
            "adminName": "Nirmala Mallikarjun",
            "meetingId": "k70k813_",
            "userId": "c4re3YUy",
            "adminNo":969699848848
        }
    ]
}
   */
    app.get(baseUrl + '/single/:meetingId',auth.isAuthorized, meetingController.getSingleMeetingFunction);
    /**
    *  @apiGroup meetings
    * @apiVersion  1.0.0
    * @api {post} /api/v1/meetings/single/:meetingId api to get a meeting of a user.
    *
    * @apiParam {string} meetingId meetingId of the meeting. (url params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Meeting Details Found",
    "status": 200,
    "data": [
        {
            "meetingTime": "2020-03-02 00:02",
            "meetingPurpose": "",
            "createdOn": "2020-03-02T13:47:58.944Z",
            "adminName": "Nirmala Mallikarjun",
            "meetingId": "bAoeMnmv",
            "userId": "c4re3YUy",
        }
    ]
}
   */

    app.post(baseUrl + '/create/:userId',auth.isAuthorized,meetingController.createMeetingFunction);
    /** 
    * @apiGroup meetings
    * @apiVersion  1.0.0
    * @api {post} /api/v1/meetings/create/:userId api to create a meeting for the single user.
    *
    * @apiParam {string} meetingVenue meeting place. (body params) (required)
    * @apiParam {string} meetingTime meeting time. (body params) (required)
    * @apiParam {string} meetingPurpose purpose of the meeting. (body params) (required)
    * @apiParam {string} adminName name of the admin. (body params) (required)
    * @apiParam {string} userId userId of the user. (body params) (required)
    * @apiParam {string} adminNo phone number of the admin. (body params) (required)
    * @apiParam {string} fullName full name of the user. (body params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "meeting Created successfully",
    "status": 200,
    "data": {
        "meetingTime": "Monday, March 2, 2020 12:02 AM",
        "meetingPurpose": "formal",
        "createdOn": "2020-03-02T13:47:58.944Z",
        "adminName": "Nirmala Mallikarjun",
        "meetingId": "bAoeMnmv",
        "userId": "c4re3YUy"
        
    }
}
   */
    app.post(`${baseUrl}/edit/:meetingId`,auth.isAuthorized,meetingController.editMeetingFunction)
    /**
    * @apiGroup meetings
    * @apiVersion  1.0.0
    * @api {post} /api/v1/meetings/edit/:userId api to edit a meeting for the single user.
    *
    * @apiParam {string} meetingVenue firstName of the user. (body params) 
    * @apiParam {string} meetingTime lastName of the user. (body params)
    * @apiParam {string} meetingPurpose email of the user. (body params)
    * @apiParam {string} adminName name of the admin . (body params)
    * @apiParam {string} meetingPurpose email of the user. (body params)
    * @apiParam {string} adminNo phone number of the admin . (body params)
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    
    * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Meeting Edited Successfully.",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
   */
    app.post(`${baseUrl}/delete/:meetingId`,auth.isAuthorized,meetingController.deleteMeetingFunction)
    /**
    * @apiGroup meetings
    * @apiVersion  1.0.0
    * @api {post} /api/v1/meetings/delete/:meetingId api to delete a single meeting of the user.
    *
    * @apiParam {string} meetingId meetingId of the meeting. (url params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Meeting Deleted Successfully",
    "status": 200,
    "data": {
        "meetingTime": "Monday, March 2, 2020 12:02 AM",
        "meetingPurpose": "formal",
        "createdOn": "2020-03-02T12:21:39.149Z",
        "adminName": "Nirmala Mallikarjun",
        "_id": "5e5cfa536cc1d71c98712032",
        "meetingId": "fQevXmU9",
        "userId": "c4re3YUy",
        "__v": 0
    }
}
   */

}