import type { LabelHTMLAttributes } from "react";


const Label = ({
    children,
    className,
    id,
    ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label
            htmlFor={id}
            className={className}
            {...rest}
        >
            {children}
        </label>
    )
}

export default Label