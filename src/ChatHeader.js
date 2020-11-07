import React from 'react'
import './ChatHeader.css'
import SearchIcon from '@material-ui/icons/Search';

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
              
            </div>
        </div>
    )
}

export default ChatHeader
