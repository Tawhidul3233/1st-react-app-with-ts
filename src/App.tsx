import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './secation/Users'
import NewsList from './secation/NewsList'
import UserObj from './secation/UserObj'

function App() {

  return (
    <>
      <div >
        <div className=' border-2 p-20'>
          <Users> </Users>
        </div>
        <div  className=' border-2 p-20'>
          <NewsList  > </NewsList>
        </div>
        <div  className=' border-2 p-20'>
          <UserObj  > </UserObj>
        </div>
      </div>
    </>
  )
}

export default App
