import {render, fireEvent, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from '../index'
import {IButtonProps} from '../types'

type ButtonRenderProps = Partial<IButtonProps>

const renderButton = (
  props?: ButtonRenderProps
): {button: HTMLElement} & RenderResult => {
  const utils = render(<Button {...props}>Click me</Button>)
  const button = utils.getByText('Click me')
  return {...utils, button}
}

describe('Button component', () => {
  it('should match the snapshot', () => {
    const {button} = renderButton()
    expect(button.firstChild).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const {button} = renderButton()
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('text-base py-3 px-8')
    expect(button).not.toHaveClass(
      'text-grey-600 bg-grey-200 font-exo font-semibold'
    )
  })

  it('renders correctly with isActive prop', () => {
    const {button} = renderButton({disabled: true})
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'text-grey-600 bg-grey-200 font-exo font-semibold'
    )
    expect(button).toHaveAttribute('disabled')
  })

  it('triggers onClick event', () => {
    const onClickMock = jest.fn()
    const {button} = renderButton({onClick: onClickMock})
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('renders children correctly', () => {
    const {button} = renderButton()
    expect(button.textContent).toBe('Click me')
  })
})
