const express = require('express')
const fs = require('fs');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile('public/index.html', {root: __dirname})
})

app.get('/notes', (req, res) =>{
    res.sendFile('public/notes.html', {root: __dirname})
});

app.get('/api/notes', (req, res)=>{
    let data = fs.readFileSync('db/db.json');
    data = JSON.parse(data);
    res.send(data);
});

app.post('/api/notes', (req, res)=>{
    console.log(req.body);
    let data = fs.readFileSync('db/db.json');
    data = JSON.parse(data);
    res.send(data);
});


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
}) 