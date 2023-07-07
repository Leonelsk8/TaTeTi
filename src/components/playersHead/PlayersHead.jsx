import { useContext } from 'react';
import MyContext from '../../MyContext';
import style from './playerhead.module.css';

const PlayersHead = () => {
  const {player, randomEnd, names, characters, win, charsIcons} = useContext(MyContext);

  return (
    <div className={`flex justify-between px-6 py-4 ${style.headAbsolute}`} style={{zIndex:-1}}>
      <div className={player ===1 || player===null? 'text-dark':'text-white'}>
        <h1 className='text-2xl lg:text-4xl'>{names.namePlayerOne}</h1>
        <div className='flex justify-start'>
          <div className={`mt-3 ${style.character}`}>
            {
              characters.player1 === 0 ? <img src={charsIcons.charIconDefault}></img> :
              characters.player1 === 1 ? <img src={win===2? charsIcons.char1IconLoser : charsIcons.char1Icon}></img> :
              characters.player1 === 2 ? <img src={win===2? charsIcons.char2IconLoser : charsIcons.char2Icon}></img> :
              characters.player1 === 3 ? <img src={win===2? charsIcons.char3IconLoser : charsIcons.char3Icon}></img> :
              characters.player1 === 4 ? <img src={win===2? charsIcons.char4IconLoser : charsIcons.char4Icon}></img> :
              characters.player1 === 5 ? <img src={win===2? charsIcons.char5IconLoser : charsIcons.char5Icon}></img> : ''
            }
          </div>
        </div>

        {
          player === 1 && randomEnd ? <p className='text-lg lg:text-2xl'>Su turno</p> : ''
        }
      </div>
      <div className={player ===2 ? 'text-dark':'text-white'}>
        <h1 className='text-2xl lg:text-4xl'>{names.namePlayerTwo}</h1>
        <div className='flex justify-end'>
          <div className={`mt-3 ${style.character}`}>
            {
              characters.player2 === 0 ? <img src={charsIcons.charIconDefault}></img> : 
              characters.player2 === 1 ? <img src={win===1? charsIcons.char1IconLoser : charsIcons.char1Icon} className={style.charTwo}></img> :
              characters.player2 === 2 ? <img src={win===1? charsIcons.char2IconLoser : charsIcons.char2Icon} className={style.charTwo}></img> :
              characters.player2 === 3 ? <img src={win===1? charsIcons.char3IconLoser : charsIcons.char3Icon} className={style.charTwo}></img> :
              characters.player2 === 4 ? <img src={win===1? charsIcons.char4IconLoser : charsIcons.char4Icon} className={style.charTwo}></img> :
              characters.player2 === 5 ? <img src={win===1? charsIcons.char5IconLoser : charsIcons.char5Icon} className={style.charTwo}></img> : ''
            }
          </div>
        </div>
        {
          player === 2 && randomEnd ? <p className='text-lg lg:text-2xl text-end'>Su turno</p> : ''
        }
      </div>
    </div>
  )
}

export default PlayersHead