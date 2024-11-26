
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/default'
import ArticlesListView from './pages/home/views/list'
import AboutView from './pages/about/views/about'
import ContactView from './pages/contact/view/contact'



const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
        <Route path="/" element={<div>This is HOME page</div>}/>
          <Route path="/article" element={<ArticlesListView/>} />
          <Route path='/about' element={<AboutView/>} />
          <Route path='/contact' element={<ContactView/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
