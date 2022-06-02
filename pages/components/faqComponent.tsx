import { useState } from 'react'
import styled from 'styled-components'

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

const FAQStyle = styled.div`
    max-width: 580px;
    width: 100%;

    button{
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        padding: 18px 20px;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .txt{
        background-color: #f7f7f7;
        padding: 20px;
        color: #554E44;
        font-size: 16px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`