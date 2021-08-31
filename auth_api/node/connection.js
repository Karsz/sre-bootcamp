import Config from 'config';
const mysql = require('mysql');


const dbconf = {
    host : Config.host,
    user : Config.user,
    password: Config.password,
    database: Config.database
  };

let connection;

function handleConnection(){
    connection = mysql.createConnection(dbconf);

    connection.connect((err)=>{
        if(err){
            console.error("[db error]", err);
        }
        else{
            console.log("connected");
        }
        
    })
}

function getPassword(user){
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * FROM users WHERE username ='${user}'`,(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        } );
    });
    
    
}

module.exports={
    handleConnection,
    getPassword,
}