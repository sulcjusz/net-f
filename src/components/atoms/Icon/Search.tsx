import React from 'react'
import Icon from './index'
import MuiSearchIcon from '@mui/icons-material/Search'
interface PersonIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const SearchIcon: React.FC<PersonIconProps> = ({className, ...props}) => (
  <Icon {...props} component={MuiSearchIcon} className={className} />
)

export default SearchIcon
