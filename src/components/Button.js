import React from 'react'
import '../styles/Button.css'
const Button = props => {
  return (
    <button className={`btn btn-${props.variants}`}>{props.text}</button>
  )
}

export default Button