



import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";



 const Card:React.FC<PropsWithChildren<{id: string}>> = ({
  id, 
  children}) => {
  
  return (

<Link style={{color:"black"}} to={`/articles/${id}`}>
{children}
</Link>
)};
export default Card