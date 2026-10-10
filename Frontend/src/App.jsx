import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUserData } from "./redux/userSlice.js"

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    const getUser = async()=>{
      try {
        const result = await axios.get("http://localhost:3000/api/user/me",{
          withCredentials:true
        })

         dispatch(setUserData(result.data))

      } catch (error) {
       console.log(error.message)
      }
    }

    getUser()

  },[])

  return (
     <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/auth" element={<Auth/>} />

     </Routes>
  )
}

export default App