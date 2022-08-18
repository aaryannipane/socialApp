const express = require("express");
const format = require('date-format');

const app = express();
const PORT = process.env.PORT || 4000;

// home route
app.get('/', (req, res)=>{
    // sending normal text with status code
    res.status(200).send("<h1>Hello from Aryan</h1>");
})

// v1 is used for versioning as per express version if new version come up we will make another route with v2
app.get('/api/v1/instagram', (req, res)=>{
    const instaSocial = {
        username: "nipanearyan",
        followers: 301,
        follows: 200,
        date: format.asString("dd/MM/yyyy hh:mm:ss", new Date()),
    }
    // format date using date-format library
    // sending json data to user 
    res.status(200).json({instaSocial});
})
app.get('/api/v1/facebook', (req, res)=>{
    const instaSocial = {
        username: "nipanearyan",
        followers: 1000,
        follows: 10,
        date: format.asString("dd/MM/yyyy hh:mm:ss", new Date()),
    }
    // sending json data to user 
    res.status(200).json({instaSocial});
})
app.get('/api/v1/linkedin', (req, res)=>{
    const instaSocial = {
        username: "nipanearyan",
        followers: 20,
        follows: 50,
        date: format.asString("dd/MM/yyyy hh:mm:ss", new Date()),
    }
    // sending json data to user 
    res.status(200).json({instaSocial});
})


// put this route at end or the other routes will broke
app.get('/api/v1/:something', (req, res)=>{
    console.log(req.params.something);
    res.status(200).json({params: req.params.something});
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})