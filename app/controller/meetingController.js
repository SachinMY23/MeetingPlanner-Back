const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
const token = require('./../libs/tokenLib')
const meeting = require('./../libs/meetingAlert')

/* Models */
const userModel = mongoose.model('User');
const authModel = mongoose.model('Auth');
const meetingModel = mongoose.model('Meeting');

//this function gets all the meetings stored in the database
//start of getAllMeetings Function
let getAllMeetings = (req, res) => {
    meetingModel.find({ userId: req.params.userId })
        .select('-__v -_id')
        .sort('-createdOn')
        .skip(parseInt(req.query.skip || 0))
        .lean()
        .limit(5)
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Meeting Controller: getAllMeetings', 10)
                let apiResponse = response.generate(true, 'Failed To Find Meeting Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Meetings Found', 'Meeting Controller: getAllMeetings')
                let apiResponse = response.generate(true, 'No Meetings Found For The User', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Meeting Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}//end of get all meetings function

//start of getSingleMeeting function
//this meeting fetches single meeting based on the given Id
let getSingleMeeting = (req, res) => {
    meetingModel.find({ meetingId: req.params.meetingId })
    .select('-__v -_id')
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Meeting Controller: getOneMeeting', 10)
                let apiResponse = response.generate(true, 'Failed To Find Meeting Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('Meeting Not Found', 'Meeting Controller: getOneMeeting')
                let apiResponse = response.generate(false, 'No Meetings Found For The User', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Meeting Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}//end of getSingleMeetingFunction


//start of create meeting function
//this function creates a meeting
let createMeeting = (req, res) => {
        if (check.isEmpty(req.params.userId)) {

            console.log("403, forbidden request");
            let apiResponse = response.generate(true, 'userId parameter missing', 403, null)
            res.send(apiResponse)
        }

           else if (check.isEmpty(req.body.meetingVenue) || check.isEmpty(req.body.meetingTime) || check.isEmpty(req.body.meetingPurpose)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                res.send(apiResponse)
            } else {

                var today = Date.now()
                let meetingId = shortid.generate()

                let newMeeting = new meetingModel({

                    meetingId: meetingId,
                    meetingVenue: req.body.meetingVenue,
                    meetingPurpose: req.body.meetingPurpose,
                    meetingTime: time.timeExp(req.body.meetingTime),
                    adminName: req.admin.fullName,
                    userId: req.params.userId,
                    createdOn: today
                })


                newMeeting.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        res.send(apiResponse)
                    } else {
                        console.log('Success in meeting creation')
                        let apiResponse = response.generate(false, 'Meeting Created Successfully', 200,result)
                        res.send(apiResponse)

                    }
                })
            }
      
    // making promise call.
  

}//end of createMeeting function


//Start of editMeetingFunction
//this function is to edit the single meeting
let editMeeting = (req, res) => {
    if (check.isEmpty(req.params.meetingId)) {

        console.log('MeetingIdId should be passed')
        let apiResponse = response.generate(true, 'MeetingId is missing', 403, null)
        res.send(apiResponse)
    } else {
        let options = req.body;
        console.log(options);
        meetingModel.updateOne({ 'meetingId': req.params.meetingId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Meeting Not Found.')
                let apiResponse = response.generate(true, 'Meeting Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Meeting Edited Successfully')
                let apiResponse = response.generate(false, 'Meeting Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end of editMeetingFunction

//start of delete meeting function
//this function deletes a single meeting of a given id
let deleteMeeting = (req, res) => {

    if (check.isEmpty(req.params.meetingId)) {

        console.log('meetingId  should be passed')
        let apiResponse = response.generate(true, 'MeetingIdId is missing', 403, null)
        res.send(apiResponse)
    } else {

        meetingModel.findOneAndRemove({ 'meetingId': req.params.meetingId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Meeting Not Found.')
                let apiResponse = response.generate(true, 'Meeting Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Meeting Deletion Success')
                let apiResponse = response.generate(false, 'Meeting Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

//Exporting all the functions
module.exports = {
    getAllMeetingsFunction: getAllMeetings,
    getSingleMeetingFunction: getSingleMeeting,
    createMeetingFunction: createMeeting,
    editMeetingFunction: editMeeting,
    deleteMeetingFunction: deleteMeeting

}