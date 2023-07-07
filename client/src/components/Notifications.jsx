import React, { useContext } from 'react';
import { SocketContext } from '../Context';
import anwericon from '../image/answer.png'
const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className='calling--notification'>
          <h1>{call.name} is calling - </h1>
          <button onClick={answerCall}>
          <img className='image--icon' src={anwericon} alt="" /> Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
