import React from 'react';
import s from '../Controller.module.css'

type BtnIncrease = {
  count: number
  addNum: () => void
  disabled:boolean
}

export function BtnIncrease(props: BtnIncrease) {
  const disabled = props.disabled ? true : false
  const btnDisabled = s.btn + ' ' + (disabled ? s.dis : '')
 
  return (
    <div>
      <button
        disabled={disabled}
        onClick={props.addNum}
        className={btnDisabled}> Inc</button>
    </div>
  )
}