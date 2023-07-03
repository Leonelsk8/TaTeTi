import { useEffect, useState } from 'react';
import style from './modalwin.module.css';
import charDefault from '../../assets/person-fill.svg';
import char1Win1 from '../../assets/characters/Char 1/charWin1.gif';
import char1Win2 from '../../assets/characters/Char 1/charWin2.gif';
import char1Los1 from '../../assets/characters/Char 1/charLoser.gif';
import char2Win1 from '../../assets/characters/Char 2/charWin1.gif';
import char2Win2 from '../../assets/characters/Char 2/charWin2.gif';
import char2Win3 from '../../assets/characters/Char 2/charWin3.gif';
import char2Los1 from '../../assets/characters/Char 2/charLoser1.gif';
import char2Los2 from '../../assets/characters/Char 2/charLoser2.gif';
import char2Los3 from '../../assets/characters/Char 2/charLoser3.gif';
import char2Los4 from '../../assets/characters/Char 2/charLoser4.gif';
import char3Win1 from '../../assets/characters/Char 3/charWin1.gif';
import char3Win2 from '../../assets/characters/Char 3/charWin2.gif';
import char3Los1 from '../../assets/characters/Char 3/charLoser.gif';
import char4Win1 from '../../assets/characters/Char 4/charWin1.gif';
import char4Win2 from '../../assets/characters/Char 4/charWin2.gif';
import char4Win3 from '../../assets/characters/Char 4/charWin3.gif';
import char4Los1 from '../../assets/characters/Char 4/charLoser.gif';
import char5Win1 from '../../assets/characters/Char 5/charWin1.gif';
import char5Win2 from '../../assets/characters/Char 5/charWin2.gif';
import char5Los1 from '../../assets/characters/Char 5/charLoser.gif';
import char5Los2 from '../../assets/characters/Char 5/charLoser2.gif';
import char1Hov from '../../assets/characters/Char 1/characterHover.gif';
import char2Hov from '../../assets/characters/Char 2/characterHover.gif';
import char3Hov from '../../assets/characters/Char 3/characterHover.gif';
import char4Hov from '../../assets/characters/Char 4/characterHover.gif';
import char5Hov from '../../assets/characters/Char 5/characterHover.gif';

const ModalWin = (props) => {
  const {winner, names, characters, cont, setnewGame, setStart} = props;
  const char1Winner = [char1Win1, char1Win2];
  const char1Loser = [char1Los1];
  const char2Winner = [char2Win1,char2Win2,char2Win3];
  const char2Loser = [char2Los1,char2Los2,char2Los3,char2Los4];
  const char3Winner = [char3Win1,char3Win2];
  const char3Loser = [char3Los1];
  const char4Winner = [char4Win1,char4Win2,char4Win3];
  const char4Loser = [char4Los1];
  const char5Winner = [char5Win1,char5Win2];
  const char5Loser = [char5Los1,char5Los2];
  const [winnerChar , setWinnerChar] = useState(charDefault);
  const [loserChar , setLoserChar] = useState(charDefault);

  useEffect(()=>{
    if(winner===1){
      if(characters.player1===1){setWinnerChar(char1Winner[Math.floor(Math.random()*char1Winner.length)])}
      if(characters.player1===2){setWinnerChar(char2Winner[Math.floor(Math.random()*char2Winner.length)])}
      if(characters.player1===3){setWinnerChar(char3Winner[Math.floor(Math.random()*char3Winner.length)])}
      if(characters.player1===4){setWinnerChar(char4Winner[Math.floor(Math.random()*char4Winner.length)])}
      if(characters.player1===5){setWinnerChar(char5Winner[Math.floor(Math.random()*char5Winner.length)])}
    }else if(winner !== 3){
      if(characters.player2===1){setWinnerChar(char1Winner[Math.floor(Math.random()*char1Winner.length)])}
      if(characters.player2===2){setWinnerChar(char2Winner[Math.floor(Math.random()*char2Winner.length)])}
      if(characters.player2===3){setWinnerChar(char3Winner[Math.floor(Math.random()*char3Winner.length)])}
      if(characters.player2===4){setWinnerChar(char4Winner[Math.floor(Math.random()*char4Winner.length)])}
      if(characters.player2===5){setWinnerChar(char5Winner[Math.floor(Math.random()*char5Winner.length)])}
    }

    if(winner===1){
      if(characters.player2===1){setLoserChar(char1Loser[Math.floor(Math.random()*char1Loser.length)])}
      if(characters.player2===2){setLoserChar(char2Loser[Math.floor(Math.random()*char2Loser.length)])}
      if(characters.player2===3){setLoserChar(char3Loser[Math.floor(Math.random()*char3Loser.length)])}
      if(characters.player2===4){setLoserChar(char4Loser[Math.floor(Math.random()*char4Loser.length)])}
      if(characters.player2===5){setLoserChar(char5Loser[Math.floor(Math.random()*char5Loser.length)])}
    }else if(winner !== 3){
      if(characters.player1===1){setLoserChar(char1Loser[Math.floor(Math.random()*char1Loser.length)])}
      if(characters.player1===2){setLoserChar(char2Loser[Math.floor(Math.random()*char2Loser.length)])}
      if(characters.player1===3){setLoserChar(char3Loser[Math.floor(Math.random()*char3Loser.length)])}
      if(characters.player1===4){setLoserChar(char4Loser[Math.floor(Math.random()*char4Loser.length)])}
      if(characters.player1===5){setLoserChar(char5Loser[Math.floor(Math.random()*char5Loser.length)])}
    }

    if(winner===3){
      if(characters.player1===1){setWinnerChar(char1Hov)}
      if(characters.player1===2){setWinnerChar(char2Hov)}
      if(characters.player1===3){setWinnerChar(char3Hov)}
      if(characters.player1===4){setWinnerChar(char4Hov)}
      if(characters.player1===5){setWinnerChar(char5Hov)}
      if(characters.player2===1){setLoserChar(char1Hov)}
      if(characters.player2===2){setLoserChar(char2Hov)}
      if(characters.player2===3){setLoserChar(char3Hov)}
      if(characters.player2===4){setLoserChar(char4Hov)}
      if(characters.player2===5){setLoserChar(char5Hov)}
    }
  },[])

  return (
    <div className='grid grid-cols-12 gap-0 text-white'>
      <div className={`col-start-4 col-span-6 ${style.modalWin}`}>
        <p className='text-center text-2xl'>{winner===1? `Ganó ${names.namePlayerOne}` : winner===2? `Ganó ${names.namePlayerTwo}` : 'Empate'}</p>
        <div className={`${style.bodyCharacter} mb-4`}>
          <div className='flex flex-col'>
            <div className={style.character}>
              <img src={winnerChar} alt="" />
            </div>
            <p className='text-center mt-3 text-lg'>{winner===2 ? names.namePlayerTwo : names.namePlayerOne}{winner!==3 ? <i className="bi bi-trophy-fill ms-2"></i>: ''}</p>
          </div>
          <div className='flex'>
            <p className={`${style.contWin} p-4 text-2xl`}>{winner===2? cont.player2 : cont.player1}</p><p className='p-4 text-2xl'>{winner===2? cont.player1 : cont.player2}</p>
          </div>
          <div className='flex flex-col'>
            <div className={`${style.character}`}>
              <img src={loserChar}></img>
            </div>
            <p className='text-center mt-3 text-lg'>{winner===2 ? names.namePlayerOne : names.namePlayerTwo}</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='me-3' onClick={()=>setnewGame(true)}>Jugar otra ronda</button>
          <button className={``} onClick={()=>setStart(false)}>Reiniciar juego</button>
        </div>
      </div>
    </div>
  )
}

export default ModalWin