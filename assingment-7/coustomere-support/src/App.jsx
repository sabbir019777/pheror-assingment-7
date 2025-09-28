import { useState } from 'react'
import Navbar from './component/coustom/navbar'
import Banner from './component/Banner'
import MainSection from './component/Main'
import Footer from './component/Footer'

import './App.css'

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />
     <MainSection/>
      <Footer />

    </>
  )
}

export default App;
