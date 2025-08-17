import { useState } from 'react'
import './App.css'
import {Link}from'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='main'>
      
     <h1>Welcome to Fronted class</h1>
     <h2>today topic is introduction to react</h2>
     <h3>today date 29-07-2025</h3>
     <h3>2400030608-K Hari Kiran</h3>
     <h4>K Hari kiran</h4>
     <Link to="/page1">Go to the page1</Link><br>
     
     </br>
     <Link to="/page2">Go to the page2</Link>
     </div>
     <div>
     <Link to="/page3">Go to the Page3</Link>
     </div>
    </>
  )
}

export default App
