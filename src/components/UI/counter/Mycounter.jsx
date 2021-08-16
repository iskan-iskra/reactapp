import React from 'react'
import Classes from './Mycounter.module.scss'

const Mycounter = ({children, ...props}) => {
    
    return (
        <div className={Classes.myCtr}
            style={{backgroundColor: props.bgColor, color: props.txtColor}}>
            {children}
        </div>
    )
}

export default Mycounter
