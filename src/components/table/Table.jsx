import {useState, useEffect} from 'react';
import ElementO from '../elements/ElementO';
import ElementX from '../elements/ElementX';
import style from './table.module.css';

const Table = (props) => {
  const {setPlayer, player, setRandomTurn, setWin, newGame, start, setnewGame} = props;
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
      player === 1 ? setPlayer(2) : setPlayer(1)
    };
  }, [select1,select2,select3,select4,select5,select6,select7,select8,select9]);

  return (
    <section className={`${style.grilla}`}>
      <div className='flex'>
        <button disabled={select1[0]||disabledEnd ? true : false} onClick={()=>{setSelect1([true,player===1? 'X' : 'O']);}} className={`${markResult===147 || markResult===159 || markResult===123 ? style.mark : ''}`}>
          <div>
            {
              select1[0] ? select1[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select2[0]||disabledEnd ? true : false} onClick={()=>{setSelect2([true,player===1? 'X' : 'O']);}} className={`${style.selectTwo} ${markResult===528 || markResult===123 ? style.mark : ''}`}>
          <div>
            {
              select2[0] ? select2[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select3[0]||disabledEnd ? true : false} onClick={()=>{setSelect3([true,player===1? 'X' : 'O']);}} className={`${markResult===369 || markResult===357 || markResult===123 ? style.mark : ''}`}>
          <div>
            {
              select3[0] ? select3[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
      </div>
      <div className='flex'>
        <button disabled={select4[0]||disabledEnd ? true : false} onClick={()=>{setSelect4([true,player===1? 'X' : 'O']);}} className={`${style.selectFor} ${markResult===147 || markResult===564 ? style.mark : ''}`}>
          <div>
            {
              select4[0] ? select4[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select5[0]||disabledEnd ? true : false} onClick={()=>{setSelect5([true,player===1? 'X' : 'O']);}} className={`${style.selectFive} ${markResult===528 || markResult===357 || markResult===564 || markResult===159  ? style.mark : ''}`}>
          <div>
            {
              select5[0] ? select5[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select6[0]||disabledEnd ? true : false} onClick={()=>{setSelect6([true,player===1? 'X' : 'O']);}} className={`${style.selectSix} ${markResult===369 || markResult===564 ? style.mark : ''}`}>
          <div>
            {
              select6[0] ? select6[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
      </div>
      <div className='flex'>
        <button disabled={select7[0]||disabledEnd ? true : false} onClick={()=>{setSelect7([true,player===1? 'X' : 'O']);}} className={`${markResult===147 || markResult===357 || markResult===789 ? style.mark : ''}`}>
          <div>
            {
              select7[0] ? select7[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select8[0]||disabledEnd ? true : false} onClick={()=>{setSelect8([true,player===1? 'X' : 'O']);}} className={`${style.selectHeight} ${markResult===528 || markResult===789 ? style.mark : ''}`}>
          <div>
            {
              select8[0] ? select8[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select9[0]||disabledEnd ? true : false} onClick={()=>{setSelect9([true,player===1? 'X' : 'O']);}} className={`${markResult===369 || markResult===159 || markResult===789 ? style.mark : ''}`}>
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