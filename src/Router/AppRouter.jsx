import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Main from '../Components/Main/Main'
import AboutConference from '../Components/Pages/AboutUs/AboutConference/AboutConference'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<AboutConference />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
