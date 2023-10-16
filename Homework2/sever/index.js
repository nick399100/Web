const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Password123*',
    database: 'studentsystem',
});

app.post('/create', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const gender = req.body.gender

    db.query(
        'INSERT INTO students(name,age,gender)VALUES(?,?,?)',
        [name, age, gender],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )



});


app.get('/students', (req, res) => {
    db.query("SELECT * FROM students",(err, result) => {
        if(err) {
         console.log(err);
        } else {
          res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Yey, your sever is runnning on port 3001");
});