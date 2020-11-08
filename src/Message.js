import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message() {
    return (
        <div className ="message">
            <Avatar />
            <div className = "message_info" >
                <h4>useNaame
                    <span className="message_timestamp">Time</span>
                </h4>
                <p>This is message</p>
            </div>
           
        </div>
    )
}

export default Message
