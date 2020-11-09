import React, {useEffect, useState } from 'react'
import "./SideBar.css"
import "./SidebarChannel"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';

import {useSelector} from 'react-redux'
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import db from './firebase';

function SideBar() {
    const user = useSelector(selectUser)

    const [channels, setchannels] = new useState([])

    useEffect( ()=> {

    db.collection("channels").onSnapshot ( (snapshot) => 
    setchannels (
        snapshot.docs.map((doc) => ({
            channel:doc.data(),
        }))
        )
    )
    },[]);

    const handleAddChannel = ()=> {
        const newChannel = prompt("Enter New Channel")
        if (newChannel) {
            db.collection('channels').add({
                channelName:newChannel,
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3> Channels</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar_channels" >
                <div className ="sidebar_channels_header">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4> textChannels</h4>
                    </div>
                    <AddIcon className="sidebar_addChannel" onClick = {handleAddChannel}/>
                    

                    </div>
                    <div className="sidebar_channelList">

                        {channels.map ( (ch) => <SidebarChannel key = {ch.id}
                            id = {ch.channel.id} channel = {ch.channel.channelName}
                        />)}
                  

                    </div>

                    
                
                </div>

            <div className = "sidebar_voice">

            </div>

            <div className="sidebar_profile" >
                <Avatar src = {user.photo}/>
                <div className = "sidebar_name" > 
                {user.dispatchName}
                </div>
            </div>
                

                
                
        </div>
            
       

        
    )
}

export default SideBar
