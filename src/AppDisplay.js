import React from 'react'
export const AppDisplay = ({ appId, title, body }) => {

    function handleClick() {
        document.getElementById(appId).style.display = 'none'
    }

    return (
        <div id={appId} className='appDisplay'>
            <div className='appNav'>
                <div className='windowControls red' onClick={handleClick}></div>
                <div className='windowControls yellow' onClick={handleClick}></div>
                <div className='windowControls green' onClick={handleClick}></div>
            </div>
            <div className='innerApp'>
                <h1>
                    {title}
                </h1>
                {body}
            </div>
        </div>
    )
}

export default AppDisplay