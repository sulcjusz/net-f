export interface IButtonProps {
  onClick?: () => void
  size?: 'small' | 'medium'
  isActive?: boolean
  children: React.ReactNode
  className?: string
}
