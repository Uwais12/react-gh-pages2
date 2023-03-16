import React from 'react'
import Dock from './Dock'
import { useState } from 'react'


const Footer = () => {
    let disp = 'none'
    if (window.innerWidth < 639) {
        disp = 'flex'
    }

    const [style, setStyle] = useState({ display: disp });
    return (
        <div className='footer' id="footerMain"

            onMouseEnter={e => {
                if (window.innerWidth >= 639) {
                    setStyle({
                        // display: 'flex',
                        animationName: 'moveUp',
                        animationFillMode: 'forwards'
                    });
                }



            }}
            onMouseLeave={e => {
                if (window.innerWidth >= 639) {
                    setStyle({
                        animationName: 'moveDown',
                        animationFillMode: 'forwards'

                    })
                }



            }}
        >
            <p>Links</p>
            <Dock id="mainDock" style={style} />
        </div>


    )
}

export default Footer