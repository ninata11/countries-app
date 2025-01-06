import { PropsWithChildren } from "react"
import Styles from "./cardHeader.module.css"

const CardHeader:React.FC<PropsWithChildren<{voteCount:number; onUpVote: ()=> void;}>
> = ({voteCount,onUpVote, children}) => {
  return (
    <h2 className={Styles.header}>{children} - {voteCount} <span style={{color: "green", cursor:"pointer"}} onClick={onUpVote}>Vote</span></h2>
  )
}

export default CardHeader