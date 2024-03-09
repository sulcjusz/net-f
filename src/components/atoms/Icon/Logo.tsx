import React from 'react'
import Icon from './index'
import Logo from '../../../assets/icons/Logo.svg'
interface LogoIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const LogoIcon: React.FC<LogoIconProps> = ({className, ...props}) => (
  <Icon {...props} component={() => <img src={Logo} />} className={className} />
)

export default LogoIcon
