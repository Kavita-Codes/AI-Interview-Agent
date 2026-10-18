import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#E8F5E9] text-gray-700 py-12 px-4 border-t border-[#C8E6C9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="bg-[#4CAF50] text-white font-bold px-2.5 py-1.5 rounded text-sm">
              AI
            </div>
            <span className="font-bold text-lg text-[#2E7D32]">AI Prep.AI</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            AI-driven interview preparation platform designed to improve communication skills, technical depth, and professional confidence.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm text-[#2E7D32] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs text-gray-600">
            <li><Link to="/" className="hover:text-[#2E7D32] transition">Home</Link></li>
            <li><Link to="/credits" className="hover:text-[#2E7D32] transition">Buy Credits</Link></li>
            <li><Link to="/interview-history" className="hover:text-[#2E7D32] transition">Interview History</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm text-[#2E7D32] mb-3">Support & Legal</h4>
          <p className="text-xs text-gray-600 mb-2">Email: support@aiprep.ai</p>
          <p className="text-xs text-gray-600">© 2026 AI Prep.AI. All rights reserved.</p>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 border-t border-[#C8E6C9] pt-6">
        Built with MERN Stack & AI Intelligence.
      </div>
    </footer>
  );
};

export default Footer;