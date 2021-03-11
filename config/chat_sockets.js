// module.exports.chatSockets=function(socketServer){
//     let io=require('socket.io')(socketServer);
//     io.sockets.on('connection',function(socket){
//         console.log('new connection received',socket.id);



//         socket.on('disconnect',function(){
//             console.log('socket disconnted');
//         });

//         socket.on('join_room',function(data){
//             console.log('joining requrest rec.',data);
//             socket.join(data.chatroom);
//             io.in(data.chatroom).emit('user_joined',data);
//         })

//         socket.on('send_message',function(data){
//             io.in(data.chatroom).emit('receive_message',data);
//         });
    
//     });

// }

module.exports.chatSockets = function(socketServer){
    let io = require('socket.io')(socketServer);

    io.sockets.on('connection', function(socket){
        console.log('new connection received', socket.id);

        socket.on('disconnect', function(){
            console.log('socket disconnected!');
        });

        
        socket.on('join_room', function(data){
            console.log('joining request rec.', data);

            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined', data);
        });

        // CHANGE :: detect send_message and broadcast to everyone in the room
        socket.on('send_message', function(data){
            io.in(data.chatroom).emit('receive_message', data);
        });

    });

}