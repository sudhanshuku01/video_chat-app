import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <div className='videocont'>
      {stream && (
          <div className='videocont--info'>
            <div>{name || 'Name'}</div>
            <video  ref={myVideo} autoPlay  ></video>
          </div>
      )}
      { callAccepted && !callEnded &&(
          <div className='videocont--info'>
            <div>{call.name || 'Name'}</div>
            <video ref={userVideo} autoPlay></video>
          </div>
      )
      }
    </div>
  );
};

export default VideoPlayer;
