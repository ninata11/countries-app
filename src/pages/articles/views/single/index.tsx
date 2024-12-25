
import { useParams } from "react-router-dom"

import { cardList } from "../../static/dummy-data";
import Georgia from "../../componensts/countries/georgia";
import Usa from "../../componensts/countries/USA";
import France from "../../componensts/countries/france";
import Germany from "../../componensts/countries/germany";

const SingleArticleView = () => {
  const { id } = useParams();

  const articleInfo = cardList.find((card) => card.id == id);
  if(!articleInfo){
return <div>Article Not Found</div>
  }
  const renderComponents = () => {
    switch(articleInfo.component){
      case "Georgia":
        return <Georgia/>;
      case "USA":
        return <Usa/>;
      case "France":
        return <France/>;
      case "Germany":
        return <Germany/>
      default:
        return <div>Article Not Found</div>
    }
  }
  
  return (
    <>
      {renderComponents()}
    </>
  )
}

export default SingleArticleView