const Checkbox = ({children, ...props}) => {
    return  <>
               <label>
                 <input {...props}
                   
                 />
                 {children}
               </label>
          </>   
   }
   
   export default Checkbox