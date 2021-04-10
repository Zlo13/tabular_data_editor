import React, {useContext, useState} from 'react'
import './TabularItem.css'
import {Context} from '../Context'

const TabularItem = ({id, name, type, color, checked, index}) => {

  const {dispatch} = useContext(Context)

  const [newName, setNewName] = useState('')
  const [newType, setNewType] = useState('')
  const [newColor, setNewColor] = useState(color)

  const addNewTabularDataHandler = () => {
    dispatch(
      {
        typ: 'addNewDate',
        payload: id,
        name: newName,
        type: newType,
        color: newColor
      }
    )
    setNewName('')
    setNewType('')
    setNewColor(newColor)
  }


  return(
    <div className='TabularItem'>
      <div className='TabularItem__item' style={{backgroundColor: color}}>
        {index + 1}.
        <div className='TabularItem__name'>{name}</div>
        <div className='TabularItem__type'>{type}</div>
        <div className='TabularItem__color'>{color}</div>
        {/*<input*/}
        {/*  className='TabularItem__check'*/}
        {/*  type="checkbox"*/}
        {/*  checked={checked}*/}
        {/*  onChange={() => dispatch({ typ: "toggle", payload: id })}*/}
        {/*/>*/}
        <div
          className='TabularItem__del'
          onClick={() => dispatch({typ: 'del', payload: id})}
        >
          ×
        </div>
        {/*<div*/}
        {/*  className='TabularItem__edit'*/}
        {/*  // onClick={activeToggle}*/}
        {/*>*/}
        {/*  edit*/}
        {/*</div>*/}

      </div>

      <div className='editor'>
        <input
          className='editor__name'
          placeholder='Name'
          type="text"
          value={newName}
          onChange={(event => setNewName(event.target.value))}
        />
        <input
          className='editor__type'
          placeholder='Type'
          type="text"
          value={newType}
          onChange={(event => setNewType(event.target.value))}
        />
        <input
          type="color"
          className='editor__color'
          value={newColor}
          onChange={(event => setNewColor(event.target.value))}
        />
        <button
          className='editor__btn'
          type='button'
          onClick={addNewTabularDataHandler}
        >
          Change
        </button>
      </div>
    </div>

  )
}
export default TabularItem
