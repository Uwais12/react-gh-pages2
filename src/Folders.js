import React from 'react'
import Folder from './Folder'
import SmallApp from './SmallApp'
import notes from './images/notesApp.png'
import appStore from './images/app-store.png'
import stocks from './images/apple-stocks.png'

const Folders = () => {
    const contents = ["Rock Climbing", "Technology", "Gym", 'Football']

    return (
        <div className='folders'>
            <div className='folders-cont'>

                <SmallApp appName="About Me" logo={notes} appId="aboutMe" />
                <SmallApp appName="Experience" logo={stocks} appId="experience" />
                <SmallApp appName="Skills" logo={appStore} appId="skills" />
                <Folder appId="interestsFolder" name="Interests" contents={contents} />

            </div>
        </div>
    )
}

export default Folders