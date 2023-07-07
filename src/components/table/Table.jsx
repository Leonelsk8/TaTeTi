import {useState, useEffect, useContext, useRef} from 'react';
import MyContext from '../../MyContext';
import ElementO from '../elements/ElementO';
import ElementX from '../elements/ElementX';
import style from './table.module.css';

const Table = () => {
  const {setPlayer, player, setRandomTurn, setWin, newGame, start, setnewGame, randomEnd} = useContext(MyContext);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const [select6, setSelect6] = useState(false);
  const [select7, setSelect7] = useState(false);
  const [select8, setSelect8] = useState(false);
  const [select9, setSelect9] = useState(false);
  const [markResult, setMarkResult] = useState(null);
  const [disabledEnd, setDisabledEnd]= useState(false);
  const [selectedButton, setSelectedButton] = useState(false);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);
  const button4Ref = useRef(null);
  const button5Ref = useRef(null);
  const button6Ref = useRef(null);
  const button7Ref = useRef(null);
  const button8Ref = useRef(null);
  const button9Ref = useRef(null);
  const arrayButtons = [button1Ref,button2Ref,button3Ref,button4Ref,button5Ref,button6Ref,button7Ref,button8Ref,button9Ref];

  useEffect(()=>{
    if(newGame || !start){
      setSelect1(false);
      setSelect2(false);
      setSelect3(false);
      setSelect4(false);
      setSelect5(false);
      setSelect6(false);
      setSelect7(false);
      setSelect8(false);
      setSelect9(false);
      setMarkResult(null);
      setDisabledEnd(false);
    }
    if(newGame){
      setnewGame(false);
      setWin(0);
    }
  },[newGame, start]);

  useEffect(()=>{
    let tie = true;
    let turn= true;
    if(select1[0] && select2[0] && select3[0]){
      if(select1[1]==='X' && select2[1]==='X' && select3[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(123); tie=false; turn=false; setDisabledEnd(true);};
      if(select1[1]==='O' && select2[1]==='O' && select3[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(123); tie=false; turn=false; setDisabledEnd(true);};
    }
    if(select1[0] && select4[0] && select7[0]){
      if(select1[1]==='X' && select4[1]==='X' && select7[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(147); tie=false; turn=false; setDisabledEnd(true);};
      if(select1[1]==='O' && select4[1]==='O' && select7[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(147); tie=false; turn=false; setDisabledEnd(true);};
    } 
    if(select1[0] && select5[0] && select9[0]){
      if(select1[1]==='X' && select5[1]==='X' && select9[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(159); tie=false; turn=false; setDisabledEnd(true);};
      if(select1[1]==='O' && select5[1]==='O' && select9[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(159); tie=false; turn=false; setDisabledEnd(true);};
    } 
    if(select3[0] && select6[0] && select9[0]){
      if(select3[1]==='X' && select6[1]==='X' && select9[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(369); tie=false; turn=false; setDisabledEnd(true);};
      if(select3[1]==='O' && select6[1]==='O' && select9[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(369); tie=false; turn=false; setDisabledEnd(true);};
    } 
    if(select3[0] && select5[0] && select7[0]){
      if(select3[1]==='X' && select5[1]==='X' && select7[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(357); tie=false; turn=false; setDisabledEnd(true);};
      if(select3[1]==='O' && select5[1]==='O' && select7[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(357); tie=false; turn=false; setDisabledEnd(true);};
    } 
    if(select5[0] && select6[0] && select4[0]){
      if(select5[1]==='X' && select6[1]==='X' && select4[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(564); tie=false; turn=false; setDisabledEnd(true);};
      if(select5[1]==='O' && select6[1]==='O' && select4[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(564); tie=false; turn=false; setDisabledEnd(true);};
    } 
    if(select5[0] && select2[0] && select8[0]){
      if(select5[1]==='X' && select2[1]==='X' && select8[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(528); tie=false; turn=false; setDisabledEnd(true);};
      if(select5[1]==='O' && select2[1]==='O' && select8[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(528); tie=false; turn=false; setDisabledEnd(true);};
    } 
    if(select7[0] && select8[0] && select9[0]){
      if(select7[1]==='X' && select8[1]==='X' && select9[1]==='X'){setTimeout(()=>{setWin(1)},600); setMarkResult(789); tie=false; turn=false; setDisabledEnd(true);};
      if(select7[1]==='O' && select8[1]==='O' && select9[1]==='O'){setTimeout(()=>{setWin(2)},600); setMarkResult(789); tie=false; turn=false; setDisabledEnd(true);};
    }
    if(select1[0]&&select2[0]&&select3[0]&&select4[0]&&select5[0]&&select6[0]&&select7[0]&&select8[0]&&select9[0]&&tie){
      setMarkResult(false);
      setTimeout(()=>{
        setWin(3);
      },600);
    };

    if(turn && start){
      setRandomTurn('');
      player === 1 ? setPlayer(2) : setPlayer(1);
      setSelectedButton(false);
    };
  }, [select1,select2,select3,select4,select5,select6,select7,select8,select9]);

  useEffect(() => {
    const buttonRandom = ()=>{
      arrayButtons.some((button)=>{
        if(!button.current.disabled && button.current !== document.activeElement){
          button.current.focus(); 
          return true;
        }
        return false;
      });
    }

    if(start && randomEnd){

    const handleKeyDown = (event) => {
      if (event.key.startsWith('Arrow')) {
        event.preventDefault();
      }
      switch (event.key.toLowerCase()) {
        case player===2?'arrowup':'w':
          if (!selectedButton) {
            buttonRandom();
            setSelectedButton(true);
          } else if (button1Ref.current === document.activeElement) {
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            !button4Ref.current.disabled ? button4Ref.current.focus() : 
            button2Ref.current.disabled && button3Ref.current.disabled ? buttonRandom() : ''
          } else if (button2Ref.current === document.activeElement) {
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            button1Ref.current.disabled && button3Ref.current.disabled ? buttonRandom() : ''
          } else if (button3Ref.current === document.activeElement) {
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            button1Ref.current.disabled && button2Ref.current.disabled ? buttonRandom() : ''
          } else if (button4Ref.current === document.activeElement) {
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            button5Ref.current.disabled && button6Ref.current.disabled ? buttonRandom() : ''
          } else if (button5Ref.current === document.activeElement) {
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            button4Ref.current.disabled && button6Ref.current.disabled ? buttonRandom() : ''
          } else if (button6Ref.current === document.activeElement) {
            !button3Ref.current.disabled ? button3Ref.current.focus() :
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            button4Ref.current.disabled && button5Ref.current.disabled ? buttonRandom() : ''
          } else if (button7Ref.current === document.activeElement) {
            !button4Ref.current.disabled ? button4Ref.current.focus() :
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            button8Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button8Ref.current === document.activeElement) {
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            button7Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button9Ref.current === document.activeElement) {
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            !button3Ref.current.disabled ? button3Ref.current.focus() : 
            button7Ref.current.disabled && button8Ref.current.disabled ? buttonRandom() : ''
          }
          break;
        case player===2?'arrowdown':'s':
          if (!selectedButton) {
            buttonRandom();
            setSelectedButton(true);
          } else if (button1Ref.current === document.activeElement) {
            !button4Ref.current.disabled ? button4Ref.current.focus() :
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            button2Ref.current.disabled && button3Ref.current.disabled ? buttonRandom() : ''
          } else if (button2Ref.current === document.activeElement) {
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            button1Ref.current.disabled && button3Ref.current.disabled ? buttonRandom() : ''
          } else if (button3Ref.current === document.activeElement) {
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            button1Ref.current.disabled && button2Ref.current.disabled ? buttonRandom() : ''
          } else if (button4Ref.current === document.activeElement) {
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            button5Ref.current.disabled && button6Ref.current.disabled ? buttonRandom() : ''
          } else if (button5Ref.current === document.activeElement) {
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            button4Ref.current.disabled && button6Ref.current.disabled ? buttonRandom() : ''
          } else if (button6Ref.current === document.activeElement) {
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            !button3Ref.current.disabled ? button3Ref.current.focus() :
            button4Ref.current.disabled && button5Ref.current.disabled ? buttonRandom() : ''
          } else if (button7Ref.current === document.activeElement) {
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            !button4Ref.current.disabled ? button4Ref.current.focus() :
            button8Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button8Ref.current === document.activeElement) {
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            button7Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button9Ref.current === document.activeElement) {
            !button3Ref.current.disabled ? button3Ref.current.focus() :
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            button7Ref.current.disabled && button8Ref.current.disabled ? buttonRandom() : ''
          }
          break;
        case player===2?'arrowleft':'a':
          if (!selectedButton) {
            buttonRandom();
            setSelectedButton(true);
          } else if (button1Ref.current === document.activeElement) {
            !button3Ref.current.disabled ? button3Ref.current.focus() :
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            button4Ref.current.disabled && button7Ref.current.disabled ? buttonRandom() : ''
          } else if (button2Ref.current === document.activeElement) {
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            !button3Ref.current.disabled ? button3Ref.current.focus() :
            button5Ref.current.disabled && button8Ref.current.disabled ? buttonRandom() : ''
          } else if (button3Ref.current === document.activeElement) {
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            button6Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button4Ref.current === document.activeElement) {
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            button1Ref.current.disabled && button7Ref.current.disabled ? buttonRandom() : ''
          } else if (button5Ref.current === document.activeElement) {
            !button4Ref.current.disabled ? button4Ref.current.focus() :
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            button2Ref.current.disabled && button8Ref.current.disabled ? buttonRandom() : ''
          } else if (button6Ref.current === document.activeElement) {
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            !button4Ref.current.disabled ? button4Ref.current.focus() :
            button3Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button7Ref.current === document.activeElement) {
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            button4Ref.current.disabled && button1Ref.current.disabled ? buttonRandom() : ''
          } else if (button8Ref.current === document.activeElement) {
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            button5Ref.current.disabled && button2Ref.current.disabled ? buttonRandom() : ''
          } else if (button9Ref.current === document.activeElement) {
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            button6Ref.current.disabled && button3Ref.current.disabled ? buttonRandom() : ''
          }
          break;
        case player===2?'arrowright':'d':
          if (!selectedButton) {
            buttonRandom();
            setSelectedButton(true);
          } else if (button1Ref.current === document.activeElement) {
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            !button3Ref.current.disabled ? button3Ref.current.focus() :
            button4Ref.current.disabled && button7Ref.current.disabled ? buttonRandom() : ''
          } else if (button2Ref.current === document.activeElement) {
            !button3Ref.current.disabled ? button3Ref.current.focus() :
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            button5Ref.current.disabled && button8Ref.current.disabled ? buttonRandom() : ''
          } else if (button3Ref.current === document.activeElement) {
            !button1Ref.current.disabled ? button1Ref.current.focus() :
            !button2Ref.current.disabled ? button2Ref.current.focus() :
            button6Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button4Ref.current === document.activeElement) {
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            button1Ref.current.disabled && button7Ref.current.disabled ? buttonRandom() : ''
          } else if (button5Ref.current === document.activeElement) {
            !button6Ref.current.disabled ? button6Ref.current.focus() :
            !button4Ref.current.disabled ? button4Ref.current.focus() :
            button2Ref.current.disabled && button8Ref.current.disabled ? buttonRandom() : ''
          } else if (button6Ref.current === document.activeElement) {
            !button4Ref.current.disabled ? button4Ref.current.focus() :
            !button5Ref.current.disabled ? button5Ref.current.focus() :
            button3Ref.current.disabled && button9Ref.current.disabled ? buttonRandom() : ''
          } else if (button7Ref.current === document.activeElement) {
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            button4Ref.current.disabled && button1Ref.current.disabled ? buttonRandom() : ''
          } else if (button8Ref.current === document.activeElement) {
            !button9Ref.current.disabled ? button9Ref.current.focus() :
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            button5Ref.current.disabled && button2Ref.current.disabled ? buttonRandom() : ''
          } else if (button9Ref.current === document.activeElement) {
            !button7Ref.current.disabled ? button7Ref.current.focus() :
            !button8Ref.current.disabled ? button8Ref.current.focus() :
            button6Ref.current.disabled && button3Ref.current.disabled ? buttonRandom() : ''
          }
          break;
        case player===2?' ':'enter':
          event.preventDefault();
          break;
        default:
          break;
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }
  }, [selectedButton, player, randomEnd]);
  



  return (
    <section className={`${style.grilla}`}>
      <div className='flex'>
        <button ref={button1Ref} tabIndex="0" disabled={select1[0]||disabledEnd ? true : false} onClick={()=>{setSelect1([true,player===1? 'X' : 'O']);}} className={`${markResult===147 || markResult===159 || markResult===123 ? style.mark : ''}`}>
          <div>
            {
              select1[0] ? select1[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button ref={button2Ref} tabIndex="0" disabled={select2[0]||disabledEnd ? true : false} onClick={()=>{setSelect2([true,player===1? 'X' : 'O']);}} className={`${style.selectTwo} ${markResult===528 || markResult===123 ? style.mark : ''}`}>
          <div>
            {
              select2[0] ? select2[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={`${style.elementHover}`}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button ref={button3Ref} tabIndex="0" disabled={select3[0]||disabledEnd ? true : false} onClick={()=>{setSelect3([true,player===1? 'X' : 'O']);}} className={`${markResult===369 || markResult===357 || markResult===123 ? style.mark : ''}`}>
          <div>
            {
              select3[0] ? select3[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
      </div>
      <div className='flex'>
        <button ref={button4Ref} tabIndex="0" disabled={select4[0]||disabledEnd ? true : false} onClick={()=>{setSelect4([true,player===1? 'X' : 'O']);}} className={`${style.selectFor} ${markResult===147 || markResult===564 ? style.mark : ''}`}>
          <div>
            {
              select4[0] ? select4[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button ref={button5Ref} tabIndex="0" disabled={select5[0]||disabledEnd ? true : false} onClick={()=>{setSelect5([true,player===1? 'X' : 'O']);}} className={`${style.selectFive} ${markResult===528 || markResult===357 || markResult===564 || markResult===159  ? style.mark : ''}`}>
          <div>
            {
              select5[0] ? select5[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button ref={button6Ref} tabIndex="0" disabled={select6[0]||disabledEnd ? true : false} onClick={()=>{setSelect6([true,player===1? 'X' : 'O']);}} className={`${style.selectSix} ${markResult===369 || markResult===564 ? style.mark : ''}`}>
          <div>
            {
              select6[0] ? select6[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
      </div>
      <div className='flex'>
        <button ref={button7Ref} tabIndex="0" disabled={select7[0]||disabledEnd ? true : false} onClick={()=>{setSelect7([true,player===1? 'X' : 'O']);}} className={`${markResult===147 || markResult===357 || markResult===789 ? style.mark : ''}`}>
          <div>
            {
              select7[0] ? select7[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button ref={button8Ref} tabIndex="0" disabled={select8[0]||disabledEnd ? true : false} onClick={()=>{setSelect8([true,player===1? 'X' : 'O']);}} className={`${style.selectHeight} ${markResult===528 || markResult===789 ? style.mark : ''}`}>
          <div>
            {
              select8[0] ? select8[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button ref={button9Ref} tabIndex="0" disabled={select9[0]||disabledEnd ? true : false} onClick={()=>{setSelect9([true,player===1? 'X' : 'O']);}} className={`${markResult===369 || markResult===159 || markResult===789 ? style.mark : ''}`}>
          <div>
            {
              select9[0] ? select9[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
      </div>
    </section>
  )
}

export default Table