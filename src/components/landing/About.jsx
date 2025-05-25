'use client';
export default function About() {
  return (
    <div
            className="absolute inset-0 z-40 bg-black bg-opacity-90 flex items-center justify-center px-6 font-vollkorn text-white"
         style={{
              background: "radial-gradient(circle, #2B0042, #000000)",
         }}
          >
      <div className="max-w-3xl space-y-4">
        <h2 className="text-5xl">About XyphX</h2>
        <p>
          Welcome to XyphX — where next‐gen video experiences come to life…
        </p>
      </div>
    </div>
  );
}
