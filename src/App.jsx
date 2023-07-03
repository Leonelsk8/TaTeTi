import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import Table from './components/table/Table';
import PlayersHead from './components/playersHead/playersHead';
import PlayerRandom from './components/playerRandom/PlayerRandom';
import PanelPlayer from './components/panelPlayer/PanelPlayer';
import ModalEditPlayer from './components/modalEditPlayer/ModalEditPlayer';
import ModalWin from './components/modalWin/ModalWin';

function App() {
  const [start, setStart] = useState(false);
  const [player, setPlayer] = useState(null);
  const [newGame, setnewGame] = useState(false);
  const [randomTurn, setRandomTurn] = useState('');
  const [randomEnd, setRandomEnd] = useState(false);
  const [namePlayerOne, setNamePlayerOne] = useState('Jugador 1');
  const [namePlayerTwo, setNamePlayerTwo] = useState('Jugador 2');
  const [modalOn, setModal] = useState({on:false,player:null});
  const [characterOne, setCharacterOne] = useState(0);
  const [characterTwo, setCharacterTwo] = useState(0);
  const [win, setWin] = useState(0);
  const [cont, setCont] = useState({player1:0,player2:0});
  
  useEffect(()=>{
    if(player===null && start){
      let random = Math.floor((Math.random()*2) + 1);
      setPlayer(random);
      random===1 ? setRandomTurn('animateRandomOne') : setRandomTurn('animateRandomTwo');
      setTimeout(()=>{
        setRandomEnd(true);
      },[5500])
    }
    if(!start){
      setPlayer(null);
      setCont({player1:0,player2:0});
      setRandomEnd(false);
      setRandomTurn('');
      setWin(0);
    }
  },[start]);

  useEffect(()=>{
    if(win===1){
      setCont(prevState => ({
        ...prevState,
        player1: prevState.player1 + 1
      }));
    }else if(win===2){
      setCont(prevState => ({
        ...prevState,
        player2: prevState.player2 + 1
      }));
    }
  },[win]);

  return (
    <>
      <section className='BodySection py-20'>
        <div className={`bodyAbsolute ${player===2 && randomTurn===''?'bgplayertwo':'bgplayerone'} ${randomTurn}`}></div>
        <PlayersHead turn={player} randomEnd={randomEnd} names={{namePlayerOne, namePlayerTwo}} characters={{player1:characterOne, player2:characterTwo}} winner={win}/>
        <PanelPlayer player={player} setModal={setModal}/>
        <div className='flex justify-center relative'>
          <Table style={{zIndex: 2}} setPlayer={setPlayer} player={player} setRandomTurn={setRandomTurn} setWin={setWin} newGame={newGame} start={start} winner={win} setnewGame={setnewGame}/>
          {
            !start ? 
            <div className='gameOff flex justify-center items-center'><button className='buttonStart text-white' onClick={()=>setStart(true)}>Iniciar Juego</button></div>:
            !randomEnd ? <PlayerRandom names={{namePlayerOne, namePlayerTwo}} turn={randomTurn} character={{player1: characterOne, player2: characterTwo}}/> : ''
          }
        </div>
        {
          modalOn.on?
          <div className='absoluteTopEdit'>
            <ModalEditPlayer playerEdit={modalOn.player} setModal={setModal} setNamePlayer={{setNamePlayerOne,setNamePlayerTwo,name1: namePlayerOne,name2: namePlayerTwo}} characters={{player1: characterOne, player2: characterTwo, setCharOne: setCharacterOne, setCharTwo: setCharacterTwo}}/>
          </div> :
          ''
        }
        {
          win >= 1 && win<=3 ? 
          <div className='absoluteTopWin'>
            <ModalWin winner={win} names={{namePlayerOne, namePlayerTwo}} characters={{player1:characterOne, player2:characterTwo}} cont={cont} setnewGame={setnewGame} setStart={setStart}/>
          </div> : ''
        }
      </section>
    </>
  )
}

export default App
