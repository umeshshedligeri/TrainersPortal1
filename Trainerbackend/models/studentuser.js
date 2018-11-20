const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');


const StudentsSchema=mongoose.Schema({
    sname:{
        type:String
    },
    semail:{
        type:String,
        required:true
    },
    smobile:{
        type:Number
    },
    saddress:{
        type:String
    },
    sdob:{
        type:String
    },
    squalification:{
        type:String
    },
    sbranch:{
        type:String
    },
    sgender:{
        type:String
    },
    sprofile:{
        type:String
    },
    spassword:{
        type:String
    }
    

});

const Student=module.exports=mongoose.model('Student',StudentsSchema);

module.exports.getUserById=function(id,callback)
{
    Student.findById(id,callback);
}

module.exports.getUserByUsername=function(semail,callback)
{
    const query={semail:semail}
    Student.findOne(query,callback);
}


module.exports.addStudent=function(newStudent,callback)
{
    bcrypt.genSalt(10,(err,salt)=>
    {
        bcrypt.hash(newStudent.spassword,salt,(err,hash)=>
        {
            if(err) throw err;
            newStudent.spassword=hash;
            newStudent.save(callback);
        });
    });
}

module.exports.comparePassword1=function(studentPassword,hash,callback)
{
    bcrypt.compare(studentPassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}