import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/flag_of_us_saintly.jpeg')] bg-cover bg-center bg-no-repeat">
      <div id="hero" className="text-8xl font-bold text-white text-center w-full h-full text-shadow-lg flex justify-center align-center">AMERICA</div>
    </div>
  );
}
