import React from 'react'
import classNames from 'classnames'
import {IAdvertBarProps} from './types'

const AdvertBar: React.FC<IAdvertBarProps> = ({children, className}) => (
  <>
    <div
      className={classNames(
        'flex items-center justify-center px-6 py-4 bg-grey-300 ',
        className
      )}
    >
      {children}
    </div>
    <div className="min-h-[9px] bg-linear-gradient-primary"></div>
  </>
)

export default AdvertBar
