import React from 'react';
import style from './elements.module.css';
import X from '../../assets/x-lg.svg';

const ElementX = (props) => {
  const animate = props.animate;

  return (
    <div className={style.divElement}>
      <div className={`${style.Element} ${animate? style.animateElement : ''}`}><img src={X}></img></div>
    </div>
  )
}

export default ElementX