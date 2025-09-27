import { useState } from 'react'
import Navbar from './component/coustom/navbar'
import Banner from './component/Banner'
import Main from './component/Main'
import Footer from './component/Footer'
import './App.css'

function App() {
  const [inProgress, setInProgress] = useState([])  // Add
  const [resolved, setResolved] = useState([])      // Add

  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />
      <Main inProgress={inProgress} setInProgress={setInProgress} resolved={resolved} setResolved={setResolved} />
      <Footer />
    </>
  )
}

export default App;
