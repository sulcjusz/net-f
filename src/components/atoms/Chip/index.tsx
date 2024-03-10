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
    'rounded-xl border border-grey-dark font-exo text-[12px] leading-4 tracking-[.07em] text-center flex items-center justify-center',
    {
      'w-[133.07px] h-[44.1px] ': size === 'small',
      'w-[163px] h-[53.53px] font-medium': size === 'medium',
      'text-grey-600': textColor === 'black',
      'text-white': textColor === 'white'
    },
    className
  )

  return <div className={buttonClasses}>{children}</div>
}

export default Chip
