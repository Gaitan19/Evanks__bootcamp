import PropTypes from "prop-types"

const Button = (props) => {
    const {
        link,
        customClass,
        target,
        textButton
    } = props
    
  return (
    <a className={customClass} href={link} target={target}>{textButton}</a>
  )
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
    customClass: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank','_self','_parent','_top']),
    textButton: PropTypes.string
}

Button.defaultProps = {
    textButton: '',
    target: '_blank'
}
export default Button