import { useState } from 'react'
import FAQStyle from '../styles/faq';

import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";


export default function FAQComponent(props){
    const [ pressed, setPressed ] = useState(false)

    return(
        <FAQStyle>
            <button onClick={()=> setPressed(!pressed)} style={{backgroundColor: pressed? "#105057" : "#008593"}}>
                {props.title}
                {pressed? <BsPlusLg color={"#fff"}/> : <BiMinus color={"#fff"} size={30}/>}
            </button>

            <div className='txt' style={{display: pressed? "flex" : "none"}}>{props.content} </div>
        </FAQStyle>
    )
}

