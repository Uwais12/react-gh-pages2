import React from 'react'
import folder from './images/macFolder.png'
import openFolder from './images/openFolder.png'
import { useState } from 'react'
import linkedin from './images/linkedin.png'
import mail from './images/mail.png'
import github from './images/github.png'


const Folder = ({ appId, name, contents }) => {

    function handleClick() {
        const appIds = ['aboutMe', 'skills', 'experience', 'interestsFolder']
        for (let i = 0; i < appIds.length; i++) {
            document.getElementById(appIds[i]).style.display = 'none'
        }
        document.getElementById(appId).style.display = 'none'

        if (document.getElementById(appId).style.display = "none") {
            document.getElementById(appId).style.display = 'flex'

            document.getElementById(appId).style.flexDirection = 'column'
        }

    }

    return (
        <div className='folder'>
            {window.innerWidth <= 639 ?

                <div className='mainSquare' onClick={handleClick} >
                    <img src={linkedin} className="subSquare" />
                    <img src={github} className="subSquare" />
                    <img src={mail} className="subSquare" />
                    <img src={linkedin} className="subSquare" />
                </div>
                :
                <img src={folder} className="folder-icon" alt="logo"
                    onClick={handleClick} />}

            <caption><p>{name}</p></caption>



        </div >
    )
}

export default Folder