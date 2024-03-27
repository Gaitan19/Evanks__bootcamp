import PropTypes from "prop-types"
import Button from "../Button"
import Image from "next/image"

const Card = (props) => {
  const {
    img,
    title,
    description,
    link,
    alt

  } = props


  return (
    <div className="card">
      <div className="card-header">

        <Image width={200} height={200} src={img} alt={alt} className="img" />
        <h2 className="title">{title}</h2>
      </div>

      <div className="card-content">
        <p className="description">{description}</p>
        <span className="divider"/>
        <Button link={link} customClass="button" textButton="Read More" target="_blank"/>
      </div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: '',
  description: '',
}


export default Card
