import React from 'react'
import Icon from './index'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface PersonIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const PlayIcon: React.FC<PersonIconProps> = ({className, ...props}) => (
  <Icon {...props} component={PlayArrowIcon} className={className} />
)

export default PlayIcon
