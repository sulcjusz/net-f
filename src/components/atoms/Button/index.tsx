import React from 'react'
import classnames from 'classnames'
import {IButtonProps} from './types'

const Button: React.FC<IButtonProps> = ({
  onClick,
  size = 'medium',
  disabled = false,
  className,
  children
}) => {
  const buttonClasses = classnames(
    'rounded-md border border-grey-medium font-exo leading-[18.61px] tracking-[.07em] text-center flex items-center justify-center',
    {
      'text-grey-600 bg-grey-200 font-exo font-semibold': disabled,
      'text-grey-600 bg-grey-300 font-medium hover:bg-opacity-50 hover:border-grey-medium':
        !disabled,
      'text-sm py-2 px-7': size === 'small',
      'text-base py-3 px-8': size === 'medium',
      'pointer-events-none': disabled
    },
    className
  )

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
