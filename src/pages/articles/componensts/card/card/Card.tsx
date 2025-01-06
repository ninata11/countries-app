



import { PropsWithChildren } from "react";




 const Card:React.FC<PropsWithChildren<{id: string}>> = ({ 
  children}) => {
  
  return (
<article>{children}</article>

)};
export default Card