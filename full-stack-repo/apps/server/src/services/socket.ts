import { Server } from "socket.io";
import Redis from 'ioredis'

require('dotenv').config()

const pub = new Redis({
    host:process.env.HOST,
    port:Number(process.env.PORT),
    username:process.env.USERNAME,
    password: process.env.PASSWORD
});
const sub = new Redis({
    host:process.env.HOST,
    port:Number(process.env.PORT),
    username:process.env.USERNAME,
    password: process.env.PASSWORD
});

class SocketService {
    private _io : Server
    constructor(){
        this._io = new Server({
            cors:{
                allowedHeaders:['*'],
                origin:'*'
            }
        })
        sub.subscribe('MESSAGES')
    }

    public initListeners(){
        const io = this._io;
        io.on('connect',(socket)=>{
            socket.on('event:message', async({message}:{message:string})=>{
                console.log(message);  
                // sent to publisher model
                await pub.publish('MESSAGES',JSON.stringify(message));              
            })
        })  
        
        sub.on('message',(channel,message)=>{
            if(channel === 'MESSAGES'){
                io.emit('message',message);
            }
        })
    }

    get io(){
        return this._io
    }
}

export default SocketService