import React from 'react'
import linkedin from './images/linkedin.png'
import mail from './images/mail.png'
import github from './images/github.png'
import DockIcon from './DockIcon'

const Dock = ({ style }) => {
    return (

        <div className='dock' style={style}>
            <DockIcon img={mail} link="mailto:uwais_i@outlook.com" caption="Mail" />
            <DockIcon img={linkedin} link="https://www.linkedin.com/in/uwais-ishaq-715b7418a/" caption="LinkedIn" />
            <DockIcon img={github} link="https://github.com/Uwais12" caption="Github" />
        </div>
    )
}

export default Dock