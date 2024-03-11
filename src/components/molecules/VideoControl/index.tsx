import React, {useState, useEffect} from 'react'
import PlayIcon from '../../atoms/Icon/Play'
import PauseIcon from '../../atoms/Icon/Pause'
import IconButton from '../../atoms/IconButton'
import {IVideoControlProps} from './types'

const VideoControl: React.FC<IVideoControlProps> = ({
  isPlaying,
  progress,
  duration,
  togglePlay,
  handleSeek
}) => {
  const [progressPercent, setProgressPercent] = useState(progress)
  useEffect(() => {
    setProgressPercent((progress / duration) * 100)
  }, [progress])

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <div className="flex items-center space-x-5 justify-between min-h-[94.3px] py-4 px-4 w-full rounded-[10px] border border-white border-opacity-20 bg-slate-900 bg-opacity-30">
      {isPlaying ? (
        <>
          <IconButton
            icon={
              <div className="flex items-center justify-center text-center w-8 h-8">
                <div className="w-4 h-4">
                  <PauseIcon />
                </div>
              </div>
            }
            onClick={togglePlay}
            className="bg-slate-900 border-0 ml-4 w-[48.61px] h-[48.61px]"
            size="small"
          />
        </>
      ) : (
        <>
          <IconButton
            icon={
              <div className="flex items-center justify-center text-center w-8 h-8">
                <div className="w-4 h-4">
                  <PlayIcon />
                </div>
              </div>
            }
            onClick={togglePlay}
            className="bg-slate-900 border-0 ml-4 w-[48.61px] h-[48.61px]"
            size="small"
          />
        </>
      )}

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        className="slider shadow-none appearance-none bg-gray-300 w-[1112.33px] h-2 rounded-full overflow-hidden outline-none focus:outline-none"
        onChange={e => handleSeek(parseFloat(e.target.value))}
        style={{
          background: `linear-gradient(to right, #CAE771 ${progressPercent}%, #252525 ${progressPercent}%)`
        }}
      />

      <div
        /* TODO: in figma this is Exo font, but looks different */
        className="text-grey-250 font-exo text-xs font-bold leading-5 tracking-normal text-center w-20"
      >
        {formatTime(Math.round(progress))}
      </div>
    </div>
  )
}

export default VideoControl
