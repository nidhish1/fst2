import React from 'react'
import "./SideBar.css"
import "./SidebarChannel"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';

import { Avatar } from '@material-ui/core';

function SideBar() {
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
                    <AddIcon className="sidebar_addChannel" />
                    

                    </div>
                    <div className="sidebar_channelList">
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />

                    </div>

                    
                
                </div>

            <div className = "sidebar_voice">

            </div>

            <div className="sidebar_profile" >
                <Avatar src = "https://picsum.photos/200/300"/>
                <div className = "sidebar_name" > 
                    @Nidhish
                </div>
            </div>
                

                
                
        </div>
            
       

        
    )
}

export default SideBar
