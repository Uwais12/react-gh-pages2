import React from 'react'
import appleLogo from './images/appleLogo.png'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [today, setToday] = useState([])
    const [time, setTime] = useState([])

    useEffect(() => {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes()
        today = today.toDateString()

        setTime(time)
        setToday(today.substring(0, 11));
    }, [])


    return (
        <div className='navbar'>
            <div>
                <div><img className='applLogo' src={appleLogo} alt="aapl" /></div>

                <div className='navLinkUwii'>
                    <p className={"strongText"}>
                        Uwais Ishaq
                    </p>
                </div>
            </div>
            <div>Developed using ReactJS</div>
            <div>
                {today}
                {time}
            </div>

        </div>
    )
}

export default Navbar