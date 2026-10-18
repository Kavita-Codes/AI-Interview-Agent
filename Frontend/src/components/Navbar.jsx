import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserData } from '../redux/userSlice';
import Auth from '../pages/Auth';

const Navbar = () => {
  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const userData = useSelector((state) => state.user?.userData);

  // Dynamic Name & Initial calculation (React Redux state change hote hi isko immediately re-calculate karega)
  const userName = userData?.name || 'UN';
  const userInitial = userData?.name ? userData.name.trim().slice(0, 1).toUpperCase() : 'U';

  const ServerUrl = "http://localhost:3000"; 

  const handleCreditClick = () => {
    if (!userData) {
      setShowAuthModal(true);
      return;
    }
    setShowCreditPopup((prev) => !prev);
    setShowProfileDropdown(false); 
  };

  const handleProfileClick = () => {
    if (!userData) {
      setShowAuthModal(true);
      return;
    }
    setShowProfileDropdown((prev) => !prev);
    setShowCreditPopup(false);
  };

  const handleLogout = async () => {
    try {
      await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true });
      dispatch(setUserData(null));
      setShowCreditPopup(false);
      setShowProfileDropdown(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="w-full bg-[#E8F5E9] shadow-md px-4 py-3 flex items-center justify-between relative">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="bg-[#4CAF50] text-white font-bold px-2.5 py-1.5 rounded text-sm">
            AI
          </div>
          <span className="font-bold text-lg text-[#2E7D32]">AI Prep.AI</span>
        </div>

        <div className="flex items-center space-x-4 relative">
          {/* Credit Section */}
          <div className="relative">
            <button 
              onClick={handleCreditClick}
              className="flex items-center space-x-1 bg-white border border-[#C8E6C9] px-3 py-1.5 rounded-full shadow-sm hover:bg-[#F1F8F5] transition cursor-pointer"
            >
              <span className="text-xs font-semibold bg-[#C8E6C9] text-[#2E7D32] w-5 h-5 rounded-full flex items-center justify-center">₹</span>
              <span className="text-sm font-medium text-gray-700">{userData?.credits ?? 0}</span>
            </button>

            {showCreditPopup && userData && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-[#C8E6C9] rounded-lg shadow-lg p-4 z-50">
                <h3 className="text-sm font-bold text-gray-800 mb-2">Buy More Credits</h3>
                <p className="text-xs text-gray-600 mb-3">Apne interview sessions jaari rakhne ke liye credits recharge karein.</p>
                <button 
                  onClick={() => {
                    setShowCreditPopup(false);
                    navigate("/credits");
                  }} 
                  className="w-full bg-[#4CAF50] text-white text-xs font-semibold py-2 rounded hover:bg-[#43A047] transition cursor-pointer"
                >
                  Buy 100 Credits (₹99)
                </button>
              </div>
            )}
          </div>

          {/* Profile Circle Section */}
          <div className="relative">
            <button 
              onClick={handleProfileClick}
              className="w-8 h-8 bg-[#2E7D32] text-white font-semibold rounded-full flex items-center justify-center text-sm shadow-sm focus:outline-none cursor-pointer"
            >
              {userInitial}
            </button>

            {showProfileDropdown && userData && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-[#C8E6C9] rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-bold text-gray-800">{userName}</p>
                </div>
                <button 
                  onClick={() => {
                    setShowProfileDropdown(false);
                    navigate("/interview-history");
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#F1F8F5] cursor-pointer"
                >
                  Interview History
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <Auth isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

export default Navbar;