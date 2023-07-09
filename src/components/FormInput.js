import React from 'react'
import Button from './Button'
import '../styles/FormInput.css'

class FormInput extends React.Component{
    state = {
        text : ""
    }
    tambahData = e => {
        this.setState({ text: e.target.value })
    }

    submit = e => {
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.tambah(this.state.text)
        }
        this.setState({
            text: ""
        })
    }
    render(){
        return(
            <form style={inputForm} onSubmit={this.submit}>
                <input 
                placeholder="Input Task" 
                style={input} 
                value={this.state.text}
                type="text" 
                onChange={this.tambahData}
                />
                <Button text="Add" variants="primary" action={this.submit}/>
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
    margin: "0.5rem 0",
    borderRadius: "5px",
    border:"solid black 1px"
}

const input = {
    width : "70%",
    border : "none",

}