import style from './keyboardPanel.module.css';
import wasdKeys from '../../assets/keys/wasdKeys.png';
import arrowsKeys from '../../assets/keys/arrowsKeys.png';
import spaceKey from '../../assets/keys/spaceKey.png';
import enterKey from '../../assets/keys/enterKey.png';

const KeyboardPanel = () => {
  return (
    <div className='grid grid-cols-12 gap-0 mt-5'>
      <div className={`col-start-4 col-span-6 panels p-4 flex justify-between`}>
        <div className='flex flex-col items-center'>
          <p className='text-xl mb-3'>Jugador 1</p>
          <div className={style.divsIMG}>
            <div className='flex items-center'>
              <img src={wasdKeys} alt="teclasWASD" className='me-3'/>
              <img src={spaceKey} alt="teclaEspacio"></img>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xl mb-3'>Jugador 2</p>
          <div className={style.divsIMG}>
            <div className='flex items-center'>
              <img src={arrowsKeys} alt="teclasWASD" className='me-3'/>
              <img src={enterKey} alt="teclaEspacio"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyboardPanel