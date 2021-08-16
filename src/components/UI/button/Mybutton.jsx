import React from 'react';
import Classes from './Mybutton.module.scss'

const Mybutton = ({children, ...props}) => {
    return(
        <button {...props} className={Classes.myBtn}>
            {children}
        </button>
    )
}

export default Mybutton