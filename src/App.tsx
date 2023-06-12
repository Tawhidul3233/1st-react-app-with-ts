import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './secation/Users'
import NewsList from './secation/NewsList'

function App() {

  return (
    <>
      <div >
        <div>
          <Users> </Users>
        </div>
        <div >
          <NewsList  > </NewsList>
        </div>
      </div>
    </>
  )
}

export default App
