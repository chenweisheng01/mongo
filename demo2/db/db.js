let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/2020",function (err) {
    if(err){
        console.log("连接失败")
    }else{
        console.log("连接成功")
    }
});