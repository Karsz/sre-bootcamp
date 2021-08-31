const crypto = require('crypto');
const connection = require('../connection');

const ERROR = 403;


connection.handleConnection();
export const loginFunction = (username, password) => {
  
    var loginResult = connection.getPassword(username).then(function (result){
      var data = result;
      var storedPassword = data.password;
      var salt = data.salt;
      var salted = password + salt;
      var hasher = crypto.createHash("sha512");
      var hash = hasher.update(salted).digest("hex");

      if(storedPassword === hash){
        return createJWT();
      }
      else{
        return ERROR;
      }
    
    });

    return loginResult;

}


function createJWT(){
  /* TODO */
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
