import React from 'react'
import classnames from 'classnames'
import {IChipProps} from './types'

const Chip: React.FC<IChipProps> = ({
  size = 'medium',
  textColor = 'black',
  className,
  children
}) => {
  const buttonClasses = classnames(
    'rounded-xl border border-grey-dark font-exo leading-5 tracking-[.07em] text-center flex items-center justify-center',
    {
      'text-base py-2 px-3': size === 'small',
      'text-xl py-3 px-4 font-exo text-xs font-medium leading-6  text-center':
        size === 'medium',
      'text-grey-600': textColor === 'black',
      'text-whitw': textColor === 'white'
    },
    className
  )

  return <div className={buttonClasses}>{children}</div>
}

export default Chip
