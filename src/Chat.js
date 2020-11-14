import React, { useState, useEffect } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'

import AttachmentIcon from '@material-ui/icons/Attachment';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import db from './firebase';
function Chat() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)

    const [messages,setMessages] = useState([])
    const [input , setInput] = useState('')

  

    return (
        <div className= "chat">
 
           <ChatHeader channelName = {channelName}/>
           <div className ="chat_message">
     

            <Message />
            </div>

            <div className = "chat_input">
                <AttachmentIcon fontSize="large"/>
                <form>
                    <input value = {input} placeholder = {`Mesage from channels`} onChange = {
                        (e) => {
                            setInput(e.target.value);
                            
                        }
                    } />
                    <button className = "chat_inputButton" type="submit"> Send Message</button>
                    
                </form>
                <div className="chat_iputIcons">
                    <EmojiEmotionsIcon />
                </div>

            </div>


           
            
        </div>
    )
}

export default Chat
