import React from 'react'
import Icon from './index'
import PauseVideoIcon from '@mui/icons-material/Pause'

interface PauseIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const PauseIcon: React.FC<PauseIconProps> = ({className, ...props}) => (
  <Icon {...props} component={PauseVideoIcon} className={className} />
)

export default PauseIcon
