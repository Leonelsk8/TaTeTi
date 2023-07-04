import { useEffect, useState, useContext } from 'react';
import MyContext from '../../MyContext';
import style from './modalwin.module.css';

const ModalWin = () => {
  const {win, names, characters, cont, setnewGame, setStart, charsIcons, charsHover, charsReaction} = useContext(MyContext);
  const [winnerChar , setWinnerChar] = useState(charsIcons.charIconDefault);
  const [loserChar , setLoserChar] = useState(charsIcons.charIconDefault);

  useEffect(()=>{
    if(win===1){
      if(characters.player1===1){setWinnerChar(charsReaction.char1Winner[Math.floor(Math.random()*charsReaction.char1Winner.length)])}
      if(characters.player1===2){setWinnerChar(charsReaction.char2Winner[Math.floor(Math.random()*charsReaction.char2Winner.length)])}
      if(characters.player1===3){setWinnerChar(charsReaction.char3Winner[Math.floor(Math.random()*charsReaction.char3Winner.length)])}
      if(characters.player1===4){setWinnerChar(charsReaction.char4Winner[Math.floor(Math.random()*charsReaction.char4Winner.length)])}
      if(characters.player1===5){setWinnerChar(charsReaction.char5Winner[Math.floor(Math.random()*charsReaction.char5Winner.length)])}
    }else if(win !== 3){
      if(characters.player2===1){setWinnerChar(charsReaction.char1Winner[Math.floor(Math.random()*charsReaction.char1Winner.length)])}
      if(characters.player2===2){setWinnerChar(charsReaction.char2Winner[Math.floor(Math.random()*charsReaction.char2Winner.length)])}
      if(characters.player2===3){setWinnerChar(charsReaction.char3Winner[Math.floor(Math.random()*charsReaction.char3Winner.length)])}
      if(characters.player2===4){setWinnerChar(charsReaction.char4Winner[Math.floor(Math.random()*charsReaction.char4Winner.length)])}
      if(characters.player2===5){setWinnerChar(charsReaction.char5Winner[Math.floor(Math.random()*charsReaction.char5Winner.length)])}
    }

    if(win===1){
      if(characters.player2===1){setLoserChar(charsReaction.char1Loser[Math.floor(Math.random()*charsReaction.char1Loser.length)])}
      if(characters.player2===2){setLoserChar(charsReaction.char2Loser[Math.floor(Math.random()*charsReaction.char2Loser.length)])}
      if(characters.player2===3){setLoserChar(charsReaction.char3Loser[Math.floor(Math.random()*charsReaction.char3Loser.length)])}
      if(characters.player2===4){setLoserChar(charsReaction.char4Loser[Math.floor(Math.random()*charsReaction.char4Loser.length)])}
      if(characters.player2===5){setLoserChar(charsReaction.char5Loser[Math.floor(Math.random()*charsReaction.char5Loser.length)])}
    }else if(win !== 3){
      if(characters.player1===1){setLoserChar(charsReaction.char1Loser[Math.floor(Math.random()*charsReaction.char1Loser.length)])}
      if(characters.player1===2){setLoserChar(charsReaction.char2Loser[Math.floor(Math.random()*charsReaction.char2Loser.length)])}
      if(characters.player1===3){setLoserChar(charsReaction.char3Loser[Math.floor(Math.random()*charsReaction.char3Loser.length)])}
      if(characters.player1===4){setLoserChar(charsReaction.char4Loser[Math.floor(Math.random()*charsReaction.char4Loser.length)])}
      if(characters.player1===5){setLoserChar(charsReaction.char5Loser[Math.floor(Math.random()*charsReaction.char5Loser.length)])}
    }

    if(win===3){
      if(characters.player1===1){setWinnerChar(charsHover.char1Hover)}
      if(characters.player1===2){setWinnerChar(charsHover.char2Hover)}
      if(characters.player1===3){setWinnerChar(charsHover.char3Hover)}
      if(characters.player1===4){setWinnerChar(charsHover.char4Hover)}
      if(characters.player1===5){setWinnerChar(charsHover.char5Hover)}
      if(characters.player2===1){setLoserChar(charsHover.char1Hover)}
      if(characters.player2===2){setLoserChar(charsHover.char2Hover)}
      if(characters.player2===3){setLoserChar(charsHover.char3Hover)}
      if(characters.player2===4){setLoserChar(charsHover.char4Hover)}
      if(characters.player2===5){setLoserChar(charsHover.char5Hover)}
    }
  },[])

  return (
    <div className='grid grid-cols-12 gap-0 text-white'>
      <div className={`col-start-4 col-span-6 ${style.modalWin}`}>
        <p className='text-center text-2xl'>{win===1? `Ganó ${names.namePlayerOne}` : win===2? `Ganó ${names.namePlayerTwo}` : 'Empate'}</p>
        <div className={`${style.bodyCharacter} mb-4`}>
          <div className='flex flex-col'>
            <div className={style.character}>
              <img src={winnerChar} alt="" />
            </div>
            <p className='text-center mt-3 text-lg'>{win===2 ? names.namePlayerTwo : names.namePlayerOne}{win!==3 ? <i className="bi bi-trophy-fill ms-2"></i>: ''}</p>
          </div>
          <div className='flex'>
            <p className={`${style.contWin} p-4 text-2xl`}>{win===2? cont.player2 : cont.player1}</p><p className='p-4 text-2xl'>{win===2? cont.player1 : cont.player2}</p>
          </div>
          <div className='flex flex-col'>
            <div className={`${style.character}`}>
              <img src={loserChar}></img>
            </div>
            <p className='text-center mt-3 text-lg'>{win===2 ? names.namePlayerOne : names.namePlayerTwo}</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='me-3' onClick={()=>setnewGame(true)}>Jugar otra ronda</button>
          <button onClick={()=>setStart(false)}>Reiniciar juego</button>
        </div>
      </div>
    </div>
  )
}

export default ModalWin