import React from 'react'
import {IButtonGroupProps} from './types'

const ButtonGroup: React.FC<IButtonGroupProps> = ({children}) => (
  <div className="flex space-x-4">
    {React.Children.map(children, (child, index) => (
      <React.Fragment key={index}>{child}</React.Fragment>
    ))}
  </div>
)

export default ButtonGroup
