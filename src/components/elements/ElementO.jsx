import React from 'react';
import style from './elements.module.css';
import O from '../../assets/circle.svg';

const ElementO = (props) => {
  const animate = props.animate;
  
  return (
    <div className={style.divElement}>
      <div className={`${style.Element} ${animate? style.animateElement : ''}`}><img src={O}></img></div>
    </div>
  )
}

export default ElementO