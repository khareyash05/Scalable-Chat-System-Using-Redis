import { Server } from "socket.io";

class SocketService {
    private _io :Server
    constructor(){
        console.log('init socket server');
        
        this._io = new Server()
    }

    public initListener(){
        const io = this._io
        console.log('initialize socket listner');
        
        io.on('connect',socket=>{
            console.log('socket connected',socket.id)
            socket.on('event:message',async ({message}:{message:string}) => {
                console.log("New message received",message)
            })
        })
    }

    get io(){
        return this._io
    }
}

export default SocketService