import { 
  Children,
  useEffect, 
  useRef, 
  useState} from "react"
import { BaseModal } from "."


type UseBaseModalFocusProps =  HTMLElement | null


export const useBaseModal = ( focusBackRef?: UseBaseModalFocusProps ) =>{
  const modalRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() =>{
    modalRef.current?.focus()
    document.body.classList.add('no-scroll')

    return () => {
      focusBackRef?.focus()
      document.body.classList.remove("no-scroll")
    }
  }, [ focusBackRef ])

  return {
    modalRef
  }
}

type ModaPortalProps = {
  focusBackRef?: HTMLElement | null,
  background?: string
}

export const useModalPortal = ({ background, focusBackRef }: ModaPortalProps) =>{
  const [ portalVisibility, setPortalVisibility ] = useState(false)

  const handlePortal = () =>{
    setPortalVisibility(prev => !prev)
  }

  return {
    handlePortal,
    Portal: ({children }: { children: React.ReactNode }) => portalVisibility? (
      <BaseModal
       exit={ handlePortal }
       background={ background }
       focusBackRef={ focusBackRef }>
        { children }
      </BaseModal>
    ) : <></>
  }
}