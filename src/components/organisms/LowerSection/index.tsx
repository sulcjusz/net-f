import React from 'react'
import classnames from 'classnames'
import Chip from '../../atoms/Chip'
import {ILowerSectionProps} from './types'

const LowerSection: React.FC<ILowerSectionProps> = ({
  title,
  children,
  seeMoreText = 'SEE MORE',
  onSeeMoreClick,
  className
}) => {
  const lowerSectionClasses = classnames(
    'items-center px-2 py-5 bg-grey-100  w-full min-h-[356px] flex flex-col justify-around ',
    className
  )
  // absolute bottom-0 left-0
  return (
    <div className={lowerSectionClasses}>
      <div className="flex flex-col items-center space-y-10 py-8 h-full justify-around">
        <div className="flex-grow">
          <Chip>{title}</Chip>
        </div>
        <div className="flex-grow">{children}</div>
        <div className="flex-grow">
          <p
            className="cursor-pointer underline underline-offset-4 font-inter text-sm
                    font-semibold leading-17 tracking-[0.07em] text-grey-600 hover:opacity-60"
            onClick={onSeeMoreClick}
          >
            {seeMoreText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LowerSection