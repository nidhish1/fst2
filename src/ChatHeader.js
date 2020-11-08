import React from 'react'
import './ChatHeader.css'
import SearchIcon from '@material-ui/icons/Search';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {auth} from './firebase'

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className ="chatHeader_left">
            <h3>
                <span className = "chatHeader_hash">#</span>
                Channel Name
            </h3>
            </div>

            <div className ="chatHeader_right">
              <div className="chatHeader_search">
                  <input placeholder="search" type="text"/>
                  <SearchIcon />
              </div>

              <div className="chatHeader_logout" fontSize = "large">
              <ExitToAppIcon onClick = { ()=> {
                  auth.signOut()
                  window.location.reload(false);
              }}/>

              </div>
              
            </div>
        </div>
    )
}

export default ChatHeader
