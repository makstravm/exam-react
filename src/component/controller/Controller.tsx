import React from 'react';
import s from './Controller.module.css'
import { BtnIncrease } from './buttunIncrease/BtnIncrease';
import { BtnReset } from './buttunReset/BtnReset';

type ControllerPropsType = {
  addNum: () => void
  resetNum: () => void
  count: number
  disabled:boolean
}

export function Controller(props: ControllerPropsType) {
  return (
    <div className={s.inner}>
      <BtnIncrease
        count={props.count}
        addNum={props.addNum}
        disabled={props.disabled}
      />
      <BtnReset
        count={props.count}
        disabled={props.disabled}
        resetNum={props.resetNum}
      />
    </div>
  )
}