import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';


const Footer = ({title, color}) => {
  const location = useLocation();

  return (
    <footer>
      <span style={spanSyles}>
        {title}
      </span>
      <button style={{color: color}}>button</button>
      <Link to="/about">About</Link>
      {location.pathname === '/' && <h2>useLocation</h2>}
    </footer>
  )
}

Footer.defaultProps = {
  title: 'Task Tracker',
  color: 'orange',
}

Footer.propTypes  = {
  title: PropTypes.string.isRequired
}

const spanSyles = {
  color: 'green',
  background: 'red'
}

export default Footer
