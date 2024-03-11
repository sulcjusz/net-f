import {render, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom'

import Chip from '../index'
import {IChipProps} from '../types'

type ChipRenderProps = Partial<IChipProps>

const renderChip = (
  props?: ChipRenderProps
): {chip: HTMLElement} & RenderResult => {
  const utils = render(<Chip {...props}>Example Chip</Chip>)
  const chip = utils.getByText('Example Chip')
  return {...utils, chip}
}

describe('Chip component', () => {
  it('should match the snapshot', () => {
    const {chip} = renderChip()
    expect(chip.firstChild).toMatchSnapshot()
  })

  it('renders correctly with default props', () => {
    const {chip} = renderChip()
    expect(chip).toBeInTheDocument()
    expect(chip).toHaveClass(
      'rounded-xl border border-grey-dark font-exo text-[12px] leading-4 tracking-[.07em] text-center flex items-center justify-center'
    )
    expect(chip).toHaveClass('w-[163px] h-[53.53px] font-medium')
    expect(chip).toHaveClass('text-grey-600')
  })

  it('renders correctly with size "small"', () => {
    const {chip} = renderChip({size: 'small'})
    expect(chip).toHaveClass('w-[133.07px] h-[44.1px]')
  })

  it('renders correctly with textColor "white"', () => {
    const {chip} = renderChip({textColor: 'white'})
    expect(chip).toHaveClass('text-white')
  })
})
