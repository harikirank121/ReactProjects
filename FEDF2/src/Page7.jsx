import React, { Component } from 'react';
import './css/Page7.css';

export default class Page7 extends Component {
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
                        <img src='images\ithachi..png' alt='Itachi' />
                        <label>Itachi Uchiha</label>
                    </div>

                    <div className='card'>
                        <img src='images\pain.png' alt='Pain' />
                        <label>Pain (Nagato)</label>
                    </div>

                    <div className='card'>
                        <img src='images\kisame.png' alt='Kisame' />
                        <label>Kisame Hoshigaki</label>
                    </div>

                    <div className='card'>
                        <img src='images\konan.png' alt='Konan' />
                        <label>Konan</label>
                    </div>

                    <div className='card'>
                        <img src='images\Deidara.png' alt='Deidara' />
                        <label>Deidara</label>
                    </div>

                    <div className='card'>
                        <img src='images\Sasori..png' alt='Sasori' />
                        <label>Sasori</label>
                    </div>

                    <div className='card'>
                        <img src='images\Hidan.png' alt='Hidan' />
                        <label>Hidan</label>
                    </div>

                    <div className='card'>
                        <img src='images\Kakuzu.png' alt='Kakuzu' />
                        <label>Kakuzu</label>
                    </div>

                    <div className='card'>
                        <img src='images\Zetsu.png' alt='Zetsu' />
                        <label>Zetsu</label>
                    </div>

                    <div className='card'>
                        <img src='images\Tobi.jpeg' alt='Tobi' />
                        <label>Tobi (Obito)</label>
                    </div>

                    <div className='card'>
                        <img src='images\OIP (4).jpeg' alt='Orochimaru' />
                        <label>Orochimaru</label>
                    </div>
                </div>

                <div id='footer'>
                    copyright @ 2025 All rights reserved
                </div>
            </>
        );
    }
}
