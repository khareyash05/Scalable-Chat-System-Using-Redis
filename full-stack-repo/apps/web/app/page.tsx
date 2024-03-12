'use client'

import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css"

const page = () => {
  const {sendMessage,messages} =useSocket()

  const [message,setMessage]=useState('')
  return ( 
    <div>      
      <div>
        <input onChange={e=>setMessage(e.target.value)} className={classes["chat-input"]} type="text" placeholder="Message...."/>
        <button onClick={e=>sendMessage(message)} className={classes["button"]}>Send</button>
      </div>
      {messages.map((e)=>(
        <li>{e}</li>
      ))}
    </div>
  );
}
 
export default page;