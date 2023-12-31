import { 
  DetailedHTMLProps, 
  InputHTMLAttributes, 
  forwardRef} from "react"


type TextProps = {
  translationLabel: string,
  attributes: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  className?: string,
  error?: string,
  [key: string]: any
}

const Text = forwardRef<HTMLInputElement,TextProps>(({ 
  translationLabel, 
  attributes, 
  className,
  error,
  ...rest }, ref) => {

  return (
    <div className={ `${ className?? "" } overflow-visible font-rubik transparent-bg` }>
      <div className="relative w-full">
        <input 
          ref={ ref }
          { ...rest }
          { ...attributes }
          type="text" 
          className={`text-surface-on block p-4 w-full bg-transparent rounded border border-outline-color appearance-none no-shadow focus:outline-none focus:border-outline-color peer ${ error? "border-primary-color focus:border-primary-color" : "" }`}
          placeholder=" "
          aria-labelledby={ `error-${ attributes.id }` } />
        <label 
          htmlFor={ attributes.id }
          className={`text-surface-onVariant absolute duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-darkScheme px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2 ${ error? "!text-primary-color" : "" }`}>{ translationLabel }</label>
      </div>
      { error && (
        <span
          id={ `error-${ attributes.id }` } 
          className=" text-xs text-error-color px-4 mt-1">{ error }</span>
      ) }
    </div>
  )
})


export default Text