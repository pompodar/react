import PropTypes from 'prop-types';

const Footer = ({title}) => {
  return (
    <footer>
      <span>
        {title}
      </span>
    </footer>
  )
}

// Footer.defaultProps = {
//   title: 'Task Tracker',
// }

Footer.propTypes  = {
  title: PropTypes.string.isRequired
}

export default Footer
