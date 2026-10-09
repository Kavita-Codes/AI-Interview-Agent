import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { useEffect } from "react"
import axios from "axios"

const App = () => {

  useEffect(()=>{
    const getUser = async()=>{
      try {
        const result = await axios.get("http://localhost:3000/api/user/current-user")
        console.log(result.data)
      } catch (error) {
        console.log(error)
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