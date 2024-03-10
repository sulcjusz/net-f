import React from 'react'
import Icon from './index'
import Play from '../../../assets/icons/Play.svg'
interface PlayIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const PlayIcon: React.FC<PlayIconProps> = ({className, ...props}) => (
  <Icon {...props} component={() => <img src={Play} />} className={className} />
)

export default PlayIcon
