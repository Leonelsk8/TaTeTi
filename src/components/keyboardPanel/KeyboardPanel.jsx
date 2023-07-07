import style from './keyboardPanel.module.css';
import wasdKeys from '../../assets/keys/wasdKeys.png';
import arrowsKeys from '../../assets/keys/arrowsKeys.png';
import spaceKey from '../../assets/keys/spaceKey.png';
import enterKey from '../../assets/keys/enterKey.png';

const KeyboardPanel = () => {
  return (
    <div className='lg:grid lg:grid-cols-12 lg:gap-0 lg:mt-5 hidden mb-6'>
      <div className={`col-start-4 col-span-6 panels py-3 flex justify-between`}>
        <div className='flex flex-col items-center'>
          <div className={style.divsIMG}>
            <div className={`flex items-center relative ${style.images}`}>
              <img src={wasdKeys} alt="teclasWASD" className='me-3'/>
              <img src={spaceKey} alt="teclaEspacio"></img>
              <div className={style.luzHov}></div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className={style.divsIMG}>
            <div className='flex items-center relative'>
              <img src={arrowsKeys} alt="teclasWASD" className='me-3'/>
              <img src={enterKey} alt="teclaEspacio"></img>
              <div className={style.luzHov}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyboardPanel