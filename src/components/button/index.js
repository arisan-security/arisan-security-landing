import React from "react";
import BaseButton from "./base";
const Button = ({variant='filled', children, className=''}) => {
    const variants = {
        'filled': `
            text-white 
            bg-light-blue 
            hover:bg-white
            hover:text-light-blue 
            hover:outline-none 
            hover:ring-4 
            hover:ring-blue-300
            border
            border-light-blue 
            font-medium 
            rounded-full 
            text-sm 
            px-5 
            py-2.5 
            text-center 
            cursor-pointer 
            shadow-md
        `,
    }
    return (
        <div className={`${className} ${variants[variant]}`}>
            <BaseButton>{children}</BaseButton>
        </div>
    )
}

export default Button;