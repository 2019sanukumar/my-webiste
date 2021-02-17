const express=require('express');
const cookieParser=require('cookie-parser');//after installing cookie parser
const app=express();
const port=8800;
const expressLayouts=require('express-ejs-layouts');//for layout
const db=require('./config/mongoose');//require mongoose config

app.use(express.urlencoded());//for encoding req 
app.use(cookieParser());//for cookie parser
app.use(express.static('./assets'));//this will tell express to llok for static file in assets folder


app.use(expressLayouts);//teeling that use this layout before fetching
app.set('layout extractStyles',true);//extract syltlesheet from subpages 
app.set('layout extractScripts',true);//extracting js file from subpages


//use express router
app.use('/',require('./routes/index'));//this will go to route for all further query
app.set('view engine','ejs');//setting up the view enigine
app.set('views','./views');


app.listen(port,function(err)
{
    if(err)
    {
        console.log('error in running the server',err);
    }
    console.log('server is running on the port',port);

});