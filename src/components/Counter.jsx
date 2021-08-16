import React, { useState } from 'react';
import Mybutton from './UI/button/Mybutton';
import Mycounter from './UI/counter/Mycounter';
import Myicon from './UI/icon/Myicon';
import { dataAboutMe } from './utilites/Mydata'

const Counter = () => {


    const [count,setCount] = useState(0);
    const [bgColor,setbgColor] = useState("rgb(145, 102, 140)")
    const [txtColor, settxtColor] = useState("rgb(255,255,255)")
    const countLimits = {upper:100,
                        lower:-100};
    const lightColors = ["#F5F5F5" ,
                        "#FFD700",
                        "#EE82EE",
                        "#32CD32",
                        "#DC143C",
                        "#FF8C00"];
    const darkColors = ["#6A5ACD",
                        "#20B2AA", 
                        "#778899",
                        "rgb(145, 102, 140)"];
    const someColors = lightColors.concat(darkColors);


    function changeColor(){
        let whithoutChosenColor = someColors.filter((el)=>{return el !== bgColor});
        let random = Math.floor(Math.random() * whithoutChosenColor.length);
        let randomColor = whithoutChosenColor[random]
        
        if (lightColors.includes(randomColor)){
                settxtColor("rgb(0,0,0)")
        }
        else {settxtColor("rgb(255,255,255)")}

        setbgColor(randomColor)
    }


    function increment(){
        if (count<countLimits.upper){
            setCount(count+1)
            changeColor()
        }
    }


    function decrement(){
        if (count>countLimits.lower){
            setCount(count-1)
            changeColor()
        }
    }


    const specialCount = [countLimits.lower, countLimits.upper, dataAboutMe.day, dataAboutMe.month, dataAboutMe.year%100]
    let signal = false;
    if (specialCount.includes(count)){
        signal =true
    }


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
            <Myicon signal={signal} brdColor={bgColor} />
            <div style={{display: "flex", marginTop: "20px", fontWeight: "bold"}}>
                <Mybutton onClick={decrement}>-</Mybutton>
                <Mycounter bgColor={bgColor} txtColor={txtColor}>{count}</Mycounter>
                <Mybutton onClick={increment}>+</Mybutton>
            </div>
        </div>
        
    );
};

export default Counter;