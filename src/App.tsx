import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './secation/Users'
import NewsList from './secation/NewsList'
import UserObj from './secation/UserObj'
import DemoUsers from './secation/DemoUsers'
import FetchDatas from './secation/FetchDatas'
import ButtonSection from './secation/ButtonSection'
import CardSection from './secation/CardSection'
import StylePropsSection from './secation/StylePropsSection'
import AddUser from './secation/AddUser'
import AddNewUser from './secation/AddNewUser'
import UserForm from './secation/UserForm'

function App() {

  return (
    <>
      <div >
        <div className=' border-2 p-20'>
          <Users />
        </div>
        <div className=' border-2 p-20'>
          <NewsList />
        </div>
        <div className=' border-2 p-20'>
          <UserObj />
        </div>
        <div className=' border-2 p-20'>
          <DemoUsers />
        </div>
        <div className=' border-2 p-20'>
          <FetchDatas />
        </div>
        <div className=' border-2 p-20'>
          <ButtonSection />
        </div>
        <div className=' border-2 p-20'>
          <CardSection />
        </div>
        <div className=' border-2 p-20'>
          <StylePropsSection />
        </div>
        <div className=' border-2 p-20'>
          <AddUser />
        </div>
        <div className=' border-2 p-20'>
          <AddNewUser />
        </div>
        <div className=' border-2 p-20'>
          <UserForm />
        </div>
      </div>
    </>
  )
}

export default App
