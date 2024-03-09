import React from 'react'
import classnames from 'classnames'
import {IIconButtonProps} from './types'

const IconButton: React.FC<IIconButtonProps> = ({
  onClick,
  isActive = false,
  size = 'medium',
  icon,
  className
}) => {
  const buttonClasses = classnames(
    'rounded-full border border-grey-medium font-exo leading-5 tracking-[.07em] text-center',
    {
      'text-grey-400 bg-grey-200 font-semibold': isActive,
      'text-grey-400 bg-grey-300 font-medium hover:bg-opacity-50 hover:border-grey-medium':
        !isActive,
      'text-base py-2 px-2': size === 'small',
      'text-xl py-4 px-4': size === 'medium',
      'pointer-events-none': isActive
    },
    className
  )

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon}
    </button>
  )
}

export default IconButton
