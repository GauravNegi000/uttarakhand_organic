// const sgMail = require("@sendgrid/mail");
var nodemailer = require('nodemailer');

const sendEmail = async (options) => {
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
    text: options.message,
    html: `<a href=${options.url}><button>Click Here</button></a>`,
  };
  // await sgMail.send(message);
  transport.sendMail(message, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};
module.exports = sendEmail;
