const mongoose = require('mongoose');
const  Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/2020', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;
con.on('error',(err,res)=>{
    console.log(err)
});

con.once('open', ()=>{
    console.log('连接成功');
    let user = new Schema({
        username: String,
        age: Number,
        birth: String,
        gender: String,
        job: String,
        hireDay: String,
        company: String
    });


    user.methods.eat = function () {
        // console.log(u == this ? true: false);
        console.log(user.methods,this,this.username);
    };
    let User =  mongoose.model('User',user);
    console.log(User)
    let u = new User({username: "koko"});

    u.eat();
   User.find({username: '陈威胜'},(err,data) => {
       console.log(data);
   })
});






