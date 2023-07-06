import {useState,useEffect, useContext} from 'react';
import MyContext from '../../MyContext';
import style from './timer.module.css';

const Timer = () => {
  const [time,setTime]= useState('20');
  const {randomEnd, player, setWin, newGame, win} = useContext(MyContext);
  const [round, setRound] = useState(1);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(0);

  useEffect(()=>{
    if(winner!==0){
      if(win===0){
        setWin(winner)
      }
    }
  },[winner]);

  useEffect(()=>{
    if(newGame){
      setRound(1);
      setWinner(0);
      setTurn(prevState =>(prevState===1 ? 2 : 1));
    }
  },[newGame]);
  
  useEffect(()=>{
    if(turn!==0){
      round===1? setTime(time===20?'20':20) :
      round===2? setTime(time===20?'20':20) :
      round===3? setTime(time===10?'10':10) :
      round===4? setTime(time===10?'10':10) : 
      round===5? setTime(time===5?'5':5) :
      round===6? setTime(time===5?'5':5) :
      round>=7? setTime(time===3?'3':3) : null
      setRound(prevState =>(prevState+1));
    }
  },[turn])
  
  useEffect(()=>{
    if(randomEnd){
      setTurn(player);
    }else if(!randomEnd){
      setRound(1);
      setTurn(0);
      setTime('20');
    }
  },[randomEnd]);

  useEffect(()=>{
    const updateCronometer=()=>{
      if(win===0){
        setTime(prevState => ( prevState - 1));
      }
    }

    if(time>0 && player === turn){
      const timer = setTimeout(()=>{
        if(win===0){
          updateCronometer();
        }
      },[1000]);

      return () => {
        clearTimeout(timer);
      };
    }else if(player!==turn && randomEnd){
      setTurn(player);
    }else if(time===0){
      player===1 ? setTimeout(()=>{setWinner(2)},650) : setTimeout(()=>{setWinner(1)},650)
    }
  },[time])

  return (
    <div className='flex justify-center mb-5'>
      <div className={`${style.timerBody}`}>
        <p className={`text-2xl ${time===0&&turn!==win? style.timerEnd : ''}`}>00:{time>9 ? time : `0${time}`}</p>
      </div>
    </div>
  )
}

export default Timer