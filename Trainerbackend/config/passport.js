const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const Trainer=require('../models/traineruser');
const Student=require('../models/studentuser');
const config=require('../config//database');

module.exports=function(passport){
    let opts={};
    opts.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload,done) =>
    {
      Trainer.getUserById(jwt_payload._id,(err,user) =>
      {
          console.log(err + "122424" + user );
          if(err)
          {
              return done(err,false);
          }
          if(user)
          {
              return done(null,user);
          }
          else
          {
              return done(null,false);
          }
      });
    }));
}

module.exports=function(passport){
    let opts1={};
    opts1.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts1.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opts1, (jwt_payload,done) =>
    {
      Student.getUserById(jwt_payload._id,(err,studentuser) =>
      {
          console.log(err + "122424" + studentuser );
          if(err)
          {
              return done(err,false);
          }
          if(studentuser)
          {
              return done(null,studentuser);
          }
          else
          {
              return done(null,false);
          }
      });
    }));
}


