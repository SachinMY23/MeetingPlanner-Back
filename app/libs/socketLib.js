const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const password = require('./sendMail');
const tokenLib=require('./../libs/tokenLib')
const time=require('./timeLib');
const check=require('./../libs/checkLib')
const mail=require('./sendMail');

const meetingModel = mongoose.model('Meeting');
const userModel=mongoose.model('User')

let setServer = (server) => {

    let io = socketio.listen(server);

    let myIo = io.of('/')

    myIo.on('connection', (socket) => {
       
       
        //asking sockets to register
        socket.emit('register-users')
         /**
    *  @apiGroup sockets
    * 
    * @api  socket.on('register-users')  Listen to this event to register socket.
    *
    * 
    
   */
        
        //sockets registering with server
        socket.on('register',(data)=>{
          socket.userId=data.userId;
        })
         /**
         /**
     *  @apiGroup sockets
    
    * @api socket.emit('register',data) emit this event to register socket.

    
    *
    * @apiParam {String} userId  userId of the user.(send this in data object)
    

   */
     
        socket.on('meeting-edit-notification', (data) => {
            console.log(data);
            myIo.emit(data.receiverId,data);
            message = `<h1 style="color:red">Hi ${data.fullName}...</h1>
            <p style="color:green">Your Meeting that was on ${data.oldMeetingTime} is scheduled on
            ${data.newMeetingTime}</p>
            <p style="color:orange">admin name:${data.adminName}<br/>
                                    contact no:${data.adminNo}</p>`  
            subj = 'Changes In The Meeting'


            setTimeout(function () {
                password.sendMailFunction(data.email, subj, message);
                console.log("Mail sent successfully")

            },1000)
        })
         /**
         /**
     *  @apiGroup sockets
    
    * @api socket.emit('meeting-edit-notification',data) emit this event when admin edit a meeting.

    
    *
     * @apiParam {String} receiverId  userId of the receiver.(send this in data object)
    * @apiParam {String} fullName  fullName of the receiver.(send this in data object)
    * @apiParam {String} msg  message for the receiver receiver.(send this in data object)
    * @apiParam {String} adminName Name of the admin.(send this in data object)
    * @apiParam {Number} adminNo phone number of the admin.(send this in data object)
    * @apiParam {String} oldMeetingTime old meeting time.(send this in data object)
    * @apiParam {String} newMeetingTime new meeting time.(send this in data object)
    * @apiParam {String} email  email id of the receiver.(send this in data object)


   */

        socket.on('meeting-create-notification', (data) => {

            myIo.emit(data.receiverId,data);

            let message = `<h1 style="color:red">Hi ${data.fullName}...</h1>
            <p style="color:green">Your Meeting is scheduled on
            ${data.meetingTime}</p>
            For any queries dial the contact no given below.</p>
            <p style="color:orange">admin name:${data.adminName}<br/>
                                    contact no:${data.adminNo}</p>`  
            let subj = 'Meeting Schedule Notification'


            setTimeout(function () {
                password.sendMailFunction(data.email, subj, message);
                console.log("Mail sent successfully")

            },1000)
        })
         /**
         /**
     *  @apiGroup sockets
    
    * @api socket.emit('meeting-create-notification',data) emit this event when admin creates a meeting.
    *
     * @apiParam {String} receiverId  userId of the receiver.(send this in data object)
    * @apiParam {String} fullName  fullName of the receiver.(send this in data object)
    * @apiParam {String} msg  message for the receiver receiver.(send this in data object)
    * @apiParam {String} adminName Name of the admin.(send this in data object)
    * @apiParam {Number} adminNo phone number of the admin.(send this in data object)
    * @apiParam {String} meetingTime meeting time.(send this in data object)
    * @apiParam {String} email  email id of the receiver.(send this in data object)
    
    *
    

   */

        socket.on('meeting-delete-notification', (data) => {

            myIo.emit(data.receiverId,data);

            console.log(data);
            message = `<h1 style="color:red">Hi ${data.fullName}...</h1>
            <p style="color:green">Your Meeting that was on ${data.meetingTime} 
            is cancelled.
            For any queries dial the contact no given below.</p>
            <p style="color:orange">admin name:${data.adminName}<br/>
                                    contact no:${data.adminNo}</p>`
            subj = 'Meeting Cancel Notification'


            setTimeout(function () {
                password.sendMailFunction(data.email, subj, message);
                console.log("Mail sent successfully")

            },1000)
            
        })
         /**
     *  @apiGroup sockets
    
    * @api socket.emit('meeting-delete-notification',data) emit this event when admin deletes a meeting.

    
    *
    * @apiParam {String} receiverId  userId of the receiver.(send this in data object)
    * @apiParam {String} fullName  fullName of the receiver.(send this in data object)
    * @apiParam {String} msg  message for the receiver receiver.(send this in data object)
    * @apiParam {String} adminName Name of the admin.(send this in data object)
    * @apiParam {Number} adminNo phone number of the admin.(send this in data object)
    * @apiParam {String} meetingTime meeting time.(send this in data object)
    * @apiParam {String} email  email id of the receiver.(send this in data object)


   */
        
        eventEmitter.on('notify-client',(data)=>{
            console.log('emitting notify-client');
            socket.emit('client-alert',data);
            console.log(data);
        })
         /**
   *  @apiGroup sockets
    
    * @api socket.on('client-alert',data()=>{}) listen to this event when user presses snooze button.

    
    *
    * @apiParam {String} userId userId of the user.(This data will be received by you)
    * @apiParam {String} fullName fullName of the user.(This data will be received by you)

   */

        socket.on('snooze',(dat)=>{
            setTimeout(function(){
              socket.emit('client-alert-snooze',dat)
            },15000);
        })
         /**
    *  @apiGroup sockets
    
    * @api socket.emit('snooze',data) emit this event when user presses snooze button.
    *
    * @apiParam {String} userId userId of the user. (data.userId) (required)
    * 
    
   */
    
       
    

    })
   //function to send mail to the users, one minute before the meeting
    function mailAlert()
    {meetingModel.find({'meetingTime':time.getMeetingTime()}).exec((err,res)=>{
        console.log(time.getMeetingTime());

        if(err){
            console.log(err);
        }
        else if(check.isEmpty(res)){
            console.log("No res found")
        }
        else{
           for(let i=0;i<res.length;i++){
               userModel.find({'userId':res[i].userId},(err,details)=>{
                   console.log(details[0].email);
                 if(err){
                     console.log("Some database error");
                 }else{
                    let fullName=details[0].firstName+' '+details[0].lastName
                    let subj="Meeting alert"
                    let email=details[0].email;
                    let msg=`<h1 style="color:red">Hi ${fullName}...</h1>
                     <p style="color:green">Your Meeting that was on
                     ${res[i].meetingTime} is in less than one minute
                     </p>
                     <p style="color:orange">admin name:${res[i].adminName}
                     </p>`  

                     mail.sendMailFunction(email,subj,msg);
                     let data={
                         name:fullName,
                         userId:details[0].userId
                     }
                     console.log(data);
                     eventEmitter.emit('notify-client',data)
                 }
               })
           }
        }
    })
}
setInterval(mailAlert,50000);



}
module.exports = {
    setServer: setServer
}