class ChatEngine{
    constructor(chatBoxId,userEmail){
        this.chatBox=$(`#${chatBoxId}`);
        this.userEmail=userEmail;

        this.socket=io.connect('http://localhost:8000');
        if(this.userEmail)
        {
            this.connectionHandler();

        }
    }

    connectionHandler(){
        let self=this;
        this.socket.on('connect',function(){
            console.log('connection established usgin socket');

            self.socket.email('join_room',{
                user_email:self.userEmail,
                chatroom:'backrev'
            });
            self.socket.on('user_joined',function(data){
                console.log(' a user joined',data);
            })
        });
        $('#send-message').click(function(){
            let msg=$('#chat-message-input').val();
            if(msg!=''){
                self.socket.emit('send_message',{
                    message:msg,
                    user_email:self.userEmail,
                    chatroom:'backrev'
                });
            }
        
        })
    
    }
    

}
