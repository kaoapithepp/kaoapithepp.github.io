/*Emailing back*/
let recieverName = document.querySelector('#name');
let reciverEmail = document.querySelector('#email');
let submitButton = document.querySelector('#send-it')

let subjectText = 'Thanks for subscribe, We got your request!'; 
let replyText = 'Hey hey' + recieverName;

var nodemailer = require('nodemailer');

function clickToSend() {

    let transporter = Email.send({
        Host: "smtp.gmail.com",
        auth: {
            user: 'yangflowfriend@gmail.com',
            pass: 'Since2020',
        }
    });

    let mailOptions = {
        from: 'yangflowfriend@gmail.com',
        to: reciverEmail,
        subject: subjectText,
        text: replyText
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

submitButton.addEventListener('click', clickToSend);

