import React, { ChangeEvent } from 'react';
import s from './Tablo.module.css'

type TabloPropsType = {
  count: number
  onChangeData: (value: number) => void
  disabled: boolean
}

export function Tablo(props: TabloPropsType) {
  const indDisabled = props.disabled ? s.disable : ''
  const wrapperTablo = s.inner + ' ' + (props.disabled ? s.active : '')
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeData(e.currentTarget.valueAsNumber);
  }
  return (
    <div>
      <input
        className={s.input}
        type="number"
        min='0'
        onChange={onChangeValue} />
      <div className={wrapperTablo}>
        <span className={indDisabled}>
          {props.count}
        </span>
      </div>
    </div>
  )
}