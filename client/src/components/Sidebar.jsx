import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Notifications from './Notifications';
import callend from '../image/callend.png'
import makecall from "../image/makecall.png"
import { SocketContext } from '../Context';
const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div className='sidebar'>
        <form className='account' onSubmit={(e)=>e.preventDefault()}>
              <div className='account--info'>
                <div>Account Info</div>
                <input placeholder='Enter Your Name' label='name' value={name} onChange={(e)=>setName(e.target.value)} />
                <CopyToClipboard text={me}>
                  <button>Copy Your Id</button>                 
                </CopyToClipboard>    
              </div> 
              <div className='account--info'>
              <div>Make a Call</div>
              <input placeholder='Id To Call' value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} />
              {callAccepted && !callEnded ?(
                  <button  onClick={leaveCall}>
                    <img className='image--icon' src={callend} alt="" />
                  Hang Up</button>
                  ):(
                    <button onClick={()=>callUser(idToCall)}>
                      <img className='image--icon' src={makecall} alt="" />
                      Call</button>
                    )
                  }
               </div>
               {<Notifications/>}
        </form>
      </div>
   );
};

export default Sidebar;
