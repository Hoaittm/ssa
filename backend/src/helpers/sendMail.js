
const nodemailer = require('nodemailer');

const sendMail = async ({
    email,
    subject,
   
    html
}) =>{

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
       
        service: 'Gmail',
        auth: {
            user: 'hoaittm.info2022@gmail.com',
            pass: 'nymwtzzggmpwszre'
        }
    });

    const message = {
        from: 'Cộng cà phê ',
        to: email,
        subject:subject,

        html:html
    }
    const result = await transporter.sendMail(message);
    return result;
}

module.exports = sendMail;