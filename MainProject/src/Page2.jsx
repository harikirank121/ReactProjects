import React, { Component } from 'react'
import'./css/Page2.css'
export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        
        <h1 >Frontend and backend</h1>
        
        <p>In software development, frontend refers to the presentation layer that users interact with, while backend involves the data management and processing behind the scenes, and full-stack development refers to mastering both. In the client
            server model, the client is usually considered the frontend, handling user-facing tasks, and the server is the backend, managing data and logic. Some presentation tasks may also be performed by the server.</p>
            <hr></hr>
           <h1>Introduction</h1>
           <hr></hr>
           <p>In software architecture, there may be many layers between the hardware and end user. The front is an abstraction, simplifying the underlying component by providing a user-friendly interface, while the back usually handles data storage and business logic.</p>
          
      </div>
    )
  }
}
