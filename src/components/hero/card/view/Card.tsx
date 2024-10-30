import CardContant from "../cardContent/CardContant"
import CardFooter from "../cardFooter/CardFooter"
import CardHeader from "../cardHeader/CardHeader"
import Styles from "./card.module.css"


function Card() {
    const country = {
        name: "Georgia",
        population: 3240983,
        capital: "Tbilisi"
    }
    return (
        <div className={Styles.container}>
    <CardHeader>{country.name}</CardHeader>
    <CardContant>Capital: {country.capital}</CardContant>
    <CardFooter>Population: {country.population}</CardFooter>
    </div>
    )
}

export default Card