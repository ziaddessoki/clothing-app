import React from 'react'
import './formInput.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                //1-if label exsist make a label tag
                //label tag will always have formInputLabel class, but once user starts writing "shrink" will be added
                label && (<label className={`${otherProps.value.length && 'shrink'} form-input-label`}>
                    {label}
                </label>)
            }
        </div>
    )
}

export default FormInput
