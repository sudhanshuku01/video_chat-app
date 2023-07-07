import React from 'react';
import './styles.css'
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
const App = () => {
  return (
    <div>
    <div className='container'>
     <div className='appname'><span>VIDEO CHAT</span><span>Instruction</span></div>
    </div>
    <VideoPlayer />
    <Sidebar/>
  </div>
  );
};

export default App;
