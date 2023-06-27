import React from 'react'

const PlayersHead = (props) => {
  const {turn, randomEnd} = props;

  return (
    <div className='flex justify-between px-6 py-4 mb-6'>
      <div className={turn ===1 || turn===null? 'text-dark':'text-white'}>
        <h1 className='text-4xl'>Jugador 1</h1>
        {
          turn === 1 && randomEnd ? <p className='text-2xl'>Su turno</p> : ''
        }
      </div>
      <div className={turn ===2 ? 'text-dark':'text-white'}>
        <h1 className='text-4xl'>Jugador 2</h1>
        {
          turn === 2 && randomEnd ? <p className='text-2xl'>Su turno</p> : ''
        }
      </div>
    </div>
  )
}

export default PlayersHead