export default function Navbar() {
        return (
                <nav className="w-full fixed top-0 z-10 bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-blue-600">XyphX</h2>
            <ul className="flex space-x-6 text-gray-700">
              <li><a href="/products/xyphx-os">XyphXOS</a></li>
            </ul>
          </nav>
        );
      }
      