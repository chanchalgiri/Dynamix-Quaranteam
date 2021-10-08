const express = require("express");
const path = require("path");
const fs = require('fs')
const app = express();
const port = 80;

app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded());

app.set('view engine', 'pug')
app.set('C:\dynamix courses animation\Dynamix-Quaranteam-1\views', path.join(__dirname), 'views')

app.get('/', (req,res)=>{
  const con = "This is the best content on the interest so far so use it wisely";
  const params = { 'title' : "PubG is the best game", "Content" : con}
    res.status(200).render('contact.pug', params);
})

app.post('/', (req,res)=>{
    name = req.body.name
    collegeName = req.body.collegeName
    mail = req.body.mail
    contactNo = req.body.contactNo
    comment = req.body.comment
    
    let outputToWrite = `
    The name of the Student : ${name},
    Collge Name : ${collegeName},
    E-mail id : ${mail},
    Contact no : ${contactNo},
    queries/issues/comments : ${comment}
    `;
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('contact.pug', params);
})

app.listen(port, ()=>{
  console.log(`The application started successfully on port ${port} `)
});