let mongoose = require("mongoose");
let userSchema = require("../schemas/userSchema");
module.exports = mongoose.model("users",userSchema);