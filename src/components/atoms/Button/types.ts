export interface IButtonProps {
  onClick?: () => void
  size?: 'small' | 'medium'
  disabled?: boolean
  children: React.ReactNode
  className?: string
}
