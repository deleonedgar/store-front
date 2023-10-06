import { useInterval } from "@/lib/hooks/useInterval"
import { 
  useEffect, 
  useState } from "react"


export const useOtpTimer = () =>{
  const [ timer, setTimer ] = useState({
    isAvailable: false,
    countdown: 60
  })
  const { stopTimer, restartTimer } = useInterval(() =>{
    setTimer(prev => ({
      ...prev,
      countdown: prev.countdown-1
    }))
  })

  useEffect(() => {
    if ( !timer.isAvailable && timer.countdown<=0 ) {
      setTimer(prev => ({
        ...prev,
        isAvailable: true
      }))
      stopTimer()
    }
  }, [ timer ])

  return {
    timer,
    setTimer,
    restartTimer
  }
}