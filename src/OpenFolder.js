import React from 'react'

export const OpenFolder = ({ appId, title, body }) => {

    function handleClick() {
        document.getElementById(appId).style.display = 'none'
    }

    return (
        <div id={appId} className='folderDisplay'>
        <div className='folderNav'>
            <div className='windowControls red' onClick={handleClick}></div>
            <div className='windowControls yellow' onClick={handleClick}></div>
            <div className='windowControls green' onClick={handleClick}></div>
        </div>
        <div className='innerFolder'>
            <h1>
                {title}
            </h1>
            {body}
        </div>
    </div>


//         <div id={appId} className='folderDisplay'>
//  <div className='folderNav'>
//                     <div className='windowControls red' onClick={handleClick}></div>
//                      <h2>
//                         {title}
//                     </h2>
//                 </div>
//             <div className='innerFolder'>
               
//                 <div>
//                     <div className='folderCont'>
//                         <div className='folderIcon'>
//                             {body[1]}
//                         </div>
//                         <caption> {body[0]}</caption>
//                     </div>
//                     <div className='folderCont'>
//                         <div className='folderIcon'>
//                             {body[3]}
//                         </div>
//                         <caption> {body[2]}</caption>
//                     </div>
//                 </div>
//                 <div>
//                     <div className='folderCont'>
//                         <div className='folderIcon'>
//                             {body[5]}
//                         </div>
//                         <caption> {body[4]}</caption>
//                     </div>
//                     <div className='folderCont'>
//                         <div className='folderIcon'>
//                             {body[7]}
//                         </div>
//                         <caption> {body[6]}</caption>
//                     </div>
//                 </div>



//             </div>
           
//         </div>
    )
}

export default OpenFolder