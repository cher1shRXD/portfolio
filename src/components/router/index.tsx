import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../main'
import Header from '../header'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router