import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Tablo } from './component/tablo/Tablo';
import { Controller } from './component/controller/Controller';


function App() {

  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  const [disabled, setDisabled] = useState(false)
  function addNum() {
    setCount(count + 1)
    if (count + 1 === value) {
      setDisabled(true)
    }
  }
  const onChangeData = (value: number) => {
    setValue(value)
  }
  function resetNum() {
    setCount(0)
    setDisabled(false)
  }


  return (
    <div className="App">
      <div className="inner">
        <Tablo count={count}
          onChangeData={onChangeData}
          disabled={disabled}
        />
        <Controller
          count={count}
          addNum={addNum}
          disabled={disabled}
          resetNum={resetNum}
        />
      </div>
    </div>
  );
}

export default App;
