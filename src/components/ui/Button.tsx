import React from 'react'
import type { ButtonProps } from '../../../types/index.ts'
import './style.css'

export const Button:React.FC<ButtonProps> = ({children, className, type, text, onClick}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={() => onClick()}>
        {children ? children : (text ? text : 'Button')}
    </button>
  )
}
