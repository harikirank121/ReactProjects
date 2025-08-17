import React, { Component } from 'react'
import './css/Page6.css'

export default class Page6 extends Component {
    render() {
        return (
            <>
                <div id='header'>
                    <div className='logo'>
                        MyProjectLogo
                    </div>
                </div>
                <div id='section'>
                    <div className='card'>
                        <img src='images\image2.png' alt='image2' />
                        <label>BWM</label>
                    </div>
                    <div className='card'>
                        <img src='images/image1.png' alt='image1' />
                        <label>Audi</label>

                    </div>
                    <div className='card'>
                        <img src='images\—Pngtree—project management_8368035.png' alt='image3' />
                        <label>mustang</label>

                    </div>
                </div>
                <div id='footer'>copyright @ 2025 All rights reserved</div>
            </>
        )
    }
}
