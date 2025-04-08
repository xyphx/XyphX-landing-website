export default function Hero() {
        return (
          <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 to-white">
            <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
              Welcome to XyphX OS
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mb-6">
              A developer-focused Linux distro, reimagining simplicity, performance, and control. Dive into a cleaner, more productive environment 🚀
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-blue-700 text-white rounded-full text-sm font-medium shadow hover:bg-blue-800 transition"
            >
              Download Now
            </a>
          </section>
        );
      }
      