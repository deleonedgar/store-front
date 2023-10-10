import { 
  useEffect, 
  useRef, 
  useState } from 'react';


export const useInterval = (callback: VoidFunction, delay=1000) =>{
  const savedCallback = useRef<VoidFunction>()
  const [ forceStop, setForceStop ] = useState(false)

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current? savedCallback.current() : ""
    }
    
    let id = setInterval(tick, delay)
    if ( forceStop ) {
      clearInterval(id) 
    }

    return () => clearInterval(id)
  }, [delay, forceStop])

  const stopTimer = () =>{
    setForceStop(true)
  }

  const restartTimer = () =>{
    setForceStop(false)
  }

  return {
    stopTimer,
    restartTimer
  }
}