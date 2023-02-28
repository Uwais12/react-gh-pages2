import React from 'react'
import { useState } from 'react';

const DockIcon = ({ img, link, caption }) => {
    return (
        <div className='dockIcon'>
            <a href={link}>
                <img src={img} className="dockIcons" />
            </a>
        </div>
    )
}

export default DockIcon