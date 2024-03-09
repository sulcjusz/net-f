import React from 'react'
import Icon from './index'
import MuiShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
interface BasketIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const BasketIcon: React.FC<BasketIconProps> = ({className, ...props}) => (
  <Icon
    {...props}
    component={MuiShoppingCartCheckoutIcon}
    className={className}
  />
)

export default BasketIcon
