import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white text-gray-800">
      
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <span className="inline-block bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-[#C8E6C9]">
          ✨ AI Powered Smart Interview Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Practice Interviews with <br /> <span className="text-[#2E7D32] px-3 py-1 rounded-lg inline-block mt-2">AI Intelligence</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Role-based mock interviews with smart follow-ups, adaptive difficulty and real-time performance evaluation.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => navigate('/interview')}
            className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition cursor-pointer"
          >
            Start Interview
          </button>
          <button 
            onClick={() => navigate('/interview-history')}
            className="border border-[#C8E6C9] bg-white hover:bg-[#F1F8F5] text-[#2E7D32] font-semibold px-6 py-3 rounded-full shadow-sm transition cursor-pointer"
          >
            View History
          </button>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl p-4 bg-[#F9FBF9] border border-[#E8F5E9] shadow-sm flex items-center justify-center">
          <img 
            src="/job.png" 
            alt="Main Interview Illustration" 
            className="w-full max-h-80 object-contain rounded-xl"
          />
        </div>
      </section>

      <section className="bg-[#F9FBF9] py-16 px-4 border-y border-[#E8F5E9]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How It <span className="text-[#2E7D32]">Works</span></h2>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8F5E9] text-center flex flex-col items-center hover:shadow-md transition">
            <span className="w-10 h-10 bg-[#E8F5E9] text-[#2E7D32] rounded-full flex items-center justify-center mb-4 font-bold text-sm">1</span>
            <img 
              src="https://thumbs.dreamstime.com/b/recruitment-recruiter-choosing-candidates-female-cv-resume-vector-illustration-recruitment-recruiter-choosing-candidates-129442453.jpg" 
              alt="Role & Experience Selection" 
              className="h-28 mb-4 object-contain rounded-lg" 
            />
            <h3 className="font-bold text-lg mb-2 text-gray-800">Role & Experience Selection</h3>
            <p className="text-xs text-gray-600">AI adjusts difficulty based on selected job role.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8F5E9] text-center flex flex-col items-center hover:shadow-md transition">
            <span className="w-10 h-10 bg-[#E8F5E9] text-[#2E7D32] rounded-full flex items-center justify-center mb-4 font-bold text-sm">2</span>
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/voice-assistant-app-illustration-svg-download-png-3551743.png" 
              alt="Smart Voice Interview" 
              className="h-28 mb-4 object-contain" 
            />
            <h3 className="font-bold text-lg mb-2 text-gray-800">Smart Voice Interview</h3>
            <p className="text-xs text-gray-600">Dynamic follow-up questions based on your answers.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8F5E9] text-center flex flex-col items-center hover:shadow-md transition">
            <span className="w-10 h-10 bg-[#E8F5E9] text-[#2E7D32] rounded-full flex items-center justify-center mb-4 font-bold text-sm">3</span>
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/job-seekers-dress-professionally-and-arrive-on-time-for-interviews-illustration-svg-download-png-7162654.png" 
              alt="Timer Based Simulation" 
              className="h-28 mb-4 object-contain" 
            />
            <h3 className="font-bold text-lg mb-2 text-gray-800">Timer Based Simulation</h3>
            <p className="text-xs text-gray-600">Real interview pressure with time tracking.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">Advanced AI <span className="text-[#2E7D32]">Capabilities</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-[#E8F5E9] flex items-center space-x-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxr8rj8jHkZkE620SJgEQ3S1V1E0p3FGhqr-rswVOxA&s=10" 
              alt="AI Answer Evaluation" 
              className="w-20 h-20 object-contain rounded-lg shrink-0" 
            />
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">AI Answer Evaluation</h3>
              <p className="text-xs text-gray-600">Scores communication, technical accuracy and confidence.</p>
            </div>
          </div>

          <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-[#E8F5E9] flex items-center space-x-4">
            <img 
              src="https://png.pngtree.com/png-clipart/20241028/original/pngtree-magnifying-glass-over-businessmans-resume-clip-art-illustration-png-image_16528742.png" 
              alt="Resume Based Interview" 
              className="w-20 h-20 object-contain rounded-lg shrink-0" 
            />
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">Resume Based Interview</h3>
              <p className="text-xs text-gray-600">Project-specific questions based on uploaded resume.</p>
            </div>
          </div>

          <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-[#E8F5E9] flex items-center space-x-4">
            <img 
              src="https://img.freepik.com/free-vector/hand-drawn-report-card-illustration_23-2150985083.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Downloadable PDF Report" 
              className="w-20 h-20 object-contain rounded-lg shrink-0" 
            />
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">Downloadable PDF Report</h3>
              <p className="text-xs text-gray-600">Detailed strengths, weaknesses and improvement insights.</p>
            </div>
          </div>

          <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-[#E8F5E9] flex items-center space-x-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9qcrVlOHJYem_LD4D-bcG6_ELyPRnuc1zRGEjBFZaA&s=10" 
              alt="History Tracking" 
              className="w-20 h-20 object-contain rounded-lg shrink-0" 
            />
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">History Tracking</h3>
              <p className="text-xs text-gray-600">Track progress over multiple interview sessions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FBF9] py-16 px-4 border-t border-[#E8F5E9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">Multiple Interview <span className="text-[#2E7D32]">Modes</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8F5E9] shadow-sm flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">HR Interview Mode</h3>
                <p className="text-xs text-gray-600">Behavioral and communication based evaluation.</p>
              </div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWoJa4MkBCaiUn31ZvZsLvSDFF3cTWj7-or8izquESA&s=10" 
                alt="HR Interview Mode" 
                className="w-32 h-32 md:w-36 md:h-36 object-contain rounded-xl shrink-0" 
              />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8F5E9] shadow-sm flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Technical Mode</h3>
                <p className="text-xs text-gray-600">Deep technical questioning based on selected role.</p>
              </div>
              <img 
                src="https://png.pngtree.com/png-clipart/20240416/original/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_14867886.png" 
                alt="Technical Mode" 
                className="w-32 h-32 md:w-36 md:h-36 object-contain rounded-xl shrink-0" 
              />
            </div>


            <div className="bg-white p-6 rounded-2xl border border-[#E8F5E9] shadow-sm flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Confidence Detection</h3>
                <p className="text-xs text-gray-600">Basic tone and voice analysis insights.</p>
              </div>
              <img 
                src="https://png.pngtree.com/png-clipart/20241013/original/pngtree-3d-audio-music-equalizer-waveform-on-a-transparent-background-png-image_16304121.png" 
                alt="Confidence Detection" 
                className="w-32 h-32 md:w-36 md:h-36 object-contain rounded-xl shrink-0" 
              />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8F5E9] shadow-sm flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Credits System</h3>
                <p className="text-xs text-gray-600">Unlock premium interview sessions easily.</p>
              </div>
              <img 
                src="https://cdn.pixabay.com/photo/2024/05/02/03/54/credit-cards-8733521_1280.png" 
                alt="Credits System" 
                className="w-32 h-32 md:w-36 md:h-36 object-contain rounded-xl shrink-0" 
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;