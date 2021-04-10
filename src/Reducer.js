const Reducer = (state, action) => {

  switch (action.typ) {

    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          name: action.name,
          type: action.type,
          color: action.color,
          checked: false
        }
      ]
    case "exchange":
      return [...action.payload]

    case 'del':
      // // return
      // console.log(action.payload)
      return state.filter(elem => elem.id !== action.payload)

    case 'toggle':
      console.log(state)
      return state.map((elem) => {
        if(elem.id === action.payload){
          elem.checked = !elem.checked
        }
        return elem
      })

    case 'addNewDate':
      return state.map(elem => {
        if(elem.id === action.payload){
          elem.name = action.name
          elem.type = action.type
          elem.color = action.color
        }
        return elem
      })

    default:
      return state
  }
}

export default Reducer