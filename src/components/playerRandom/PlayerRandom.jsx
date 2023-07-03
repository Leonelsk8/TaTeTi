import style from './playerRandom.module.css';
import char1 from '../../assets/characters/Char 1/icon.png';
import char2 from '../../assets/characters/Char 2/icon.png';
import char3 from '../../assets/characters/Char 3/icon.png';
import char4 from '../../assets/characters/Char 4/icon.png';
import char5 from '../../assets/characters/Char 5/icon.png';
import charDefault from '../../assets/person-fill.svg';

const PlayerRandom = (props) => {
  const {names, turn, character}= props;

  return (
    <div className={`gameOff flex justify-center items-center text-white`}>
      <div className={`${style.cardRandom}`}>
        <h1>Comienza..</h1>
        <div className='relative flex justify-center'>
          <div className={`absolute ${turn === 'animateRandomOne' ? style.first : style.second} flex flex-col items-center`}>
            <p>{names.namePlayerOne}</p>
            <div className={`${style.character} mt-2`}>
              {
                character.player1 === 0 ? <img src={charDefault}></img> :
                character.player1 === 1 ? <img src={char1}></img> :
                character.player1 === 2 ? <img src={char2}></img> :
                character.player1 === 3 ? <img src={char3}></img> :
                character.player1 === 4 ? <img src={char4}></img> :
                character.player1 === 5 ? <img src={char5}></img> : ''
              }
            </div>
          </div>
          <div className={`${turn === 'animateRandomOne' ? style.second : style.first} flex flex-col items-center`}>
            <p>{names.namePlayerTwo}</p>
            <div className={`${style.character} mt-2`}>
              {
                character.player2 === 0 ? <img src={charDefault}></img> :
                character.player2 === 1 ? <img src={char1}></img> :
                character.player2 === 2 ? <img src={char2}></img> :
                character.player2 === 3 ? <img src={char3}></img> :
                character.player2 === 4 ? <img src={char4}></img> :
                character.player2 === 5 ? <img src={char5}></img> : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerRandom