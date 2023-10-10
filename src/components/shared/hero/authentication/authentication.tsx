import { Player } from "@lottiefiles/react-lottie-player"


const Authentication = () =>{

  return (
    <div className='hidden mdl:block mdl:max-w-[clamp(320px,40vw,430px)] mdl:-translate-y-10 mdl:w-full mdl:mr-8 lg:mr-36'>
      <Player
        autoplay
        loop={ false }
        keepLastFrame={ true }
        src="https://lottie.host/81a68194-a764-45fd-a8ff-a27434af4fdf/k8C8xI2DoT.json"
        style={{ height: '400px', width: '400px' }} />
      <div className='mb-42'>
        <h1 className="text-[clamp(20px,2.8vw,36px)] text-surface-on">Shop Quality . Shop Style</h1>
        <h2 className="text-[clamp(16px,1.8vw,24px)] text-surface-onVariant">Helping you get quality products from Indonesia</h2>
      </div>
    </div>
  )
}


export default Authentication