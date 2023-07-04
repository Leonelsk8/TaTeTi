import { useContext } from 'react';
import MyContext from '../../MyContext';
import style from './playerRandom.module.css';

const PlayerRandom = () => {
  const {names, randomTurn, characters, charsIcons}= useContext(MyContext);

  return (
    <div className={`gameOff flex justify-center items-center text-white`}>
      <div className={`${style.cardRandom}`}>
        <h1>Comienza..</h1>
        <div className='relative flex justify-center'>
          <div className={`absolute ${randomTurn === 'animateRandomOne' ? style.first : style.second} flex flex-col items-center`}>
            <p>{names.namePlayerOne}</p>
            <div className={`${style.characters} mt-2`}>
              {
                characters.player1 === 0 ? <img src={charsIcons.charIconDefault}></img> :
                characters.player1 === 1 ? <img src={charsIcons.char1Icon}></img> :
                characters.player1 === 2 ? <img src={charsIcons.char2Icon}></img> :
                characters.player1 === 3 ? <img src={charsIcons.char3Icon}></img> :
                characters.player1 === 4 ? <img src={charsIcons.char4Icon}></img> :
                characters.player1 === 5 ? <img src={charsIcons.char5Icon}></img> : ''
              }
            </div>
          </div>
          <div className={`${randomTurn === 'animateRandomOne' ? style.second : style.first} flex flex-col items-center`}>
            <p>{names.namePlayerTwo}</p>
            <div className={`${style.characters} mt-2`}>
              {
                characters.player2 === 0 ? <img src={charsIcons.charIconDefault}></img> :
                characters.player2 === 1 ? <img src={charsIcons.char1Icon}></img> :
                characters.player2 === 2 ? <img src={charsIcons.char2Icon}></img> :
                characters.player2 === 3 ? <img src={charsIcons.char3Icon}></img> :
                characters.player2 === 4 ? <img src={charsIcons.char4Icon}></img> :
                characters.player2 === 5 ? <img src={charsIcons.char5Icon}></img> : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerRandom