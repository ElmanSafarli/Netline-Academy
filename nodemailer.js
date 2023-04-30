const nodemailer = require('nodemailer');

const transparter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'netline.academy@mail.ru',
        pass: 'kgBE6c9wt0nawsg8wVM6'
    }
});

const mailer = message => {
    transparter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email send: ', info)
    })
}

// const mailer2 = comment => {
//     transparter.sendMail(message, (err, info) => {
//         if(err) return console.log(err)
//         console.log('Email send: ', info)
//     })
// }

module.exports = mailer
// module.exports = mailer2