import React from 'react';
import Classes from './Myicon.module.scss'

const Myicon = (props) => {
    const myClass = [Classes.myIcn,Classes.mainLogo];
    if(props.signal){
        myClass.slice(Classes.mainLogo)
        myClass.push(Classes.alterMainLogo)
    }

    return (
        <div className={myClass.join(' ')} style={{boxShadow: `0 0 50px ${props.brdColor}`}}>
            
        </div>
    );
};

export default Myicon;