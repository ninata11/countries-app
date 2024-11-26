
import { lazy } from "react"
import Hero from "../../componensts/hero-section/Hero"



const LazyCard = lazy(
  () => import("../../componensts/card/card/Card")
)
function ArticlesListView() {
  return (
    <>
      <Hero />
      <LazyCard />

    </>
  )
}

export default ArticlesListView