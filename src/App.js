import React from 'react';

import { Counter } from './features/Counter';
import './App.css';
import SideBar from './SideBar';
import Chat from './Chat'
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice'
import Login from './Login'

function App() {

  const user = useSelector(selectUser)
  return (
    <div className="app">
      {user ? (<><SideBar/>
      <Chat /> </>):(
      <Login />
        
        )}
      
      
    </div>
  );
}

export default App;
