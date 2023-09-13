import React from 'react'
import diamond from './content/logoW.svg'

export default function Logo({opac, type, clicked}) {
    let style = {};
    let cont = '';
    let pSize, hSize, pSpace;
    switch (type) {
        case 'home':
            cont = 'logoCenter';
            // style.position = 'absolute';
            // style.left = '50%';
            // style.top = '50%';
            // style.transform = 'translate(-50%, -50%)';
            style.height = 'clamp(35px, 10vw, 70px)';
            style.color = 'white';
            style.cursor = 'default';
            pSize = 'clamp(0.6rem, 2vw, 1rem)'
            pSpace = 'clamp(7px, 2vw, 12px)'
            hSize = 'clamp(1.2rem, 5vw, 2.1rem)'
            break;
        case 'nav':
            style.height = '40px';
            style.cursor = 'pointer';
            pSize = '0.7rem'
            hSize = '1.3rem'
            break;
        }
    style.opacity = opac;
  return (
    <div className={cont}>
        {(type==='home') ? <div className="homeBlur" style={{opacity: opac}}></div> : <></> }
        <div className="logo" onClick={clicked} style={style}>
            <img id='logoImg' src={diamond} alt="" />
            <div className="logoText">
                <h3 style={{fontSize: hSize}}>Carat Haus</h3>
                <span style={{fontSize: pSize, letterSpacing: pSpace}}>LONDON</span>
            </div>
        </div>
    </div>
  )
}
