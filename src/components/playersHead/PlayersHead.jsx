import style from './playerhead.module.css';
import char1 from '../../assets/characters/Char 1/icon.png';
import char2 from '../../assets/characters/Char 2/icon.png';
import char3 from '../../assets/characters/Char 3/icon.png';
import char4 from '../../assets/characters/Char 4/icon.png';
import char5 from '../../assets/characters/Char 5/icon.png';

const PlayersHead = (props) => {
  const {turn, randomEnd, names, characters} = props;

  return (
    <div className={`flex justify-between px-6 py-4 ${style.headAbsolute}`} style={{zIndex:-1}}>
      <div className={turn ===1 || turn===null? 'text-dark':'text-white'}>
        <h1 className='text-4xl'>{names.namePlayerOne}</h1>
        <div className='flex justify-start'>
          <div className={`mt-3 ${style.character}`}>
            {
              characters.player1 === 1 ? <img src={char1}></img> :
              characters.player1 === 2 ? <img src={char2}></img> :
              characters.player1 === 3 ? <img src={char3}></img> :
              characters.player1 === 4 ? <img src={char4}></img> :
              characters.player1 === 5 ? <img src={char5}></img> : ''
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
              characters.player2 === 1 ? <img src={char1}></img> :
              characters.player2 === 2 ? <img src={char2}></img> :
              characters.player2 === 3 ? <img src={char3}></img> :
              characters.player2 === 4 ? <img src={char4}></img> :
              characters.player2 === 5 ? <img src={char5}></img> : ''
            }
          </div>
        </div>
        {
          turn === 2 && randomEnd ? <p className='text-2xl'>Su turno</p> : ''
        }
      </div>
    </div>
  )
}

export default PlayersHead