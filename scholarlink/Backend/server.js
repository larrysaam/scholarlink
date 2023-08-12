const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scholarlink"
})

app.post('/signup', (req, res) => {
    //very if record already exist in db
    
    console.log("..........already exist...........")
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [req.body.username,req.body.password ], (err, data) => {
        if(err) return res.json("error");
        if(data.length > 0){ 
            return res.json("already exist");
        }else{
            //insert new record into db
            const sql = "INSERT INTO users(username,email,code,phone,password) VALUES(?,?,?,?,?)";
            db.query(sql, [req.body.username,req.body.email,req.body.code,req.body.phone,req.body.password], (err, data) =>{
                if(err){
                    return res.json("error");
                }
                else{
                    
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'nyaah73@gmail.com',
                            pass: 'eeszajaetmninrgk'
                        }
                    });
                
                    var mailoptions = {
                        from: 'nyaah73@gmail.com',
                        to: req.body.email,
                        subject: 'signup',
                        text: `signup successfully`
                    };
                
                    transporter.sendMail(mailoptions, function(err,info){
                        if(err){
                            console.log(err);
                        }else{
                            console.log('Email sent : ' + info.response);
                            return res.json("inserted");
                        }
                    });
                }
                
            })

        }
        
    })
})



app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ? ";
 
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
       if(err){
        return res.json("Error");
       } 
       if(data.length > 0){
        return res.json("Success");
       } else {
        return res.json("Failed");

       }
    })
})


app.listen(8081, ()=>{
    console.log("listerning")
})