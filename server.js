require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const noteRouter = require('./routes/noteRouter')
const todoRouter = require('./routes/api');
const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.set("view engine","ejs");
app.use(express.static( "views" ) );
app.get("/", (req,res) =>{
    res.render("Home");
})
// Routes
app.use('/users', userRouter)
app.use('/api/notes', noteRouter)
app.use('/api/todo', todoRouter);

//MongoDb connection
mongoose.connect('mongodb://127.0.0.1:27017/app', { useNewUrlParser : true})
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB databse connected");
})


// Below MongoDB and  Above Listen Sever
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });
}




// Listen Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})