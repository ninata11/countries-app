import { lazy, Suspense } from "react";
import Hero from "../../componensts/hero-section/Hero";
import { cardList } from "../../static/dummy-data";
import Styles from "../../componensts/card/card/card.module.css";

const LazyCard = lazy(() => import("../../componensts/card/card/Card"));
const CardHeader = lazy(() => import("../../componensts/card/cardHeader/CardHeader"));
const CardContant = lazy(() => import("../../componensts/card/cardContent/CardContant"));
const CardFooter = lazy(() => import("../../componensts/card/cardFooter/CardFooter"));

const ArticlesListView = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <div className={Styles.container}>
          {cardList.map((country) => (
            <div key={country.id} className={Styles.div}>
              <LazyCard id={country.id}>
                <CardHeader>{country.name}</CardHeader>
                <CardContant>Population: {country.population}</CardContant>
                <CardFooter>Capital: {country.capital}</CardFooter>
              </LazyCard>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default ArticlesListView;
