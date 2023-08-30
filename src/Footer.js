import {Link} from 'react-router-dom';

import Logo from './images/logo.svg'
import links from './navlinks'

function Footer(){
  return (
  <footer>
    <img src={Logo} alt="logo" />
    <nav>
      <article>
        <h4>Doormat Navigation</h4>
        <ul>
        {links.map(l => <li key={l.path}><Link to={l.path}>{l.name}</Link></li>)}
          {/* <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Reservations</a></li>
          <li><a href="#orderOnline">Order Online</a></li>
          <li><a href="#login">Login</a></li> */}
        </ul>
      </article>
      <article>
        <h4>Contact</h4>
        <ul>
          <li><a href="#address">Address</a></li>
          <li><a href="#phoneNumber">Phone Number</a></li>
          <li><a href="#email">Email</a></li>
        </ul>
      </article>
      <article>
        <h4>Social Media</h4>
        <ul>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#twitter">Twitter</a></li>
        </ul>
      </article>
    </nav>
  </footer>
  )
}

export default Footer;