import { useOtpTimer } from "./hook"


type TimerProps = {
  resendOTP: VoidFunction
}

const Timer = ({ resendOTP }: TimerProps) =>{
  const {
    timer,
    setTimer,
    restartTimer
  } = useOtpTimer()

  return (
    <div className={`text-center font-rubik ${ timer.isAvailable? "mt-[37px]" : "mt-[50px]" }`}>
      { timer.isAvailable? 
      <button 
        className="text-primary-color font-medium rounded-sm text-sm font-rubik py-[10px] px-3 hover:bg-[#eceaf4]"
        onClick={() => {
          resendOTP()
          setTimer({
            isAvailable: false,
            countdown: 60
          })
          restartTimer()
        }}>Resend Code
      </button> : 
      <p className="font-rubik text-xs text-surface-onVariant">
          Please wait in <span className="font-medium">{ timer.countdown } seconds</span> to resend
      </p> }
    </div>
  )
}


export default Timer