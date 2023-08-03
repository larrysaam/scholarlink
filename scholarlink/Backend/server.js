const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

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
    console.log("..........already exist...........")
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [req.body.username,req.body.password ], (err, data) => {
        if(err) return res.json("error");
        if(data.length > 0){ 
            return res.json("success");
        }else{
            const sql = "INSERT INTO users(username,email,code,phone,password) VALUES(?,?,?,?,?)";
            db.query(sql, [req.body.username,req.body.email,req.body.code,req.body.phone,req.body.password], (err, resp) =>{
                if(err) return res.json("error");
                // send confirmation email
                console.log("..........insertion successful...........")
            })

        }
        
    })
})

app.listen(8081, ()=>{
    console.log("listerning")
})