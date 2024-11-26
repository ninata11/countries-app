
import Footer from "../../components/footer/footer"
import Header from "../../components/header/Header"
import PageContainer from "../../components/page-container/PageContainer"
import { Outlet } from "react-router-dom"


const DefaultLayout = () => {
  return (
    <>
    <Header />
       <PageContainer>
        <Outlet/>
       </PageContainer>
      <Footer/>
    
    </>
  )
}

export default DefaultLayout