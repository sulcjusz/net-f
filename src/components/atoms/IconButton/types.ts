export interface IIconButtonProps {
  onClick?: () => void
  size?: 'small' | 'medium'
  disabled?: boolean
  icon: React.ReactNode
  className?: string
}
