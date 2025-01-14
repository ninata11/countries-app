import { FormEvent, MouseEvent, Suspense, useReducer } from "react";
import Card from "../card/Card";
import CardContant from "../cardContent/CardContant";
import CardFooter from "../cardFooter/CardFooter";
import CardHeader from "../cardHeader/CardHeader";
import Styles from "../card/card.module.css";
import { Link } from "react-router-dom";
import CardCreateForm from "../card-create-form/card-create-form";
import { cardsReducer } from "./reducer/reducer";
import cardsInitialState from "./reducer/state";

const ArticleList: React.FC = () => {
  const [cardList, dispatch] = useReducer(cardsReducer, cardsInitialState);

  const handleArticleUpVote = (id: string) => {
    dispatch({
      type: "upvote",
      payload: {
        id,
      },
    });
  };

  const sortCountries = (sortType: "sortByAlphabet" | "sortByPopulation") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleCreateArticle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cardFields: any = {};
    const formData = new FormData(e.currentTarget);

    for (const [key, value] of formData) {
      cardFields[key] = value;
    }

    dispatch({ type: "update", payload: { cardFields } });

    e.currentTarget.reset();
  };

  const handleArticleDelete = (e: MouseEvent, id: string) => {
    e.preventDefault();

    dispatch({
      type: "delete",
      payload: {
        id,
      },
    });
  };

  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <button
          onClick={() => sortCountries("sortByAlphabet")}
          className={Styles.sort}
        >
          Sort [A-Z]
        </button>
        <button
          onClick={() => sortCountries("sortByPopulation")}
          className={Styles.sort}
        >
          Sort population
        </button>

        <CardCreateForm onCardCreate={handleCreateArticle} />
        <div className={Styles.container}>
          {cardList.map((country) => (
            <div key={country.id} className={Styles.div}>
              <Card id={country.id}>
                <CardHeader
                  onUpVote={() => handleArticleUpVote(country.id)}
                  voteCount={country.vote}
                >
                  {country.name}
                </CardHeader>
                <CardContant>Population: {country.population}</CardContant>
                <CardFooter>Capital: {country.capital}</CardFooter>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <Link
                    style={{ color: "white", fontSize: "18px" }}
                    to={country.id}
                  >
                    See more
                  </Link>
                  <span
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={(e) => {
                      handleArticleDelete(e, country.id);
                    }}
                  >
                    DELETE
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default ArticleList;
