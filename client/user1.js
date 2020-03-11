// connecting with sockets.
const socket = io.connect('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Im9ZY3dkbUoyIiwiaWF0IjoxNTgyOTk4NTA5MDk0LCJleHAiOjE1ODMwODQ5MDksInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9MaXN0IiwiZGF0YSI6eyJ1c2VySWQiOiJHTXR0VEhDVSIsImZpcnN0TmFtZSI6IlNhY2hpbiIsImxhc3ROYW1lIjoiTSB5YXR0aW5haGFsbGkiLCJjb3VudHJ5Q29kZSI6OTEsIm1vYmlsZU51bWJlciI6bnVsbCwiZW1haWwiOiJzYWNoaW5teTYxMkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlfX0.qYxMvL5cRQKJUibpqK9VZerXX8s_aoSdrhMrnKUsBy0"
const name = "Sachin"
const userId="pHNEIRuC"

let data = {
  firstName:"Sachin",
  lastName:'M Yattinahalli',
  receiverId:'6RQPUjoj',
  email:'sachinmy612@gmail.com',
  adminName:'Nirmala Mallikarjun',
  oldMeetingTime:'Tuesday, March 3, 2020 10:40 PM',
  newMeetingTime:'Tuesday, March 3, 2020 10:40 PM',
  userId:"pHNEIRuC"

}
let dat={
  userId:'pHNEIRuC'
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
       console.log("Snooze")
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
