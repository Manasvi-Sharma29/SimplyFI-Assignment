const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    ID:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mark1:{
        type:Number,
        required:true
    },
    mark2:{
        type:Number,
        required:true
    },
    mark3:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('student',studentSchema)