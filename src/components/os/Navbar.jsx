export default function Navbar() {
        return (
          <nav className="w-full fixed top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-700">XyphX OS</div>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><a href="/">Home</a></li>

            </ul>
          </nav>
        );
      }
      