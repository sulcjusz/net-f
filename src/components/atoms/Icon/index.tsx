import React from 'react'
import classnames from 'classnames'

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  component: React.ElementType
  className?: string
}

const Icon: React.FC<IconProps> = ({
  component: Component,
  className,
  ...props
}) => (
  <Component
    className={classnames(
      'fill-current w-[1em] h-[1em] inline-block',
      className
    )}
    {...props}
  />
)

export default Icon
