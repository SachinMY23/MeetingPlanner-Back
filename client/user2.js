// connecting with sockets.
const socket = io.connect('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlN2SzMzakRoIiwiaWF0IjoxNTgyOTk4Njc1NjYzLCJleHAiOjE1ODMwODUwNzUsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9MaXN0IiwiZGF0YSI6eyJ1c2VySWQiOiJ0aFJvYmhoNSIsImZpcnN0TmFtZSI6Inh5eiIsImxhc3ROYW1lIjoiYWJjIiwiY291bnRyeUNvZGUiOjkxLCJtb2JpbGVOdW1iZXIiOm51bGwsImVtYWlsIjoieHl6QGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlfX0.BkNjf8PnWL_WvzmtY5d-nbBOA-tL3vDFBMnW2scUvzM"
const name = "XYZ"
const userId="6RQPUjoj"

let dat={
  userId:"6RQPUjoj"
}


let data= {
  firstName: "Sachin",
  lastName:'mY',
  email:"sachinmy612@gmail.com",
  adminNo:9686464589,
  adminName:'Nirmala Mallikarjun',
  receiverId:"pHNEIRuC",
  oldMeetingTime:'Tuesday, March 3, 2020 10:40 PM',
  newMeetingTime:'Tuesday, March 3, 2020 10:40 PM',
  userId:"6RQPUjoj"
}

let meetingSocket = () => {

  socket.on('register-users',()=>{
    socket.emit('register',dat);
    console.log('registering with server')
    }
   )
   socket.on('client-alert',(data)=>{
    if(data.userId==userId){
      console.log(data);
      console.log(`hi ${data.name} u have a meeting`)
    }
  })
  socket.on('client-alert-snooze',(dat)=>{
    if(dat.userId==userId){
    console.log(`hi...U have a meeting`);
    }
  })
  $("#snooze").on('click', function () {
    socket.emit('snooze',dat);
    console.log("snooze")
})
$("#edit").on('click', function () {
 socket.emit('meeting-edit-notification',data);
 console.log("edit")
})
$("#delete").on('click', function () {
socket.emit('meeting-delete-notification',data);
console.log("delete")
})
$("#create").on('click', function () {
socket.emit('meeting-create-notification',data);
console.log("create")
})
socket.on(userId,(data)=>{
  console.log('personal message');
})

}// end chat socket function
meetingSocket();
