import PropTypes from "prop-types"
import { Fragment } from "react"


const Container = (props) => {
  const {
    children
  } = props
  return (
    <div className="container">{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

Container.defaultProps = {
  children: <Fragment></Fragment>
}

export default Container

