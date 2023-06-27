import {useState, useEffect} from 'react';
import ElementO from '../elements/ElementO';
import ElementX from '../elements/ElementX';
import style from './table.module.css';

const Table = (props) => {
  const {setPlayer, player, setRandomTurn} = props;
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const [select6, setSelect6] = useState(false);
  const [select7, setSelect7] = useState(false);
  const [select8, setSelect8] = useState(false);
  const [select9, setSelect9] = useState(false);

  const turn = ()=>{
    setRandomTurn('');
    if(player === 1){
      setPlayer(2);
    }else{
      setPlayer(1);
    }
  }

  const alertWinner= (player)=>{
    alert(`Gano el player ${player}`)
  }

  useEffect(()=>{
    if(select1[0] && select2[0] && select3[0]){
      select1[1]==='X' && select2[1]==='X' && select3[1]==='X' ? alertWinner('1') : '';
      select1[1]==='O' && select2[1]==='O' && select3[1]==='O' ? alertWinner('2') : '';
    }
    if(select1[0] && select4[0] && select7[0]){
      select1[1]==='X' && select4[1]==='X' && select7[1]==='X' ? alertWinner('1') : '';
      select1[1]==='O' && select4[1]==='O' && select7[1]==='O' ? alertWinner('2') : '';
    } 
    if(select1[0] && select5[0] && select9[0]){
      select1[1]==='X' && select5[1]==='X' && select9[1]==='X' ? alertWinner('1') : '';
      select1[1]==='O' && select5[1]==='O' && select9[1]==='O' ? alertWinner('2') : '';
    } 
    if(select3[0] && select6[0] && select9[0]){
      select3[1]==='X' && select6[1]==='X' && select9[1]==='X' ? alertWinner('1') : '';
      select3[1]==='O' && select6[1]==='O' && select9[1]==='O' ? alertWinner('2') : '';
    } 
    if(select3[0] && select5[0] && select7[0]){
      select3[1]==='X' && select5[1]==='X' && select7[1]==='X' ? alertWinner('1') : '';
      select3[1]==='O' && select5[1]==='O' && select7[1]==='O' ? alertWinner('2') : '';
    } 
    if(select5[0] && select6[0] && select4[0]){
      select5[1]==='X' && select6[1]==='X' && select4[1]==='X' ? alertWinner('1') : '';
      select5[1]==='O' && select6[1]==='O' && select4[1]==='O' ? alertWinner('2') : '';
    } 
    if(select5[0] && select2[0] && select8[0]){
      select5[1]==='X' && select2[1]==='X' && select8[1]==='X' ? alertWinner('1') : '';
      select5[1]==='O' && select2[1]==='O' && select8[1]==='O' ? alertWinner('2') : '';
    } 
    if(select7[0] && select8[0] && select9[0]){
      select7[1]==='X' && select8[1]==='X' && select9[1]==='X' ? alertWinner('1') : '';
      select7[1]==='O' && select8[1]==='O' && select9[1]==='O' ? alertWinner('2') : '';
    } 
  }, [select1,select2,select3,select4,select5,select6,select7,select8,select9]);

  return (
    <section className={`${style.grilla}`}>
      <div className='flex'>
        <button disabled={select1[0] ? true : false} onClick={()=>{setSelect1([true,player===1? 'X' : 'O']); turn();}} className={``}>
          <div>
            {
              select1[0] ? select1[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select2[0] ? true : false} onClick={()=>{setSelect2([true,player===1? 'X' : 'O']); turn();}} className={`${style.selectTwo}`}>
          <div>
            {
              select2[0] ? select2[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select3[0] ? true : false} onClick={()=>{setSelect3([true,player===1? 'X' : 'O']); turn();}} className={``}>
          <div>
            {
              select3[0] ? select3[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
      </div>
      <div className='flex'>
        <button disabled={select4[0] ? true : false} onClick={()=>{setSelect4([true,player===1? 'X' : 'O']); turn();}} className={`${style.selectFor}`}>
          <div>
            {
              select4[0] ? select4[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select5[0] ? true : false} onClick={()=>{setSelect5([true,player===1? 'X' : 'O']); turn();}} className={`${style.selectFive}`}>
          <div>
            {
              select5[0] ? select5[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select6[0] ? true : false} onClick={()=>{setSelect6([true,player===1? 'X' : 'O']); turn();}} className={`${style.selectSix}`}>
          <div>
            {
              select6[0] ? select6[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
      </div>
      <div className='flex'>
        <button disabled={select7[0] ? true : false} onClick={()=>{setSelect7([true,player===1? 'X' : 'O']); turn();}} className={``}>
          <div>
            {
              select7[0] ? select7[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> :
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select8[0] ? true : false} onClick={()=>{setSelect8([true,player===1? 'X' : 'O']); turn();}} className={`${style.selectHeight}`}>
          <div>
            {
              select8[0] ? select8[1] === 'X' ? <ElementX animate={true}/> : <ElementO animate={true}/> : 
              player===1 ? <div className={style.elementHover}><ElementX/></div> : <div className={style.elementHover}><ElementO/></div>
            }
          </div>
        </button>
        <button disabled={select9[0] ? true : false} onClick={()=>{setSelect9([true,player===1? 'X' : 'O']); turn();}} className={``}>
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