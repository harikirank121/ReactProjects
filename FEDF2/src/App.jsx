import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <h1>Welcome to Frontend Class in KLU</h1>
        <h2>HTML-CSS-React Topics Covered Till Now</h2>
        <h3>Today Date: 29-07-2025</h3>
        <h3>2400030058 - D DURGA GANGADHAR</h3>
        <h4>MY WORK</h4>

        {/* Cards Section */}
        <div id='section'>
          <div className='card'>
            <img src='images/honda.png' alt='Honda' />
            <label><Link to="/page1">Go to Page1</Link></label>
          </div>

          <div className='card'>
            <img src='images/toyato.png' alt='Toyota' />
            <label><Link to="/page2">Go to Page2</Link></label>
          </div>

          <div className='card'>
            <img src='images/bmw.png' alt='BMW' />
            <label><Link to="/page3">Go to Page3</Link></label>
          </div>

          <div className='card'>
            <img src='images/maruti suzuki.png' alt='Maruti Suzuki' />
            <label><Link to="/page4">Go to Page4</Link></label>
          </div>

          <div className='card'>
            <img src='images/OIP (2).png' alt='Volkswagen' />
            <label><Link to="/page5">Go to Page5</Link></label>
          </div>

          <div className='card'>
            <img src='images/audi.png' alt='Audi' />
            <label><Link to="/page6">Go to Page6</Link></label>
          </div>

          <div className='card'>
            <img src='images\akatsuki.png' alt='Akatsuki' />
            <label><Link to="/page7">Go to Page7</Link></label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
