import { Button } from "@/components/ui/button";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full">
      <img
        src={heroBg}
        alt="Siri Chandana"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Siri Chandana
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium drop-shadow">
          Performer · Artist
        </p>
        <div className="mt-8 flex gap-4">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-2xl px-6 py-3 shadow-lg">
            Hire Me Now!
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 rounded-2xl px-6 py-3"
          >
            Explore My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
