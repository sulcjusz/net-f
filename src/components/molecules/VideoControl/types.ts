export interface IVideoControlProps {
  isPlaying: boolean
  progress: number
  duration: number
  togglePlay: () => void
  handleSeek: (value: number) => void
}
