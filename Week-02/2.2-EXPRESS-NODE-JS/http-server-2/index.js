const exprees = require("express");

const app = exprees();
const port = 3000 ;


app.get("/",(req,res)=>{
    // res.send("Hello World Express Web Framwork");
   res.send("<h1> <b>Hi There</b> </h1>"); 
})


app.listen(port);