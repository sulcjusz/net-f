import {render, fireEvent, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom'

import IconButton from '../index'
import {IIconButtonProps} from '../types'

const renderIconButton = ({
  onClick,
  disabled = false,
  size = 'medium',
  icon,
  className
}: IIconButtonProps): {button: HTMLElement} & RenderResult => {
  const utils = render(
    <IconButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      icon={icon}
      className={className}
    />
  )
  const button = utils.getByRole('button')
  return {...utils, button}
}

describe('IconButton component', () => {
  it('should match the snapshot', () => {
    const {button} = renderIconButton({
      icon: <svg />
    })
    expect(button).toMatchSnapshot()
  })

  it('should render icon button correctly', () => {
    const {button} = renderIconButton({
      icon: <svg />
    })
    expect(button).toBeInTheDocument()
    expect(button.tagName.toLowerCase()).toBe('button')
    expect(button).toHaveClass(
      'rounded-full border border-grey-medium font-exo leading-5 tracking-[.07em] text-center text-xl p-4'
    )
  })

  it('should apply custom class name', () => {
    const {button} = renderIconButton({
      icon: <svg />,
      className: 'custom-class'
    })
    expect(button).toHaveClass('custom-class')
  })

  it('should trigger onClick event', () => {
    const onClickMock = jest.fn()
    const {button} = renderIconButton({
      icon: <svg />,
      onClick: onClickMock
    })
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should render icon with isActive style when isActive is true', () => {
    const {button} = renderIconButton({
      icon: <svg />,
      disabled: true
    })
    expect(button).toHaveClass('text-grey-400 bg-grey-200 font-semibold')
  })

  it('should render icon with default style when isActive is false', () => {
    const {button} = renderIconButton({
      icon: <svg />,
      disabled: false
    })
    expect(button).toHaveClass(
      'text-grey-400 bg-grey-300 font-medium hover:bg-opacity-50 hover:border-grey-medium'
    )
  })

  it('should render icon with disabled style when disabled is true', () => {
    const {button} = renderIconButton({
      icon: <svg />,
      disabled: true
    })
    expect(button).toHaveClass('text-grey-400 bg-grey-200 font-semibold')
  })

  it('should render small size icon button', () => {
    const {button} = renderIconButton({
      icon: <svg />,
      size: 'small'
    })
    expect(button).toHaveClass('text-base p-2')
  })

  it('should render medium size icon button', () => {
    const {button} = renderIconButton({
      icon: <svg />,
      size: 'medium'
    })
    expect(button).toHaveClass('text-xl p-4')
  })
})
