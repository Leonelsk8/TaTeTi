import { useContext } from 'react';
import MyContext from '../../MyContext';
import style from './panelplayer.module.css';

const PanelPlayer = () => {
  const {player, setModal} = useContext(MyContext);

  return (
    <div className='grid grid-cols-12 gap-0 mb-6' >
      <div className={`col-start-5 col-span-4 ${style.panel}`}>
        <div className='grid grid-cols-12 gap-0'>
          <button className={`col-span-6 ${player===2?style.hovWhite : style.hovDark} ${style.buttleft}`} onClick={()=>{setModal({on:true,player:1})}}>
            Editar jugador 1
          </button>
          <button className={`col-span-6 ${player===2 && player !==null?style.hovDark : style.hovWhite} ${style.buttright}`} onClick={()=>{setModal({on:true,player:2})}}>
            Editar jugador 2
          </button>
        </div>
      </div>
    </div>
  )
}

export default PanelPlayer