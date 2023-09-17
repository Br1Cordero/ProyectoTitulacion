const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs')
const NoteUser = new Schema({
    
    title:{
        type :String,
        require :  true,
    },
    description:{
        type : String,
        required : true
    }

}, {
    timestamps: true
});


module.exports = model('Note', NoteUser)
