
import Button from '../Button'
import cardsData from './cardsData';
import Card from '../Card'

function Heighlights(){
  return (
  <section className="heighlights">
    <header>
      <h1>Specials</h1>
      <Button link="#orderOnline">Online Menu</Button>
    </header>
    <article>
      {cardsData.map((c)=>{
        return <Card title={c.title} price={c.price} description={c.description} imgURL={c.imgURL} key={c.title}/>
      })}
    </article>
  </section>
  )
}

export default Heighlights;