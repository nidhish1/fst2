import React from 'react'
import { useDispatch } from 'react-redux'
import "./SidebarChannel.css"
import {setChannelInfo} from './features/appSlice'

function SidebarChannel({id , channel}) {

    const dispatch = useDispatch()

    return (
        <div className="sidebarChannel" onClick = {() => {
            
            console.log(id)
            dispatch(setChannelInfo ({
                chennelId: id,
                channelName: channel,
            }))
            }}>
            <h4> 
                <span className="sidebarChannel_hash" 
                >#</span> {channel}
            </h4>
        </div>
    )
}

export default SidebarChannel
