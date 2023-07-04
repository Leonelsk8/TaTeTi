import { useState, useContext } from 'react';
import MyContext from '../../MyContext';
import style from './modal.module.css';

const ModalEditPlayer = () => {
  const {setModal, modalOn, setNamePlayer, characters, setCharacters, charsIcons, charsHover} = useContext(MyContext);
  const [name, setName] = useState('');
  const [click, setClick] = useState(modalOn.player===1?characters.player1:characters.player2);
  const [selectChar, setSelectChar] = useState(null);


  const handleSubmit = (e)=>{
    e.preventDefault();
    let valueName;
    if(name === '' || name.length > 15){
      valueName = modalOn.player===1? setNamePlayer.name1 : setNamePlayer.name2;
    }else{
      valueName = name;
    }

    if(modalOn.player === 1){
      setNamePlayer.setNamePlayerOne(valueName);
      selectChar !== null ? setCharacters.setCharacterOne(selectChar) : ''
    } else if(modalOn.player === 2){
      setNamePlayer.setNamePlayerTwo(valueName);
      selectChar !== null ? setCharacters.setCharacterTwo(selectChar) : ''
    } 
  }

  const handleChange = (e)=>{ 
    setName(e.target.value);
  }

  return (
    <div className='grid grid-cols-12 gap-0 text-white'>
      <div className={`col-start-4 col-span-6 ${style.modalEdit}`}>
        <div className='flex justify-between'>
          <p className='text-3xl py-2'>{modalOn.player===1?'Jugador 1':'Jugador 2'}</p>
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
                    <img src={charsIcons.char1Icon} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-span-2 ${click===2 ? style.activeChar:''}`} onClick={()=>{setClick(2);setSelectChar(2)}}>
                  <div className={`${style.character}`}>
                    <img src={charsIcons.char2Icon} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-start-4 col-span-2 ${click===3 ? style.activeChar:''}`} onClick={()=>{setClick(3);setSelectChar(3)}}>
                  <div className={`${style.character}`}>
                    <img src={charsIcons.char3Icon} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-span-2 ${click===4 ? style.activeChar:''}`} onClick={()=>{setClick(4);setSelectChar(4)}}>
                  <div className={`${style.character}`}>
                    <img src={charsIcons.char4Icon} alt="" />
                  </div>
                </button>
                <button type='button' className={`col-span-2 ${click===5 ? style.activeChar:''}`} onClick={()=>{setClick(5);setSelectChar(5)}}>
                  <div className={`${style.character}`}>
                    <img src={charsIcons.char5Icon} alt="" />
                  </div>
                </button>
              </div>
            </div>
            <div className='flex justify-center mt-4'>
              <div className={style.hoverChar}>
                <div className={style.luzHov}></div>
                {
                  click===0? <img src={charsIcons.charIconDefault}></img> :
                  click===1? <img src={charsHover.char1Hover}></img> : 
                  click===2? <img src={charsHover.char2Hover}></img> : 
                  click===3? <img src={charsHover.char3Hover}></img> : 
                  click===4? <img src={charsHover.char4Hover}></img> : 
                  click===5? <img src={charsHover.char5Hover}></img> : ''
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