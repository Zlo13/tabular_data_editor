import './App.css';
import React, {useState, useReducer, useEffect} from 'react'
import {Context} from './Context'
import Reducer from './Reducer'
import TabularList from './components/TabularList'

const App = () => {

  const initialState  = JSON.parse(localStorage.getItem("todos"))

  const [state, dispatch] = useReducer(Reducer, initialState || []);

  const [color, setColor] = useState('#be7f7f')
  const [type, setType] = useState('')
  const [name, setName] = useState('')

  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(1)


  const addTabularDataHandler = () => {
    dispatch(
      {
        typ: 'add',
        name,
        type,
        color
      }
    )
    setName('')
    setType('')
  }

  const exchangeTabularHandler = () => {
    const tmp1 = state[num1 - 1]
    state[num1 - 1] = state[num2 - 1]
    state[num2 - 1] = tmp1

    dispatch({typ: 'exchange', payload: state})
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

 return (
    <Context.Provider value={{dispatch}}>
      <div className='App' >
        <header className='header' style={{backgroundColor: color}}>
          <input
            className='header__name'
            type="text"
            placeholder='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className='header__type'
            type="text"
            placeholder='type'
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
          <input
            className='header__color colorPicker'
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <button
            className='header__button'
            type='button'
            onClick={addTabularDataHandler}
          >add data</button>
          <div className="num">
            <input
              className='num__1 num__all'
              type="number" min='1' max={state.length}
              onChange={(event => setNum1(event.target.value))}
              placeholder="1"
            />
            <input
              className='num__2 num__all'
              type="number" min='1' max={state.length}
              onChange={(event => setNum2(event.target.value))}
              placeholder="1"
            />
          </div>


          <button
            className='header__button'
            type='button'
            onClick={exchangeTabularHandler}
          >exchange</button>

        </header>
        <TabularList tabularData = {state}/>
      </div>
    </Context.Provider>
  );
}

export default App;
