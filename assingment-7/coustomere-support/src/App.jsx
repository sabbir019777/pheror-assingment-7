import { useState } from 'react'
import Navbar from './component/coustom/navbar'
import Banner from './component/Banner'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    </>
  )
}

export default App
