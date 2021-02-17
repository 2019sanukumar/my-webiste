// this is for connecting to database using mongodb
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/back-endrev');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to mongoose"));

db.once('open',function(){// if it get connected succesfully
    console.log('Connected to Database:: Mongodb');
});

module.exports=db;//exporting db so that it can be used