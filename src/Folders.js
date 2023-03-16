import React from 'react'
import Folder from './Folder'
import SmallApp from './SmallApp'
import notes from './images/notesApp.png'
import appStore from './images/app-store.png'
import stocks from './images/apple-stocks.png'
import cvIcon from './images/cv.png'
import cvphone from './images/cvphone.png'

import cvpdf from './images/CV_UwaisIshaq.pdf'

const Folders = () => {
    const contents = ["Rock Climbing", "Technology", "Gym", 'Football']

    return (
        <div className='folders'>
            <div className='folders-cont'>

                <SmallApp appName="About Me" logo={notes} appId="aboutMe" />
                <SmallApp appName="Experience" logo={stocks} appId="experience" />
                <SmallApp appName="Skills" logo={appStore} appId="skills" />
                {/* <SmallApp appName="CV" logo={cvIcon} appId="cvicon" /> */}
                <a href={cvpdf} download>

                    <div className="smallApp">

                        {window.innerWidth <= 639 ?

                            <img className="" id='cvv' src={cvphone} />

                            :
                            <img className="docxIcon" src={cvIcon} />
                        }

                        <div className="appName" id='cvText'>
                            Uwais_CV
                        </div>
                    </div>
                </a>
                <Folder appId="interestsFolder" name="Interests" contents={contents} />

            </div>
        </div>
    )
}

export default Folders