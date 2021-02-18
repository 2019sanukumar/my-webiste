const express=require('express');
const cookieParser=require('cookie-parser');//after installing cookie parser
const app=express();
const port=5000;
const expressLayouts=require('express-ejs-layouts');//for layout
const db=require('./config/mongoose');//require mongoose config
const session=require('express-session');//requireing express sesiion afet intalling it
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy'); //fetching up the localstgy
const MongoStore=require('connect-mongo')(session);



app.use(express.urlencoded({extended: true}));//for encoding req 
app.use(cookieParser());//for cookie parser
app.use(express.static('./assets'));//this will tell express to llok for static file in assets folder


app.use(expressLayouts);//teeling that use this layout before fetching
app.set('layout extractStyles',true);//extract syltlesheet from subpages 
app.set('layout extractScripts',true);//extracting js file from subpages




app.set('view engine','ejs');//setting up the view enigine
app.set('views','./views');

app.use(session({
    name:'backend',
    secret:'blahblah',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*1000*60)
    },
    store:new MongoStore({
        // for storing up the sessio cookies so that session doesnot get expired up restating the server
        mongooseConnection:db,
        autoRemove:'disabled'

    },function(err){
        console.log(err||'connect-mogodb setup is ok');
    })

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser)//this will call middle ware creted in passport local strategy and that will alow us to fetch data of curent signed user in views

//use express router
app.use('/',require('./routes/index'));//this will go to route for all further query



app.listen(port,function(err)
{
    if(err)
    {
        console.log('error in running the server',err);
    }
    console.log('server is running on the port',port);

});