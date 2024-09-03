import React from 'react'
import type { SectionProps } from '../../../types/index.ts'
export const Section:React.FC<SectionProps> = ({children, className}) => {
  return (
    <div className={`section ${className}`}>
      {children}
    </div>
  )
}
