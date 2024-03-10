import React from 'react'
import Icon from './index'
import Pause from '../../../assets/icons/Pause.svg'
interface PauseIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const PauseIcon: React.FC<PauseIconProps> = ({className, ...props}) => (
  <Icon
    {...props}
    component={() => <img src={Pause} />}
    className={className}
  />
)

export default PauseIcon
