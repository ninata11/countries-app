
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/default'
import AboutView from './pages/about/views/about'
import ContactView from './pages/contact/view/contact'
import ArticlesListView from './pages/articles/views/list'
import SingleArticleView from './pages/articles/views/single'
import { Suspense } from 'react'



const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
        <Route path="/" element={<div>This is HOME page</div>}/>
          <Route path="articles" element={<Suspense fallback={<div>Loading...</div>}>
          <ArticlesListView/>
          </Suspense>} />
          <Route path='articles/:id' element={<SingleArticleView/>} />
          <Route path='about' element={<AboutView/>} />
          <Route path='contact' element={<ContactView/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
