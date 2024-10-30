import { PropsWithChildren } from "react"
import Styles from "./cardHeader.module.css"

const CardHeader:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <h2 className={Styles.header}>{children}</h2>
  )
}

export default CardHeader