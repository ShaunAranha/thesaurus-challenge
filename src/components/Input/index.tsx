
import type {InputHTMLAttributes} from 'react'


const Input = ({
    children, 
    className, 
    type,
    ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            type={type}
            className={className}
            {...rest}
        >
            {children}
        </input>
    )
}

export default Input