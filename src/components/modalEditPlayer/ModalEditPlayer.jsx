import style from './modal.module.css';
import {useState} from 'react';
import char1 from '../../assets/characters/Char 1/icon.png';
import char2 from '../../assets/characters/Char 2/icon.png';
import char3 from '../../assets/characters/Char 3/icon.png';
import char4 from '../../assets/characters/Char 4/icon.png';
import char5 from '../../assets/characters/Char 5/icon.png';
import charDefault from '../../assets/person-fill.svg';
import char1Hover from '../../assets/characters/Char 1/characterHover.gif';
import char2Hover from '../../assets/characters/Char 2/characterHover.gif';
import char3Hover from '../../assets/characters/Char 3/characterHover.gif';
import char4Hover from '../../assets/characters/Char 4/characterHover.gif';
import char5Hover from '../../assets/characters/Char 5/characterHover.gif';

const ModalEditPlayer = (props) => {
  const {setModal, playerEdit, setNamePlayer, characters} = props;
  const [name, setName] = useState('');
  const [click, setClick] = useState(playerEdit===1?characters.player1:characters.player2);
  const [selectChar, setSelectChar] = useState(null);


  const handleSubmit = (e)=>{
    e.preventDefault();
    let valueName;
    if(name === '' || name.length > 15){
      valueName = playerEdit===1? setNamePlayer.name1 : setNamePlayer.name2;
    }else{
      valueName = name;
    }

    if(playerEdit === 1){
      setNamePlayer.setNamePlayerOne(valueName);
      selectChar !== null ? characters.setCharOne(selectChar) : ''
    } else if(playerEdit === 2){
      setNamePlayer.setNamePlayerTwo(valueName);
      selectChar !== null ? characters.setCharTwo(selectChar) : ''
    } 
  }

  const handleChange = (e)=>{ 
    setName(e.target.value);
  }

  return (
    <div className='grid grid-cols-12 gap-0 text-white'>
      <div className={`col-start-4 col-span-6 ${style.modalEdit}`}>
        <div className='flex justify-between'>
          <p className='text-3xl py-2'>{playerEdit===1?'Jugador 1':'Jugador 2'}</p>
          <button className={`text-2xl px-4 py-2 ${style.buttExit}`} onClick={()=>{setModal({on:false,player:null})}}>X</button>
        </div>
        <div className='mt-3'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-center mb-4'>
              <p className='text-xl mb-3 text-center'>Editar Nombre</p>
              <input type='text' id='InputName' placeholder='Ingresar nombre' maxLength={15} className={`ms-2 ${style.inputname}`} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-xl mb-3 text-center'>Elegir personaje</p>
              <div className='grid grid-cols-12 gap-1'>
                <button 
                  className={`col-start-4 col-span-2 ${click===0 ? style.activeChar : ''}`} onClick={()=>{setClick(0); setSelectChar(0)}} type='button'>
                  <div className={`${style.character}`}>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                </button>
                <button type='button' className={`col-span-2 ${click===1 ? style.activeChar: ''}`} onClick={()=>{setClick(1);setSelectChar(1)}}>
                  <div className={`${style.character}`}>
                    <img src={char1} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-span-2 ${click===2 ? style.activeChar:''}`} onClick={()=>{setClick(2);setSelectChar(2)}}>
                  <div className={`${style.character}`}>
                    <img src={char2} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-start-4 col-span-2 ${click===3 ? style.activeChar:''}`} onClick={()=>{setClick(3);setSelectChar(3)}}>
                  <div className={`${style.character}`}>
                    <img src={char3} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-span-2 ${click===4 ? style.activeChar:''}`} onClick={()=>{setClick(4);setSelectChar(4)}}>
                  <div className={`${style.character}`}>
                    <img src={char4} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-span-2 ${click===5 ? style.activeChar:''}`} onClick={()=>{setClick(5);setSelectChar(5)}}>
                  <div className={`${style.character}`}>
                    <img src={char5} alt="" />
                  </div>
                </button>
              </div>
            </div>
            <div className='flex justify-center mt-4'>
              <div className={style.hoverChar}>
                <div className={style.luzHov}></div>
                {
                  click===0? <img src={charDefault}></img> :
                  click===1? <img src={char1Hover}></img> : 
                  click===2? <img src={char2Hover}></img> : 
                  click===3? <img src={char3Hover}></img> : 
                  click===4? <img src={char4Hover}></img> : 
                  click===5? <img src={char5Hover}></img> : ''
                }
              </div>
            </div>
            <div className='flex justify-center mt-4'>
              <button type='submit' className={style.buttSave}>Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalEditPlayer