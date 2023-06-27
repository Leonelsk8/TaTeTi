import React from 'react';
import style from './playerRandom.module.css';

const PlayerRandom = () => {
  return (
    <div className='gameOff flex justify-center items-center flex-col'>
      <h1>Comienza..</h1>
      <div className='relative'>
        <div className='absolute'>Player 1</div>
        <div className='absolute'>Player 2</div>
      </div>
    </div>
  )
}

export default PlayerRandom