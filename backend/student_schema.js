const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let student_schema = new Schema({
    studentName : {
        type : String
    },
    sscMarks : {
        type: String
    },
    hscMarks : {
        type: String
    },
    address :{
        type: String
    },
    contact : {
        type: String
    },
    cetMarks : {
        type: String
    } 
});


module.exports = mongoose.model('student_schema', student_schema);