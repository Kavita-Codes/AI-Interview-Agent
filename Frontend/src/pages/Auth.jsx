import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../utils/firebase.js"
import axios from "axios"


const Auth = () => {

    const handleGoogleLogin = async()=>{
        try {
            const res = await signInWithPopup(auth, provider)
            let User = res.user
            let name = User.displayName
            let email = User.email

            const result = await axios.post("http://localhost:3000/api/auth/google",
                {
                    email, name
                }, 
                {
                    withCredentials:true
                }
            )

            console.log(result)
        } catch (error) {
           console.log(error) 
        }
    }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <button onClick={handleGoogleLogin} className="font-bold text-2xl color-black bg-amber-500  p-4 ">Continue with Google</button>       
    </div>
  )
}

export default Auth