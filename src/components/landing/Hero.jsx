'use client';
export default function Hero() {
        return (
          <div
            className="relative w-full h-screen overflow-hidden"
            // style={{
            //   background: "radial-gradient(circle, #2B0042, #000000)",
            // }}
          >
            <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Over Video */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">XyphX</h1>
      </div>

          </div>

        );
      }
      