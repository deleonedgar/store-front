import { PasswordIcon } from "@/components/svgs/password"
import { 
  DetailedHTMLProps, 
  InputHTMLAttributes, 
  forwardRef} from "react"


type PasswordProps = {
  translationLabel: string,
  attributes: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  isVisible: boolean,
  toggleVisiblity: VoidFunction,
  className?: string,
  error?: string,
  [key: string]: any
}

const Password = forwardRef<HTMLInputElement,PasswordProps>(({ 
  translationLabel, 
  attributes,
  isVisible, 
  toggleVisibility,
  className,
  error, 
  ...rest }, ref) => {

  return (
    <div className={ `${ className?? "" } overflow-visible` }>
      <div className="relative">
        <input 
          ref={ ref }
          { ...rest }
          { ...attributes }
          type={ isVisible? "text" : "password" }
          className={`text-surface-on block p-4 w-full bg-transparent rounded border border-outline-color appearance-none no-shadow focus:outline-none focus:border-outline-color peer ${ error? "border-primary-color focus:border-primary-color" : "" }`}
          placeholder=" "
          aria-labelledby={ `error-${ attributes.id }` } />
        <button
          className="absolute top-1/2 h-10 w-10 rounded-full flex items-center justify-center -translate-y-1/2 right-0"
          type="button"
          onClick={ toggleVisibility }>
          <PasswordIcon />
        </button>
        <label 
          htmlFor={ attributes.id }
          className={`text-surface-onVariant absolute duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-darkScheme px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2 ${ error? "!text-primary-color" : "" }`}>{ translationLabel }</label>
      </div>
      { error && (
        <span 
          className=" text-xs text-error-color px-4 mt-1"
          id={ `error-${ attributes.id }` }>{ error }</span>
      ) }
    </div>
  )
})


export default Password