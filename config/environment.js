const fs=require('fs');
const rfs=require('rotating-file-stream');
const path=require('path');

const logDirectory=path.join(__dirname,'../production_logs');

fs.existsSync(logDirectory)||fs.mkdirSync(logDirectory);
const accessLogStream= rfs.createStream('access.log',{
    interval:'1d',
    path:logDirectory
})



const development={
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'backrev',
    db:'back-endrev',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'2019sanukumar',
            pass:'Kumar@9790'
        }
    },
    google_clientID:"1062077741370-c44pmlfs0q0m343k06p9254uha0rdv4s",
    google_clientSecret:"HqXSa7MayC9VHWND_p5odaQR",
    google_callbackURL:"http://localhost:5000/user/auth/google/callback",

    jwt_secret:'backrev',
    morgon:{
        mode:'dev',
        options:{stream:accessLogStream}

    }
}

const production={
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIALSESSION_COOKIE_KEY,
    db:process.env.CODEIAL_db,
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'2019sanukumar',
            pass:'Kumar@9790'
        }
    },
    google_clientID:process.env.CODEIAL_goole_clientID,
    google_clientSecret:process.env.CODEIAL_google_clientSecret,
    google_callbackURL:process.env.CODEIAL_goole_clientID,

    jwt_secret:'backrev',
    morgon:{
        mode:'combined',
        options:{stream:accessLogStream}

    }
}


module.exports=eval(process.env.CODEIAL_ENVIRONMENT)==undefined?development:eval(process.env.CODEIAL_ENVIRONMENT);
// module.exports=development