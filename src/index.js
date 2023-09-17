require('dotenv').config()

const app = require('./server.js');
const path = require('path');
const colors = require('colors');

require ('./data-base.js');


const port = app.get('port');


app.listen(port, ()=>{
    console.log(`Server on port ${port}`.magenta);
    //console.log(`http://45.190.45.00:${port}`.yellow);
});

