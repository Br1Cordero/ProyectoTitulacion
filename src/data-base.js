const mongoose = require('mongoose');

const URL = process.env.DataBase;

mongoose.connect(URL,{
    useUnifiedTopology : true,
    useNewUrlParser: true ,
    
})
.then(db => console.log('Database is connect'.blue))
.catch(err => console.log(`${err}`.red));