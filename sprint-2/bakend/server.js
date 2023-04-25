

const express =require("express")
const mysql=require("mysql")
const cors = require("cors")

const app =express();
app.use(cors());
app.use(express.json())
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: 'crud',
})

app.get('/', (req, res) => {
    const sql= "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: err});
        return res.json("ok")
    })
})

app.post("/student", (req, res) => {
    const sql= "INSERT INTO student (`Name`, `Email`, `Contact`, `Group` ) VALUES (?)";
    console.log(req.body)
    const value=[
        req.body.name,
        req.body.email,
        req.body.contact,
        req.body.group
    ]
    db.query(sql, [value], (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get('/read/:id', (req, res) => {
    const sql= "SELECT * FROM student WHERE ID = ?";
    const id=req.params.id;
    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Message: err});
        return res.json("ok")
    })
})

app.listen(8081, () => {
    console.log("Listening");
})