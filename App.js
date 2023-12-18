const express = require('express');
const connectDB=require('./Database/connect')
const app = express();
const tasks=require('./routes/tasks')
const http = require('http').createServer(app).listen(3000);
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

//middleware
app.use(express.json())


//import router
app.use('/api/v1/tasks',tasks)



//routes
app.get('/hello', (req, res) => {
    res.send('My ToDo App')
})
const port = 5000;
const start= async()=>{
    try {
       await connectDB() 
       
app.listen(port, console.log(`Port is ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()




