import React from 'react'
import Button from './Button'
import '../styles/FormInput.css'

class FormInput extends React.Component{
    render(){
        return(
            <form style={inputForm}>
                <input placeholder="Input Task" style={input} type="text"/>
                <Button text="Add" variants="primary"/>
            </form>
        )
    }
}

export default FormInput

const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width : "70%",
    border : "none",

}