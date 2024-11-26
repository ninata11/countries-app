
import React, { PropsWithChildren } from 'react'

const CardFooter:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <p>{children}</p>
  )
}

export default CardFooter