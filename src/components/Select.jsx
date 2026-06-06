import React, {useId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='form-group'>
        {label && <label htmlFor={id} className='form-label'>{label}</label>}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`form-control ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)