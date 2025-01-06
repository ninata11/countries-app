import { Suspense, useState } from "react"
import Card from "../card/Card"
import CardContant from "../cardContent/CardContant"
import CardFooter from "../cardFooter/CardFooter"
import CardHeader from "../cardHeader/CardHeader"
import Styles from "../card/card.module.css"
import { Link } from "react-router-dom"

const ArticleList = () => {

const [cardList,setArticleList] = useState<{
  name: string;
  capital: string;
  population: number;
  component: string;
  id:string;
  vote:number;
}[]>([
  { name: 'Georgia',  capital:'Tbilisi', population:627361237, component:"Georgia", id:"1", vote: 0},
  { name: 'USA',  capital:'Washington, D.C.', population:72873426374, component:"USA", id:"2", vote: 0 },
  { name: 'France',capital: 'Paris', population:8347283748, component:"France",  id:"3", vote: 0},
  { name: 'Germany', capital: 'Berlin', population:873248734, component:"Germany", id:"4",  vote: 0 },
])

const handleArticleUpVote = (id:string) => {
  
    const updatedArticlesList = cardList.map(country => {
      if (country.id === id) {
        return {...country, vote: country.vote + 1}
      }
      return {...country};
    })
  


  
  setArticleList(updatedArticlesList);
}


const sortCountries = () => {
  const sortedCountries = [...cardList].sort((a, b) => {
    return a.name.localeCompare(b.name); 
  });

  setArticleList(sortedCountries);
  console.log(sortedCountries);
};

const sortPopulation = () => {
  const sortedPopulation = [...cardList].sort((a, b) => {
    return a.population - b.population;
  });
  setArticleList(sortedPopulation);
  console.log(sortedPopulation)
}


  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
      <button onClick={sortCountries} className={Styles.sort}>Sort [A-Z]</button>
      <button onClick={sortPopulation} className={Styles.sort}>Sort population</button>
        <div className={Styles.container}>
          {cardList.map((country) => (
            <div key={country.id} className={Styles.div}>
              <Card id={country.id}>
                <CardHeader 
                 onUpVote={() => handleArticleUpVote(country.id)}
                 voteCount={country.vote}>{country.name}</CardHeader>
                <CardContant>Population: {country.population}</CardContant>
                <CardFooter>Capital: {country.capital}</CardFooter>
                <div>
                <Link style={{color:"white", fontSize: "18px"}} to={country.id}>
See more
</Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  )
}

export default ArticleList