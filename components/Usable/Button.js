'use client'
import React from 'react'
import Loader from './Loader'

const variantClasses = {
    primary: 'bg-[#FFD101] text-black font-andreas font-bold hover:bg-[#FFFFFF] hover:text-black',
    secondary: 'bg-[#161616] text-white hover:bg-[#F0483E] hover:bg-opacity-10',
    danger: 'bg-red-500 text-white hover:bg-red-700'
}

const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    disabled = false,
    loading = false,
    className = ''
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`
                ${variantClasses[variant]}
                max-w-[150px]
                py-2
                w-full
                px-4
                transition-colors
                duration-300
                ${disabled || loading ? 'items-center justify-center h-12 flex cursor-not-allowed' : ''}
                ${className}
            `}
            disabled={disabled || loading}
        >
            {loading ? <Loader /> : children}
        </button>
    )
}

export default Button