import React from 'react'
import Button from './Button'
import '../styles/EditModal.css'

class EditModal extends React.Component {
    
    render() {
        const {edit,tutup,data,change,update} = this.props
        if (edit) {
            return (
                <div className="container">
                    <div className="modal-box">
                        <h3>Edit Task</h3>
                        <div className="input">
                            <input type="text" value={data.tittle} onChange={change}/>
                        </div>
                        <div className="btn-group">
                            <Button text="Edit" variants="primary" action={update}/>
                            <Button text="Cancel" variants="warning" action={tutup}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default EditModal