import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Zaiavka from './Zaiavka'
import Reg from './Reg'
import Auths from './Auths'

function Home() {
}

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/zaiavka' element={<Zaiavka />}/>
          <Route path='/auth' element={<Auths />}/>
          <Route path='/reg' element={<Reg />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
