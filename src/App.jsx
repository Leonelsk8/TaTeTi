import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import Table from './components/table/Table';
import PlayersHead from './components/playersHead/playersHead';
import PlayerRandom from './components/playerRandom/PlayerRandom';

function App() {
  const [start, setStart] = useState(false);
  const [player, setPlayer] = useState(null);
  const [newGame, setnewGame] = useState(false);
  const [randomTurn, setRandomTurn] = useState('');
  const [randomEnd, setRandomEnd] = useState(false);
  
  useEffect(()=>{
    if(player===null && start){
      let random = Math.floor((Math.random()*2) + 1);
      setPlayer(random);
      random===1 ? setRandomTurn('animateRandomOne') : setRandomTurn('animateRandomTwo');
      setTimeout(()=>{
        setRandomEnd(true);
      },[3500])
    }else if(player !== null){
      player ===1 ? setPlayer(2) : setPlayer(1);
    }
    setnewGame(false);
  },[newGame, start]);

  return (
    <>
      <section className='BodySection'>
        <div className={`bodyAbsolute ${player===2 && randomTurn===''?'bgplayertwo':'bgplayerone'} ${randomTurn}`}></div>
        <PlayersHead turn={player} randomEnd={randomEnd}/>
        <div className='flex justify-center relative'>
          <Table style={{zIndex: 2}} setPlayer={setPlayer} player={player} setRandomTurn={setRandomTurn}/>
          {
            !start ? 
            <div className='gameOff flex justify-center items-center'><button className='buttonStart text-white' onClick={()=>setStart(true)}>Iniciar Juego</button></div>:
            <PlayerRandom/>
          }
        </div>
      </section>
    </>
  )
}

export default App
