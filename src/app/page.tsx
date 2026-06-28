import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 min-h-screen pt-24">
      <Hero />
      <Skills />
    </main>
  );
}
