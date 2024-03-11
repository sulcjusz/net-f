import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom'

import Icon from '../index'

interface RenderIconProps {
  component: React.ElementType
  className?: string
  'data-testid'?: string
}

const renderIcon = ({
  component,
  className,
  'data-testid': testId = 'icon',
  ...props
}: RenderIconProps): {icon: HTMLElement} & RenderResult => {
  const utils = render(
    <Icon
      component={component}
      className={className}
      data-testid={testId}
      {...props}
    />
  )
  const icon = utils.getByTestId(testId)
  return {...utils, icon}
}

describe('Icon component', () => {
  it('should match the snapshot', () => {
    const {icon} = renderIcon({component: 'svg'})
    expect(icon.firstChild).toMatchSnapshot()
  })

  it('should render icon correctly', () => {
    const {icon} = renderIcon({
      component: 'svg',
      'data-testid': 'test-icon',
      className: 'custom-class'
    })
    expect(icon).toBeInTheDocument()
    expect(icon.tagName.toLowerCase()).toBe('svg')
    expect(icon).toHaveClass(
      'fill-current w-[1em] h-[1em] inline-block custom-class'
    )
  })

  it('should render icon with default class names if no className provided', () => {
    const {icon} = renderIcon({component: 'svg', 'data-testid': 'test-icon'})
    expect(icon).toHaveClass('fill-current w-[1em] h-[1em] inline-block')
  })

  it('should pass down props to the component', () => {
    const {icon} = renderIcon({component: 'svg', 'data-testid': 'test-icon'})
    expect(icon).toHaveAttribute('data-testid')
  })
})
