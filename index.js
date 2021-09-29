const express = require('express');
const cors = require('cors');
const books =  require('./config.js');
const { onSnapshot } = require("firebase/firestore");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    res.send('Hello world!!')
});

app.get('/api',async(req,res)=>{
    var list = [];
    let prom = await new Promise((resolve,reject)=>{
        onSnapshot(books, (doc) => {
            doc.docs.forEach(function(elm) {
                list.push(elm.data());
            });
            resolve(list);
        });
    })
    res.send(prom);
});


app.listen(port,()=>{
    console.log('server run @ 3000');
})
