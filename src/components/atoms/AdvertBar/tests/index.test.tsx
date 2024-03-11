import {render, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom'

import AdvertBar from '../index'
import {IAdvertBarProps} from '../types'

type AdvertBarRenderProps = Partial<IAdvertBarProps>

const renderAdvertBar = (
  props?: AdvertBarRenderProps
): {advertBar: HTMLElement} & RenderResult => {
  const utils = render(<AdvertBar {...props}>Example AdvertBar</AdvertBar>)
  const advertBar = utils.getByText('Example AdvertBar')
  return {...utils, advertBar}
}

describe('AdvertBar component', () => {
  it('should match the snapshot', () => {
    const {advertBar} = renderAdvertBar()
    expect(advertBar.firstChild).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const {advertBar} = renderAdvertBar()
    expect(advertBar).toBeInTheDocument()
    expect(advertBar).toHaveClass(
      'flex items-center justify-center px-6 py-4 bg-grey-300'
    )
    expect(advertBar).not.toHaveClass('bg-linear-gradient-primary')
  })

  it('renders correctly with custom className', () => {
    const {advertBar} = renderAdvertBar({className: 'custom-class'})
    expect(advertBar).toHaveClass('custom-class')
  })

  it('renders children correctly', () => {
    const {advertBar} = renderAdvertBar()
    expect(advertBar.textContent).toBe('Example AdvertBar')
  })
})
