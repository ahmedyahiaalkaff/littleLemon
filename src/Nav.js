import {NavLink} from 'react-router-dom';
import links from './navlinks'

function Nav(){
  return (
  <nav>
    <ul>
      {links.map(l => <NavLink to={l.path} key={l.path} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>{l.name}</NavLink>)}
      {/* <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/booking">Reservations</Link></li>
      <li><Link to="/order-online">Order Online</Link></li>
      <li><Link to="/login">Login</Link></li> */}
    </ul>
  </nav>
  )
}

export default Nav;