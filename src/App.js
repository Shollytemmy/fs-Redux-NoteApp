import redux, {createStore} from 'redux'
import { reducerNotes } from './Reducers/noteReducer';

import './App.css';

const store = createStore(reducerNotes)


function App() {


  store.dispatch({type: 'NEW_NOTE', 
  data:{
    content: 'state changes are made with actions',
    important: true,
    id: 1
  }


})


store.dispatch({
  type: 'NEW_NOTE',
  data:{
    content: 'state changes are made with actions',
    important: false,
    id: 2

  }
})


  return (
    <div className="App">

      <ul>
        {store.getState().map((note) =>{
          const {id, content, important} = note

          return <li key={id}>
            {content} <strong>{important ? 'important' : ''}</strong>
            </li>
        })}
      </ul>

      </div>
      )
}

export default App;
