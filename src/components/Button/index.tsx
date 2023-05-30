import type { ButtonHTMLAttributes } from "react";


const Button = ({
    children, 
    className, 
    type, 
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            type={type || 'button'}
            className={className}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button