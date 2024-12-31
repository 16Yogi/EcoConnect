import './App.css'
import { Routes,Route, BrowserRouter } from 'react-router'
import Layout from './Layout'
import Feateres from './Component/Features/Feateres'
import Footer from './Component/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path='feather' element={<Feateres/>}/>
              <Route path="footer" element={<Footer/>}/>
            </Route>
          </Routes>
       </BrowserRouter>
      <Feateres/>
      <Footer/>
    </>
  )
}

export default App
