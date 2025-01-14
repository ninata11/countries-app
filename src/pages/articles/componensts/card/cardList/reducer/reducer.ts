type CardsReducerInitialState = {
  name: string;
  capital: string;
  population: number;
  component: string;
  id: string;
  vote: number;
}[];

type CardsReducerAction = {
  type: "upvote" | "sort" | "sortPopulation" | "delete" | "update";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export const cardsReducer = (
  cardList: CardsReducerInitialState,

  action: CardsReducerAction
) => {
  if (action.type === "upvote") {
    const updatedArticlesList = cardList.map((country) => {
      if (country.id === action.payload.id) {
        return { ...country, vote: country.vote + 1 };
      }
      return { ...country };
    });
    return updatedArticlesList;
  }

  if (action.type === "sort") {
    return [...cardList].sort((a, b) => {
      return action.payload.sortType === "sortByAlphabet"
        ? a.name.localeCompare(b.name)
        : a.population - b.population;
    });
  }

  if (action.type === "delete") {
    const filteredArticleList = cardList.filter((country) => {
      return country.id !== action.payload.id;
    });
    return filteredArticleList;
  }

  if (action.type === "update") {
    const updatedCardList = [
      ...cardList,
      {
        ...action.payload.cardFields,
        vote: 0,
        id: (Number(cardList.at(-1)?.id || 0) + 1).toString(),
      },
    ];
    return updatedCardList;
  }

  return cardList;
};
