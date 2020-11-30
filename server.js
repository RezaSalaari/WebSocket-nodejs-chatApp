const path = require('path')
const express = require('express');
const { publicDecrypt } = require('crypto');
const PublicPath = path.join(__dirname + '/public')
const socketIO = require('socket.io')
const http = require('http')
const port = process.env.port || 3000 ; 
var app =express()
var server = http.createServer(app)
var io = socketIO(server)

var {generateMessage} = require('./utils/message')



    io.on('connection',(socket)=>{
    console.log('New User Connection ')

      socket.emit('newMessage',generateMessage('Admin','Wellcome To the Chat : ))'))
      socket.broadcast.emit('newMessage',generateMessage('Admin','New User Is Joined : )) '))

     socket.on('createMessage',(message)=>{
            console.log('CreateMessage',message)
                io.emit('newMessage',generateMessage(message.form,message.text))
     })   

     
socket.on('disconnect',()=>{
  console.log("User Was DisConnecTed ")
})

     
  })






app.use(express.static(PublicPath))
server.listen(port,()=>{
  console.log (`Server Is Runing on ${port}`)
})

