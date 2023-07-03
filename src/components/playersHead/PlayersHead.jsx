import style from './playerhead.module.css';
import charDefault from '../../assets/person-fill.svg';
import char1 from '../../assets/characters/Char 1/icon.png';
import char2 from '../../assets/characters/Char 2/icon.png';
import char3 from '../../assets/characters/Char 3/icon.png';
import char4 from '../../assets/characters/Char 4/icon.png';
import char5 from '../../assets/characters/Char 5/icon.png';
import char1Loser from '../../assets/characters/Char 1/iconLoser.png';
import char2Loser from '../../assets/characters/Char 2/iconLoser.png';
import char3Loser from '../../assets/characters/Char 3/iconLoser.png';
import char4Loser from '../../assets/characters/Char 4/iconLoser.png';
import char5Loser from '../../assets/characters/Char 5/iconLoser.png';

const PlayersHead = (props) => {
  const {turn, randomEnd, names, characters, winner} = props;

  return (
    <div className={`flex justify-between px-6 py-4 ${style.headAbsolute}`} style={{zIndex:-1}}>
      <div className={turn ===1 || turn===null? 'text-dark':'text-white'}>
        <h1 className='text-4xl'>{names.namePlayerOne}</h1>
        <div className='flex justify-start'>
          <div className={`mt-3 ${style.character}`}>
            {
              characters.player1 === 0 ? <img src={charDefault}></img> :
              characters.player1 === 1 ? <img src={winner===2? char1Loser : char1}></img> :
              characters.player1 === 2 ? <img src={winner===2? char2Loser : char2}></img> :
              characters.player1 === 3 ? <img src={winner===2? char3Loser : char3}></img> :
              characters.player1 === 4 ? <img src={winner===2? char4Loser : char4}></img> :
              characters.player1 === 5 ? <img src={winner===2? char5Loser : char5}></img> : ''
            }
          </div>
        </div>

        {
          turn === 1 && randomEnd ? <p className='text-2xl'>Su turno</p> : ''
        }
      </div>
      <div className={turn ===2 ? 'text-dark':'text-white'}>
        <h1 className='text-4xl'>{names.namePlayerTwo}</h1>
        <div className='flex justify-end'>
          <div className={`mt-3 ${style.character}`}>
            {
              characters.player2 === 0 ? <img src={charDefault}></img> : 
              characters.player2 === 1 ? <img src={winner===1? char1Loser : char1} className={style.charTwo}></img> :
              characters.player2 === 2 ? <img src={winner===1? char2Loser : char2} className={style.charTwo}></img> :
              characters.player2 === 3 ? <img src={winner===1? char3Loser : char3} className={style.charTwo}></img> :
              characters.player2 === 4 ? <img src={winner===1? char4Loser : char4} className={style.charTwo}></img> :
              characters.player2 === 5 ? <img src={winner===1? char5Loser : char5} className={style.charTwo}></img> : ''
            }
          </div>
        </div>
        {
          turn === 2 && randomEnd ? <p className='text-2xl text-end'>Su turno</p> : ''
        }
      </div>
    </div>
  )
}

export default PlayersHead