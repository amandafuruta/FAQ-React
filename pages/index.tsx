import HomeStyle from '../pages/styles/index'
// import FAQComponent from './components/faqComponent'
import FAQStyle from '../pages/styles/faq'

import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { useState } from 'react'


const faq = [
  {title:"Lorem ipsum dolor sit amet?", content:"Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."},
  {title:"Dignissimos sequi architecto?", content:"Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."},
  {title:"Voluptas praesentium facere?", content:"Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."}
]

export default function Home() {
  const [ pressed, setPressed ] = useState(-1)

  function Press(index){
    setPressed(index)

    if(pressed === index) {
      setPressed(-1)
    }
  }

  return (
   <HomeStyle>
     <div className='content'>
       <h1>FAQ HELP SECTION</h1>

       <div>
         {
          faq.map((item, index) => {
            return(
              <FAQStyle>
                <button onClick={()=> Press(index)} className={ pressed === index? "lightbg" : "darkbg"}>
                    {item.title}
                    {pressed === index? <BiMinus color={"#fff"} size={30}/>  :  <BsPlusLg color={"#fff"}/>}
                </button>

                <div className={ pressed === index? "txt visible" : "txt notVisible"} >{item.content} </div>
              </FAQStyle>
              // <FAQComponent id={index} title={item.title} content={item.content}/>
            )
          })
         }
       </div>
     </div>
   </HomeStyle>
   
  )
}

