import React, {useRef, useState, useEffect} from 'react'
import classnames from 'classnames'
import {IVideoPlayerProps} from './types'

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  url,
  className,
  children
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      setDuration(videoElement.duration)

      const updateTime = () => {
        setCurrentTime(videoElement.currentTime)
      }

      videoElement.addEventListener('timeupdate', updateTime)

      return () => {
        videoElement.removeEventListener('timeupdate', updateTime)
      }
    }
  }, [videoRef])

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime
      const progressPercent = (currentTime / duration) * 100
      setProgress(progressPercent)
    }
  }

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime = (parseFloat(event.target.value) / 100) * duration
      videoRef.current.currentTime = seekTime
    }
  }

  return (
    <div className={classnames('relative', className)}>
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-cover"
        onTimeUpdate={updateProgress}
        onEnded={() => setIsPlaying(false)}
      ></video>
      <div className="absolute inset-0 flex flex-col justify-center">
        {children && (
          <div className="flex items-center justify-center">{children}</div>
        )}
        <div className="flex items-center justify-center w-full">
          <button className="text-white text-4xl" onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            className="slider  w-3/4 bg-gray-300 rounded-full h-2 ml-4"
            onChange={handleSeek}
          />

          <div className="text-white">
            {Math.round(duration - currentTime)}s remaining
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer

// import React, { useState } from 'react';
// import classnames from 'classnames';
// import ReactPlayer from 'react-player';
// import { IVideoPlayerProps } from './types';

// const VideoPlayer: React.FC<IVideoPlayerProps> = ({ url, className }) => {
//     const [playing, setPlaying] = useState<boolean>(false);
//     const [played, setPlayed] = useState<number>(0);

//     const handlePlayPause = () => {
//         setPlaying(!playing);
//     };

//     const handleProgress = (progress: { played: number }) => {
//         setPlayed(progress.played);
//     };
//     const videoPlayerClasses = classnames(
//         "items-center px-20 py-5 bg-grey-100 absolute bottom-0 left-0 w-full min-h-[356px] flex flex-col justify-around ",
//         className
//     )

//     return (
//         <div>
//             <ReactPlayer
//                 url={url}
//                 playing={playing}
//                 onPlay={() => setPlaying(true)}
//                 onPause={() => setPlaying(false)}
//                 onProgress={handleProgress}
//             />
//             <div>
//                 <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
//                 <input
//                     type="range"
//                     min={0}
//                     max={1}
//                     step="any"
//                     value={played}
//                     onChange={(e) => setPlayed(parseFloat(e.target.value))}
//                 />
//             </div>
//         </div>
//     );
// };

// export default VideoPlayer;
