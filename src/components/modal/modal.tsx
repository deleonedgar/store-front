import { createPortal } from "react-dom"
import { useBaseModal } from "./hook"
import FocusTrap from "focus-trap-react"


type ModalProps = {
  children: React.ReactNode,
  exit: () => void,
  background?: string,
  focusBackRef?: HTMLElement | null
}

const Modal = ({ 
  children, 
  exit, 
  focusBackRef,
  background }: ModalProps) =>{
  const { modalRef } = useBaseModal( focusBackRef )

  const exitModal = () =>{
    focusBackRef?.focus()
    exit()
  }

  return createPortal(
    <FocusTrap>
      <div
        className="inset-0 outline-none overflow-x-hidden overflow-y-scroll fixed z-20"
        ref={ modalRef }
        role="dialog"
        tabIndex={ -1 }
        key="baseModal"
        aria-labelledby="modal-heading" >
        <div
          className="max-w-full" 
          role="document">
          <div
            className={`${ background?? " bg-black bg-opacity-50" } inset-0 fixed`} 
            onClick={ exitModal } />
          { children }
        </div>
      </div>
    </FocusTrap>,
    document.body
  )
}


export default Modal