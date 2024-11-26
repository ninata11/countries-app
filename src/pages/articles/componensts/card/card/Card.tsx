

import Styles from "./card.module.css"

import { lazy } from "react"
import { Suspense } from "react"
import { cardList } from "../../../static/dummy-data";

const LazyCardContant = lazy(
  () => import ("../cardContent/CardContant")
);
const LazyCardFooter = lazy(
  () => import ("../cardFooter/CardFooter")
);
const LazyCardHeader = lazy(
  () => import ("../cardHeader/CardHeader")
);


 const Card = () => {
 return (
    <Suspense fallback={<div>Loading...</div>}>
     <div className={Styles.container}>
      {cardList.map((country)=>(
<div key={country.id} className={Styles.div}>
          <LazyCardHeader>{country.name}</LazyCardHeader>  
          <img 
              src={country.image} 
              alt={`${country.name} flag`} 
              className={Styles.flag}
            />
          <LazyCardContant>Population: {country.population}</LazyCardContant> 
          <LazyCardFooter>Capital: {country.capital}</LazyCardFooter> 
        </div>

      ))}
        
      </div>
    </Suspense>
  )
}

export default Card