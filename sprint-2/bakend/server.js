

const express =require("express")
const mysql=require("mysql")
const cors = require("cors");
const bodyParser = require("body-parser");


const app =express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: 'student',
})

app.get('/register', (req, res) => {

    // res.send("Hi")
   const sql= "INSERT INTO user_login (`username`, `Email`, `password` ) VALUES ('john2', 'john2@gmail.com',  'react2.js')";
   db.query(sql, (error, result) => {
       console.log("error", error);
       console.log("result", result)
       res.send('result')  
   })

   
});
app.post("/register", (req, res) => {
    const sentUserName = req.body.UserName
    const sentEmail = req.body.Email
    const sentPassword = req.body.Password
    // const {sentUserName, sentEmail, sentPassword} = req.body

    const sql="INSERT INTO user_login (username, email, password) VALUES (?, ?, ?)"

    const Values=[sentUserName, sentEmail, sentPassword]

    db.query(sql, Values, (error, result) => {
        if(error){
            res.send(error)
        }
        else{
            console.log('User inserted successfully!')
            res.send({massage:result})
            console.log(result)
        }
    })

    // res.send("sing up")
})

app.post("/login", (req, res) => {
     const sentEmail = req.body.Email
    const sentPassword = req.body.Password
    // const {sentUserName, sentEmail, sentPassword} = req.body

    const sql="SELECT * FROM  user_login WHERE Email = ? && Password = ?"

    const Values=[ sentEmail, sentPassword]

    db.query(sql, Values, (error, result) => {
        if(error){
            res.send(error)
        }
        if(result.length > 0){
            res.send(result)
        }
        else{
            console.log('User inserted error!')
            res.send({massage:"redentials don't match"})
        }
    })

    // res.send("sing up")
})

app.get('/', (req, res) => {

     res.send("Hi")
    // const sql= "INSERT INTO user_table (`Name`, `Email`, `Contact`, `Group` ) VALUES ('john2', 'john2@gmail.com', 2343546576, 'react2.js')";
    // db.query(sql, (error, result) => {
    //     console.log("error", error);
    //     console.log("result", result)
    //     res.send("Hi")  
    // })

    
});

app.get("/api/get", (req, res) => {
    const sqldata="SELECT * FROM user_table";
    db.query(sqldata, (error, result) => {
        res.send(result)
    })
})

app.post("/api/post", (req, res) => {
    const {name, email, contact, group}=req.body;
    const sql= "INSERT INTO user_table (`Name`, `Email`, `Contact`, `Group` ) VALUES (?, ?, ?, ? )";
    db.query(sql, [name, email, contact, group], (error, result) => {
        if(error){
            console.log(error)
        }
    })
})

app.get("/api/get/:id", (req, res) => {
    const {id}=req.params;
    const sqlget= "SELECT * FROM user_table WHERE id = ? ";
    db.query(sqlget, id, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
})
app.put("/api/update/:id", (req, res) => {
    const {id}=req.params;
    const {name, email, contact, group}=req.body;
    const sqlupdate= "UPDATE user_table SET Name = ?, Email = ?, Contact = ?, Group = ? WHERE id = ?";
    db.query(sqlupdate, [name, email, contact, group, id], (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
})


app.delete("/api/remove/:id", (req, res) => {
    const {id}=req.params;
    const sqlRemove= "DELETE FROM user_table WHERE id = ? ";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error)
        }
    })
})

// app.post("/students", (req, res) => {
//     const sql= "INSERT INTO student (`Name`, `Email`, `Contact`, `Group` ) VALUES (? )";
//     console.log(req.body)
//     const value=[
//         req.body.name,
//         req.body.email,
//         req.body.contact,
//         req.body.group
//     ]
//     db.query(sql, [value], (err, result) => {
//         if(err) return res.json(err);
//         return res.json(result)
//     })
// })

// app.get('/read/:id', (req, res) => {
//     const sql= "SELECT * FROM student WHERE ID = ?";
//     const id=req.params.id;
//     db.query(sql,[id], (err, result) => {
//         if(err) return res.json({Message: err});
//         return res.json("ok")
//     })
// })

app.listen(8081, () => {
    console.log("Listening");
})