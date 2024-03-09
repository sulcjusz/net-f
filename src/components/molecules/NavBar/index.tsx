import React from 'react'
import classNames from 'classnames'
import {INavBarProps} from './types'

const NavBar: React.FC<INavBarProps> = ({
  centerSlot,
  className,
  leftSlot,
  rightSlot
}) => (
  <div
    className={classNames(
      'grid grid-cols-3 items-center px-20 py-5 bg-grey-100',
      className
    )}
  >
    <div className="justify-self-center">{leftSlot}</div>
    <div className="justify-self-center">{centerSlot}</div>
    <div className="justify-self-center">{rightSlot}</div>
  </div>
)

export default NavBar
