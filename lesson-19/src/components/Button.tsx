import type { Children, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  [key: string]: any;
}

const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <button onClick={() =>{ alert("Clicked!") }} {...rest}>
            {children}
        </button>
    )
}

export default Button;