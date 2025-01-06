import { lazy,  } from "react";
import Hero from "../../componensts/hero-section/Hero";

const ArticleList = lazy(() => import("../../componensts/card/cardList/article-list"));
const ArticlesListView = () => {
  return (
    <>
      <Hero />
      <ArticleList/>
     
    </>
  );
};

export default ArticlesListView;
