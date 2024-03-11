import {render, fireEvent, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom'
import TextLink from '../index'
import {ITextLinkProps} from '../types'

type RenderTextLinkProps = Partial<ITextLinkProps>

const renderTextLink = (props: RenderTextLinkProps = {}): RenderResult => {
  const {text, onClick, className} = props
  return render(
    <TextLink
      text={text || 'Link'}
      onClick={onClick || jest.fn()}
      className={className}
    />
  )
}

describe('TextLink component', () => {
  it('matches snapshot', () => {
    const {container} = renderTextLink({text: 'Snapshot Test'})
    expect(container).toMatchSnapshot()
  })

  it('renders text correctly', () => {
    const text = 'Click me'
    const {getByText} = renderTextLink({text})
    expect(getByText(text)).toBeInTheDocument()
  })

  it('renders with default class', () => {
    const {getByText} = renderTextLink()
    expect(getByText('Link')).toHaveClass('text-blue-dark')
    expect(getByText('Link')).toHaveClass('cursor-pointer')
  })

  it('renders with additional className', () => {
    const {getByText} = renderTextLink({className: 'custom-class'})
    expect(getByText('Link')).toHaveClass('custom-class')
  })

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const {getByText} = renderTextLink({onClick: onClickMock})
    fireEvent.click(getByText('Link'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
