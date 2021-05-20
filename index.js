const express=require('express');
const env=require('./config/environment');
const logger=require('morgan');
const cookieParser=require('cookie-parser');//after installing cookie parser
const app=express();
require('./config/view-helper')(app);
const port=8000;
const expressLayouts=require('express-ejs-layouts');//for layout
const db=require('./config/mongoose');//require mongoose config
const session=require('express-session');//requireing express sesiion afet intalling it
const passport=require('passport');


const passportLocal=require('./config/passport-local-strategy'); //fetching up the localstgy
// const passportJWT=require('./config/passport-jwt-strategy');
const passportGoogle=require('./config/passport-google-oauth2-strategy');
const MongoStore=require('connect-mongo')(session);
// const sassMiddleware=require('node-sass-middleware');
const flash=require('connect-flash');
const customMware=require('./config/middleware');
// setup the chat serverto be used with socket.io



const chatServer=require('http').Server(app);
const chatSockets=require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is listening on port 5000');
const path=require('path');


// app.use(sassMiddleware({//for sass middleware
//     // src:'/assets/scss',
//     src:path.join(__dirname,env.asset_path,'scss'),

//     // dest:'/assets/css',
//     dest:path.join(__dirname,env.asset_path,'css'),
//     debug:true,
//     outputStyle:'extended',
//     prefix:'/css'



// }));
app.use(express.urlencoded({extended: true}));//for encoding req 
app.use(cookieParser());//for cookie parser
// app.use(express.static("public"));
app.use(express.static(env.asset_path));//this will tell express to llok for static file in assets folder

//make the upload pathavalbale to the browser
app.use('/uploads',express.static(__dirname + '/uploads'));
app.use(expressLayouts);//teeling that use this layout before fetching
app.set('layout extractStyles',true);//extract syltlesheet from subpages 
app.set('layout extractScripts',true);//extracting js file from subpages


app.use(logger(env.morgon.mode,env.morgon.options));

app.set('view engine','ejs');//setting up the view enigine
app.set('views','./view');

app.use(session({
    name:'backend',
    secret:env.session_cookie_key,
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
app.use(flash());
app.use(customMware.setFlash);
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