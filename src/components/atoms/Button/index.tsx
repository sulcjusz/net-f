import React from 'react'
import classnames from 'classnames'
import {IButtonProps} from './types'

const Button: React.FC<IButtonProps> = ({
  onClick,
  size = 'medium',
  isActive = false,
  className,
  children
}) => {
  const buttonClasses = classnames(
    'rounded-md border border-grey-medium font-exo leading-5 tracking-[.07em] text-center flex items-center justify-center',
    {
      'text-grey-600 bg-grey-200 font-exo font-semibold': isActive,
      'text-grey-600 bg-grey-300 font-medium hover:bg-opacity-50 hover:border-grey-medium':
        !isActive,
      'text-base py-2 px-7': size === 'small',
      'text-xl py-3 px-8': size === 'medium',
      'pointer-events-none': isActive
    },
    className
  )

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
