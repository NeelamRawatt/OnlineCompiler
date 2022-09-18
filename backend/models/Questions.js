const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    // admin: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'admin'
    // },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    // examples: {
    //     type: [{ type: String }, ],
    //     required: false
    // },
    constraints: {
        type: String,
        required: true
    },
    difficultyLevel:{
        type : String
    },
    // expectedOutput: {
    //     type: String,
    //     // required: true
    // },
    // expectedInput : {
    //     type :String
    // },
    // difficulty: {
    //     type: String,
    //     required: true,
    //     default: "Easy"
    // },
    category: {
        type: String,
        required: true
    },
    inputDesc:{
        type:String,
    },
    outputDesc:{
        type : String
    },
    exampleInput : {
        type : String
    },
    exampleOutput : {
        type : String
    },
    explanation :{
        type : String
    },
    hiddenInput : {
        type :String
    },
    hiddenOutput :{
        type:String
    }

});

module.exports = mongoose.model('question', questionSchema);