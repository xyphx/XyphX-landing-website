import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react"; // Importing the icon

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-purple-950 p-6">
      <div className="text-center animate-fade-in">
        <img
          src="/logo_dark.png"
          alt="Logo"
          className="mx-auto mb-6 w-48 h-48 drop-shadow-lg"
        />
        <h1 className="text-6xl font-extrabold text-white mb-4">404 Page Not Found!</h1>
       <br></br>
       <br></br>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-black border-2 border-violet-500 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300"
        >
          
          <Home className="w-5 h-5" />
          Back to Home
        </a>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
