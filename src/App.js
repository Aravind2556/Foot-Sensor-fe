import React, { useContext } from 'react'
import {Navbar} from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/createAccount/Login'
import Register from './components/createAccount/Register'
import { DContext } from './components/context/Datacontext'
import Dashborad from './components/createAccount/Dashborad'
import { Loading } from './components/Loading'


export const App = () => {
  const {isAuth}=useContext(DContext)

  if(isAuth === null){
    return <Loading/>
  }
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={isAuth !== false ? <Dashborad/> : <Login/> }></Route>
        <Route path='/create-account' element={<Register/>}></Route>
       
      </Routes>
    </div>
  )
}

