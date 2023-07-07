import React from 'react'

const Instruction = () => {
  return (
    <div style={
        {
            width:'100vw',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    }>
    <div className='instruction'>
       <div>Follow These Instruction To Make A Call </div>
        1. Your Id is important to make a new call you can copy your Id by clicking on the button <br />
        2. You can now send this Id to the person to whom you want to Call <br />
        3. The Id you sent he/she will put in the IdToCall input and now simply will have to click on the call button <br />
        4.After wards you will recieve the notification of call and answer <br />
        5.You can click on Hang Up button to end the call br
        <div>Enjoy Our Video Chat Application !! Have A Great Day</div>
    </div>
      
    </div>
  )
}

export default Instruction
