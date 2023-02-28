import React from "react";
import docxIcon from './images/macDocxIcon.png'

const SmallApp = ({ appName, logo = appName, appId }) => {
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
        <div className="smallApp" onClick={handleClick}>

            {window.innerWidth <= 639 ?
                // <div className="appLogo">
                <img className="appLogo" src={logo} />
                // </div>
                :
                <img className="docxIcon" src={docxIcon} />
            }

            <div className="appName">
                {appName}
            </div>
        </div>
    )
}

export default SmallApp