import React from 'react'
import '../styles/Button.css'
import PropTypes from "prop-types"
const Button = ({text,variants,action}) => {
  return (
    <button className={`btn btn-${variants}`} onClick={action}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variants: PropTypes.string.isRequired,
  action : PropTypes.func.isRequired
}
export default Button