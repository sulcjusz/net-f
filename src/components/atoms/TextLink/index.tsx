import React from 'react'
import classnames from 'classnames'
import {ITextLinkProps} from './types'

const TextLink: React.FC<ITextLinkProps> = ({text, onClick, className}) => {
  const linkClasses = classnames('text-blue-800 cursor-pointer', className)

  return (
    <span className={linkClasses} onClick={onClick}>
      {text}
    </span>
  )
}

export default TextLink
