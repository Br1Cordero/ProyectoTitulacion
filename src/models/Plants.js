const { Schema, model } = require('mongoose');

const Plants = new Schema({
    name:{
        type : String,
        require :  true,
    },
    description:{
        type : String,
        required : true
    },
    plague: {
        type: Array,
        require: true
    }

}, {
    timestamps: true
});


module.exports = model('Plants', Plants)
