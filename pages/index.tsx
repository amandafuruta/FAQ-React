import styled from 'styled-components'
import FAQComponent from './components/faqComponent'

const faq = [
  {title:"Lorem ipsum dolor sit amet?", content:"Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."},
  {title:"Dignissimos sequi architecto?", content:"Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."},
  {title:"Voluptas praesentium facere?", content:"Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."}
]

export default function Home() {
  return (
   <HomeStyle>
     <div className='content'>
       <h1>FAQ HELP SECTION</h1>

       <div>
         {
          faq.map((item, index) => {
            return(
              <FAQComponent id={index} title={item.title} content={item.content}/>
            )
          })
         }
       </div>
     </div>
   </HomeStyle>
   
  )
}

const HomeStyle = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content{
    max-width: 580px;
    width: 100%;

    h1{
      color: #554E44;
      font-size: 23px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-bottom: 20px;
    }
  }

`
