// const sgMail = require("@sendgrid/mail");
var nodemailer = require('nodemailer');

const verifyEmail = async (options) => {
  // sgMail.setApiKey(process.env.SEND_GRID_KEY);
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5826da26ecf3fb",
      pass: "b842f74a1375aa"
    }
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html:
      "<div style =" +
      "width:100%; height:100%;  " +
      "><h1 style=" +
      "font-weight:500>Hey, " +
      options.name +
      "<br>Welcome to Uttarakhand Organics </h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : " +
      options.code +
      " </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>Gaurav Negi(Owner)</strong></p>",
  };
  // await sgMail.send(message);
  transport.sendMail(message, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};
module.exports = verifyEmail;
