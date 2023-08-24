import resturantFood from './images/restauranfood.jpg';
import Button from './Button';

function HeroSection(){
  return (
    <div className="heroSection container">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button link="#reserve">
          Reserve a Table
        </Button>
      </div>
      <div></div>
      <div>
        <img src={resturantFood} alt="Resturant Food" />
      </div>
    </div>
  )
}

export default HeroSection;