import {render, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonGroup from '../index'
import {IButtonGroupProps} from '../types'

type ButtonGroupRenderProps = Partial<IButtonGroupProps>

const renderButtonGroup = (
  props?: ButtonGroupRenderProps
): RenderResult & {buttonGroup: HTMLElement} => {
  const renderResult = render(
    <ButtonGroup {...props}>
      <button>Button 1</button>
      <button>Button 2</button>
    </ButtonGroup>
  )
  const buttonGroup = renderResult.getByTestId('buttonGroup')
  return {...renderResult, buttonGroup}
}

describe('ButtonGroup component', () => {
  it('should match the snapshot', () => {
    const {buttonGroup} = renderButtonGroup()
    expect(buttonGroup.firstChild).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    const {buttonGroup} = renderButtonGroup()
    const buttons = buttonGroup.querySelectorAll('button')
    expect(buttons.length).toBe(2)
    expect(buttons[0]).toHaveTextContent('Button 1')
    expect(buttons[1]).toHaveTextContent('Button 2')
  })

  it('applies correct CSS classes', () => {
    const {buttonGroup} = renderButtonGroup()

    expect(buttonGroup).toHaveClass('flex')
    expect(buttonGroup).toHaveClass('space-x-4')
  })
})
