import '../assets/css/nav.css'
import {Link} from 'react-router-dom';
function Nav() {

  return (
		<>
		{/* style={{backgroundColor:'#000', height:'50px', display: 'flex', justifyContent: 'center',width: '100%',position: 'absolute'}} */}
		<nav className='bg-blue-800'>
			<ul>
        <li><Link to="/index">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
			</ul>
    </nav>
		</>
  )
}

export default Nav