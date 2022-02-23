import PropTypes from 'prop-types';

const Footer = ({title, color}) => {
  return (
    <footer>
      <span style={spanSyles}>
        {title}
      </span>
      <button style={{color: color}}>button</button>
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
