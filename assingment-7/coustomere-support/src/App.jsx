import { useState } from 'react'
import Navbar from './component/coustom/navbar'
import Banner from './component/Banner'
import Main from './component/Main'
import Footer from './component/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Main></Main>
    <Footer></Footer>

    </>
  )
}

export default App;
