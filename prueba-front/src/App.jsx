import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginLayout } from './layouts/LoginLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import LoginPage from './features/login/LoginPage'
import PostPage from './features/postss/PostPage'
import DashboardPage from './features/dashboard/DashboardPage'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginLayout/>}>
            <Route path='' element={<LoginPage/>}/>
          </Route>

          <Route path='/' element={<DefaultLayout/>}>
            <Route path= "posts" element={<PostPage/>}/>
            <Route path="dashboard" element={<DashboardPage/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
