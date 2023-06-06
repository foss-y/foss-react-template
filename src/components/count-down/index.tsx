import React, { useState, useEffect } from 'react'

interface IProps {
  minutes?: number
  seconds?: number
  completed?: boolean
  handleTimeElapsed?: (time: number) => void
}

const Countdown = ({
  minutes = 0,
  seconds = 0,
  handleTimeElapsed,
  completed = false
}: IProps) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: minutes,
    seconds: seconds
  })

  const getConsumedTime = () => {
    // 计算当前已经消耗的时间
    const currentConsumeTime =
      (minutes - timeLeft.minutes) * 60 + (seconds - timeLeft.seconds)

    handleTimeElapsed && handleTimeElapsed(currentConsumeTime)
  }

  useEffect(() => {
    let countdownInterval: any = null

    if ((timeLeft.minutes === 0 && timeLeft.seconds === 0) || completed) {
      clearInterval(countdownInterval)

      // 处理时间消耗
      getConsumedTime()
    } else {
      countdownInterval = setInterval(() => {
        if (timeLeft.seconds === 0) {
          setTimeLeft({
            minutes: timeLeft.minutes - 1,
            seconds: 59
          })
        } else {
          setTimeLeft({
            minutes: timeLeft.minutes,
            seconds: timeLeft.seconds - 1
          })
        }

        getConsumedTime()
      }, 1000)
    }

    return () => clearInterval(countdownInterval)
  }, [timeLeft, completed])

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time
  }
  return (
    <div>
      {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
    </div>
  )
}

export default Countdown
