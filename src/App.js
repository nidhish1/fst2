import React from 'react';

import { Counter } from './features/Counter';
import './App.css';
import SideBar from './SideBar';
import Chat from './Chat'

function App() {
  return (
    <div className="app">

      <SideBar/>
      {/* chat section */}
      <Chat />
      
    </div>
  );
}

export default App;
