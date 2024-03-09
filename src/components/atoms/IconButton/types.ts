export interface IIconButtonProps {
  onClick?: () => void
  size?: 'small' | 'medium'
  isActive?: boolean
  icon: React.ReactNode
  className?: string
}
