import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'

import AttachmentIcon from '@material-ui/icons/Attachment';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
function Chat() {
    return (
        <div className= "chat">
 
           <ChatHeader />
           <div className ="chat_message">
            <Message />
            <Message />
            <Message />
            <Message />
            </div>

            <div className = "chat_input">
                <AttachmentIcon fontSize="large"/>
                <form>
                    <input placeholder = {`Mesage from channels`} />
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
