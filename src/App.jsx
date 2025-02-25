import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/addTodo'
import Todos from './Components/Todos'


function App() {
  

  
  return (
    <>
      <h1 className='font-extrabold'>THE TODO CREATED IS BY HELP OF REDUX TOOLKIT</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App