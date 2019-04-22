export class Mailer{
  send(mailOptions){ 
    fs = require('fs');
    const nodemailer = require('nodemailer');
    
    config = JSON.parse(fs.readFileSync( "config.json"));
    const transporter = nodemailer.createTransport(config);
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
  }   
}
