
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import NotFound from './Components/NotFound/NotFound'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'



function App() {
 const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutOne/>}>
      
      <Route index element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/*' element={<NotFound/>} />
    
    </Route>
    
  )
 )

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
