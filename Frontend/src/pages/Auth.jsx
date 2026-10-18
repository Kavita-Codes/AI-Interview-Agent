import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice.js";

const Auth = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user?.userData);

    const handleGoogleLogin = async () => {
        try {
            const res = await signInWithPopup(auth, provider);
            let User = res.user;
            let name = User.displayName;
            let email = User.email;

            const result = await axios.post("http://localhost:3000/api/auth/google",
                { email, name }, 
                { withCredentials: true }
            );

            // Response handling: Agar backend { user: {...} } bhej raha ho ya direct user object bhej raha ho
            const loggedInUser = result.data?.user || result.data;

            // Redux state update karein
            dispatch(setUserData(loggedInUser));
            
            // Popup close karein
            onClose();
        } catch (error) {
           console.log(error);
           dispatch(setUserData(null));
        }
    };

    // Agar user logged in hai ya modal closed hai to render mat karo
    if (userData || !isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-2xl relative flex flex-col items-center">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold text-lg cursor-pointer"
                >
                    ✕
                </button>

                {/* Content */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome to AI Prep.AI</h2>
                <p className="text-xs text-gray-600 mb-6 text-center">
                    Apne account se continue karne ke liye Google login ka use karein.
                </p>

                {/* Google Login Button */}
                <button 
                    onClick={handleGoogleLogin} 
                    className="w-full flex items-center justify-center space-x-2 font-semibold text-sm bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg shadow transition cursor-pointer"
                >
                    <span>Continue with Google</span>
                </button> 
            </div>
        </div>
    );
};

export default Auth;