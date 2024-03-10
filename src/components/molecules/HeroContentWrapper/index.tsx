import React from 'react'
import {IHeroContentWrapper} from './types'

const HeroContentWrapper: React.FC<IHeroContentWrapper> = ({children}) => (
  <div className="absolute bottom-[200px] left-0 right-0 flex flex-col justify-center items-center">
    <div className="flex flex-col items-start justify-self-center max-w-[80%]">
      {children}
    </div>
  </div>
)

export default HeroContentWrapper
