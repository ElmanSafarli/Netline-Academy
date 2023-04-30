const express = require("express");
const bodyParser = require('body-parser');
const { request, response } = require("express");
const mailer = require('./nodemailer')


 
const app = express();

const PORT = 3001;
let user = undefined;
let qeydiyyat = undefined;
let commentMessage = undefined;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res)=>{
  if(!req.body.emailLogin || !req.body.passLogin) return res.sendStatus(400).send("Not foun MMM")
  console.log(req.body)
  user = req.body
  res.redirect('/')
})

app.get("/", (req, res)=>{
  if(typeof user !== "object") return res.sendFile(__dirname + "/index.html");
  res.send("Qeydiyyat ugurla basa catdi!")
  user = undefined 
})

// app.get("*", (req, res)=>{
//   res.sendFile(__dirname + "/BackSite/ErrorPage/404.html")
//   // res.redirect("/")
// })

app.post("/registration", (req, res)=>{
  const date = new Date();
  if(!req.body.musteriAdı || !req.body.musteriNomre) return res.sendStatus(400)
  const message = {
    from: 'Mailer Test <netline.academy@mail.ru>',
    to: "netline.academy@mail.ru",
    subject: "Daha bir kliyent qeri donusuvuzu gozleyir",
    html: `
        <div style="margin: auto; text-align: center; width: 400px; height: 500px; border-radius: 18px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); padding-top:25px;">
          <div style="display: flex; align-items: center; justify-content: space-around; border: 2px solid #003333; border-radius: 20px; height: 65px; font-weight: 500;font-size: 14px;line-height: 17px;color: #000000; margin: auto; width: 226px;">
            <img style="width:50px; border: 2px solid #003333; border-radius: 28px;" src="cid:imglogo@netline.az" alt=""/>
            <p style="font-weight: 400;">Netline Academy</p>
          </div>
          <h1 style="font-weight: 600;font-size: 16px;line-height: 20px;color: #003333;margin-top: 18px;">Muştəri haqqında məlumat</h1>
          <div style="margin-top: 66px;">
            <div>
              <h4 style="font-weight: 600;font-size: 14px;line-height: 17px;color: #000000;">Ad Soyad</h4>
              <p style="font-weight: 400;font-size: 14px;line-height: 17px;color: #000000; font-style: italic;">${req.body.musteriAdı} ${req.body.musteriSoyad}</p>
            </div>
            <div>
              <h4 style="font-weight: 600;font-size: 14px;line-height: 17px;color: #000000;">Seçdiyi təlimin adı</h4>
              <p style="font-weight: 400;font-size: 14px;line-height: 17px;color: #000000; font-style: italic;">${req.body.coursename}</p>
            </div>
            <div>
              <h4 style="font-weight: 600;font-size: 14px;line-height: 17px;color: #000000;">Müştərinin nömrəsi</h4>
              <p style="font-weight: 400;font-size: 14px;line-height: 17px;color: #000000; font-style: italic;">${req.body.musteriNomre}</p>
            </div>
          </div>
          <div>
            <h4 style="width: 300px; margin: auto;">${date}</h4>
          </div>
        </div>
    `,
    attachments: [{
      filename: 'webLogo.jpg',
      path: __dirname + '/public/assets/webLogo.jpg',
      cid: 'imglogo@netline.az' //same cid value as in the html img src
    }]
  }
  mailer(message)
  console.log(date)
  qeydiyyat = req.body
  res.redirect('/registration')
})

app.get("/registration", (req, res)=>{
  if(typeof qeydiyyat !== "object") return res.sendFile(__dirname + "/registration.html");
  res.sendFile(__dirname + "/thanks.html")
  qeydiyyat = undefined
})

app.post("/Help-Desk", (req, res)=>{
  if(!req.body.comentEmailUser || !req.body.commentMessage) return res.sendStatus(400)
  const comment = {
    from: 'Mailer Test <netline.academy@mail.ru>',
    to: "netline.academy@mail.ru",
    subject: "Daha bir kliyent reaksiya yazdi",
    text: `
    Ad: ${req.body.comentNameUser}
    Email: ${req.body.comentEmailUser}
    Metin: ${req.body.commentMessage}
    `
  }
  mailer(comment)
  commentMessage = req.body
})

app.get("/Help-Desk", (req, res)=>{
  if(typeof commentMessage !== "object") return res.sendFile(__dirname + "/BackSite/Helpdesk/helpdesk.html");
  // res.sendFile(__dirname + "/BackSite/Helpdesk/helpdesk.html")
  commentMessage = undefined
})

app.get("/teachers", (req, res)=>{
  res.sendFile(__dirname + "/BackSite/Teachers/teachers.html")
})

app.listen(PORT, ()=>{
    console.log(`Server listening at https://localhost:${PORT}`);
})
