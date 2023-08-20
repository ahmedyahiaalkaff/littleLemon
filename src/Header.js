
import Nav from './Nav';
import Logo from './images/logo.svg'

function Header(){
  return (<header>
    <img src={Logo} alt="Logo" />
    <Nav />
  </header>)
}

export default Header;