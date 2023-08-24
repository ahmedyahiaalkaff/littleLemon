
import './index.css';

function Button ({link, children}){
  return <a href={link} className="button" role="button">{children}</a> 
}

export default Button;