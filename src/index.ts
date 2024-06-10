import express,{ Express } from "express";

const app:Express = express()

const PORT = 5000

//route for general purpose
app.get('/',async(_,res)=>{
  res.sendStatus(200)
})

app.listen(PORT,()=>{
  console.log("server is running on ",PORT)
})