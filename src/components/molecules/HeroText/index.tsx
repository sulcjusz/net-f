import React from 'react'
import classnames from 'classnames'
import Chip from '../../atoms/Chip'
import {IHeroTextProps} from './types'

const HeroText: React.FC<IHeroTextProps> = ({title, children, className}) => {
  const heroTextClasses = classnames(
    'items-start px-2 py-5 flex flex-col justify-around ',
    className
  )
  return (
    <div className={heroTextClasses}>
      <div className="flex flex-col items-start space-y-10 py-8 h-full justify-around">
        <div className="flex-grow">
          <Chip
            size="small"
            textColor="white"
            className="bg-grey-300 bg-opacity-[19%]"
          >
            {title}
          </Chip>
        </div>
        <div className="flex-grow items-start">{children}</div>
      </div>
    </div>
  )
}

export default HeroText
