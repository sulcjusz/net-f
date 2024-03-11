import React, {useState, useRef} from 'react'
import ReactPlayer from 'react-player'
import classnames from 'classnames'
import VideoControl from '../../molecules/VideoControl'
import HeroContentWrapper from '../../molecules/HeroContentWrapper'
import {IVideoPlayerProps} from './types'

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  url,
  className,
  children
}) => {
  const playerRef = useRef<ReactPlayer>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleDuration = (duration: number) => {
    setDuration(duration)
  }

  const handleSeek = (value: number) => {
    const seekTime = (value / 100) * duration
    if (playerRef.current) {
      playerRef.current.seekTo(seekTime, 'seconds')
      setProgress(seekTime)
    }
  }

  return (
    <div className={classnames('relative', className)}>
      <div className="absolute inset-0 bg-black opacity-40" />
      <ReactPlayer
        url={url}
        playing={isPlaying}
        className="react-player"
        ref={playerRef}
        width="100%"
        height="100%"
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={progress => setProgress(progress.playedSeconds)}
        onDuration={handleDuration}
        controls={false}
        muted={true}
      />
      <HeroContentWrapper>
        {children && (
          <div className="flex items-center justify-start">{children}</div>
        )}

        <VideoControl
          key={progress}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
          togglePlay={() => setIsPlaying(!isPlaying)}
          handleSeek={handleSeek}
        />
      </HeroContentWrapper>
    </div>
  )
}

export default VideoPlayer
