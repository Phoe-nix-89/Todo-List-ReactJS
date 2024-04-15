import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Compoents/TodoList/TodoList'
import AddTodo from './Compoents/AddTodo/AddTodo'
import Context from './Context'
import Front from './Compoents/Front'
import todoReducer from './Compoents/todoReducer'
import TodoDispatchContext from './TodoDispatchContext'
function App() {
  // const [list,setList] = useState([
  //   {id : 1 , tododata : 'todo 1' , finished : false},
  //   {id : 2 , tododata : 'todo 2' , finished : false}
  // ])

  const [list,dispatch] = useReducer(todoReducer,[
    {id : 1 , tododata : 'todo 1' , finished : false},
    {id : 2 , tododata : 'todo 2' , finished : false}
  ]);

  return (
    <Context.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <Front />
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </Context.Provider>
    
  )
}

export default App
