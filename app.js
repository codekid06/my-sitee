const express = require('express');
const app= express();
const port= process.env.PORT ||8000;

app.use(express.static('public'));
app.use('/css',express.static(__dirname + "public/css"));
app.use('/js',express.static(__dirname+ "public/js"));

app.get('',(req,res)=>{
    res.sendFile(__dirname+'/view/index.html')
});

app.listen(port,()=>{
    console.log(`RUNNING ON ${port}`);
})