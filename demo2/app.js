require("./db/db");
let User = require("./models/user");
let mongoose = require("mongoose");
/*User.insertMany([{username: 'alex',password: 'alex123'}],(err,docs) => {
    if(err) console.log(err);
    else console.log(docs);
});*/

/*
const user = new User({username: "哈哈",password: "哈哈123"});
user.save().then((res) => {
    console.log(res)
});*/

/*User.findOne({username: 'alex'},(err,res)=>{
    console.log(res._id);
    let _id = res._id;
    //mongoose处理mongodb的_id => mongoose.Types.ObjectId(_id)
    User.findById(mongoose.Types.ObjectId(_id),(err,res) => {
        if(!err) console.log(res)
    })
});*/

/*User.find({username: /^a/i},(err,res) => {
    console.log(res)
});*/

User.deleteOne({username: 'alex'},(err,res) => {
    console.log(res)
});
