const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const time = require('../libs/timeLib');
const moment = require('moment')


const MeetingSchema = new Schema({
  userId: {
    type: String
  },
  meetingId: {
    type: String
  },
  meetingVenue: {
    type: String
  },
  meetingTime: {
    type:String,
    default:''
  },
  meetingPurpose:{
      type:String,
      default:''
  },
  createdOn:{
      type:Date,
      default:time.now()
  },
  adminName:{
      type:String,
      default:''
  }
})

module.exports = mongoose.model('Meeting',MeetingSchema)
