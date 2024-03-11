import React from 'react'
import classnames from 'classnames'
import {IIconButtonProps} from './types'

const IconButton: React.FC<IIconButtonProps> = ({
  onClick,
  disabled = false,
  size = 'medium',
  icon,
  className
}) => {
  const buttonClasses = classnames(
    'rounded-full border border-grey-medium font-exo leading-5 tracking-[.07em] text-center',
    {
      'text-grey-400 bg-grey-200 font-semibold': disabled,
      'text-grey-400 bg-grey-300 font-medium hover:bg-opacity-50 hover:border-grey-medium':
        !disabled,
      'text-base p-2': size === 'small',
      'text-xl p-4': size === 'medium',
      'pointer-events-none': disabled
    },
    className
  )

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  )
}

export default IconButton
