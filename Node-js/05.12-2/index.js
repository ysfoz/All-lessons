const express = require('express');

const path  = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.static(__dirname))

app.get('/',(req,res) => {
    res.render('index')
})

app.listen(5000)

// burasi eksik kaldi  bakar yazarsin