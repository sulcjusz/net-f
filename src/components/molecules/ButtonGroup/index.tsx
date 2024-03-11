import React from 'react'
import {IButtonGroupProps} from './types'

const ButtonGroup: React.FC<IButtonGroupProps> = ({children}) => (
  <div className="flex space-x-4" data-testid="buttonGroup">
    {children}
  </div>
)

export default ButtonGroup
