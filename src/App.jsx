import { useState } from 'react'
import './App.css'
import Header from './Core/Header/Header'
import Footer from './Core/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Keydates from './Components/KeyDates/Kedates'
import Invitees from './Components/Invitees/Invitees'
import Avenue from './Components/Avenue/Avenue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Keydates/>
      <Invitees/>
      <Avenue/>
      <Footer/>
    </>
  )
}

export default App
