import React from 'react'
import type { ContainerProps } from '../../../types/index.ts'

export const Container:React.FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}
