import React from 'react'
import classNames from 'classnames'

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
    className={classNames(
      'fill-current w-[1em] h-[1em] inline-block',
      className
    )}
    {...props}
  />
)

export default Icon
