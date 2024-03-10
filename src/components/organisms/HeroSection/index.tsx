import React from 'react'
import classnames from 'classnames'
import VideoPlayer from '../VideoPlayer'
import {IHeroSectionProps} from './types'

const HeroSection: React.FC<IHeroSectionProps> = ({
  url,
  children,
  className
}) => {
  const heroSectionClasses = classnames('items-start  flex flex-col', className)

  return (
    <div className={heroSectionClasses}>
      <div className="flex items-start  w-full h-full">
        <div className="flex-grow  w-full">
          <VideoPlayer url={url}>{children}</VideoPlayer>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
