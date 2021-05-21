import React from 'react';
import s from '../Controller.module.css'

type BtnResetPropsType = {
  count: number
  disabled: boolean
  resetNum: () => void
}
export function BtnReset(props: BtnResetPropsType) {
  const disabled = props.disabled ? false : true
  const btnDisabled = s.btn + ' ' + (disabled ? s.dis : '')
  return (
    <div >
      <button
        disabled={disabled}
        onClick={props.resetNum}
        className={btnDisabled}>Reset</button>
    </div>
  )

}