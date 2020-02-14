let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    username: String,
    password: String
});
module.exports = userSchema;