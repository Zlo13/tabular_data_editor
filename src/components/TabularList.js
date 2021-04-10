import React from 'react'
import './TabularList.css'
import TabularItem from './TabularItem'

const TabularList = ({tabularData}) => {

  return(
    <div className='TabularList'>
      <div className='TabularList__header'>
        <div className='TabularList__name'>Name</div>
        <div className='TabularList__type'>Type</div>
        <div className='TabularList__color'>Color</div>
      </div>
      {
        tabularData.map((item, index) => {
          return(
            <TabularItem
              key = {index}
              index = {index}
              id = {item.id}
              name = {item.name}
              type = {item.type}
              color = {item.color}
              checked={item.checked}
            />
          )
        })
      }

    </div>
  )
}
export default TabularList