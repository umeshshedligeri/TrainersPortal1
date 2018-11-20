const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');


const TrainerSchema=mongoose.Schema({
    tname:{
        type:String
    },
    temail:{
        type:String,
        required:true
    },
    tmobile:{
        type:Number
    },
    taddress:{
        type:String
    },
    tskills:{
        type:String
    },
    texperience:{
        type:String
    },
    tprofile:{
        type:String
    },
    tdemovideo:{
        type:String
    },
    tpassword:{
        type:String
    }
    

});

const Trainer=module.exports=mongoose.model('Trainer',TrainerSchema);

module.exports.getUserById=function(id,callback)
{
    Trainer.findById(id,callback);
}

module.exports.getUserByUsername=function(temail,callback)
{
    const query={temail:temail}
    Trainer.findOne(query,callback);
}

module.exports.addTrainer=function(newTrainer,callback)
{
    bcrypt.genSalt(10,(err,salt)=>
    {
        bcrypt.hash(newTrainer.tpassword,salt,(err,hash)=>
        {
            if(err) throw err;
            newTrainer.tpassword=hash;
            newTrainer.save(callback);
        });
    });
}

module.exports.comparePassword=function(trainerPassword,hash,callback)
{
    bcrypt.compare(trainerPassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}