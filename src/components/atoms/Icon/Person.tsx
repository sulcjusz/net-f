import React from 'react'
import Icon from './index'
import MuiPersonIcon from '@mui/icons-material/Person'
interface PersonIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const PersonIcon: React.FC<PersonIconProps> = ({className, ...props}) => (
  <Icon {...props} component={MuiPersonIcon} className={className} />
)

export default PersonIcon
