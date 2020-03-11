const mongoose=require('mongoose');
Schema=mongoose.Schema;

let UserSchema=new Schema({
    userId:{
        type:String,
        unique:true,
        index:true,
        default:''
    },
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    countryCode:{
        type:Number,
        default:''
    },
    mobileNumber:{
        type:Number,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        default:''
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})

mongoose.model('User',UserSchema)