import React from 'react';
import style from './playerRandom.module.css';

const PlayerRandom = (props) => {
  const {names, turn}= props;

  return (
    <div className='gameOff flex justify-center items-center flex-col text-white'>
      <h1>Comienza..</h1>
      <div className='relative'>
        <div className={`absolute ${turn === 'animateRandomOne' ? style.first : style.second}`}>{names.namePlayerOne}</div>
        <div className={turn === 'animateRandomOne' ? style.second : style.first}>{names.namePlayerTwo}</div>
      </div>
    </div>
  )
}

export default PlayerRandom