const express=require("express")
const SocketIO = require("socket.io")
const app = express()
const http = require("http")
app.set("view engine","ejs")
const server = http.createServer(app) 
const io = SocketIO(server)

io.on("connection",(socket)=>
{
  console.log("connected")
  socket.on("disconnect",()=>
{
    console.log('disconnected')
})

socket.on("user-message",(msg)=>
{
   io.emit("message",msg)

})
})

app.get("/",(req,res)=>
{
    res.render("home")
})

server.listen(3000)