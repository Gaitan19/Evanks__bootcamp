import PropTypes from "prop-types"

const Card = (props) => {
  const {
    textCard,
    typeMode

  } = props

  const mode = typeMode === 'light' ? 'light' : 'dark';

  return (
    <div className="card">
      <div className={`effect card-${mode}`}></div>
      <p className={`text-position text-${mode}`}>{textCard}</p>
    </div>
  )
}

Card.propTypes = {
  textCard: PropTypes.string.isRequired,
  typeMode: PropTypes.oneOf(['light', 'dark'])
}

Card.defaultProps = {
  typeMode: 'dark'
}

export default Card
