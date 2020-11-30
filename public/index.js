
var socket = io();
// socket.emit('createMessage',{
//     to : " Reza",
//     text : "PaYam Resan Is Work !  "
// })

socket.on('connect',()=>{
   
    console.log("Connected To Server ")
    socket.on('newMessage',(message)=>{
        console.log('New Email',message)
        var li = $('<li></li>')
        li.text(`${message.from}: ${message.text}`)
        $('#messages').append(li)
    })
})

socket.on('disconnect',()=>{
    console.log("Cannot Connect To The Server  ")
})

$("#message-form").on('submit',function(e){
    e.preventDefault();

    socket.emit('createMessage',{
        from : 'User',
        text: $('[name=message]').val()
        
    })
    

})