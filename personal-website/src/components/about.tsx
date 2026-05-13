export default function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl grid-cols-1 border-y border-black/10 px-5 py-28 md:grid-cols-12"
    >
      <div className="mb-10 md:col-span-3 md:mb-0">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
          Manifesto
        </p>
      </div>

      <div className="space-y-8 md:col-span-9">
        <p className="max-w-4xl text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
          People often become consumed by what feels important in isolation,
          losing sight of the bigger picture. 
        </p>

        <div className="grid gap-8 text-lg leading-relaxed text-black/70 md:grid-cols-2">
          <p>
            Many know what to build and how
            to build it, but rarely stop to ask why - the purpose, the vision,
            and the reason something should exist in the first place.
          </p>

          <p>
            I believe diligence and hard work matter, but ideas do not come from
            staring at a screen all day. Go watch a film, listen to music, have a
            nice meal. These things shift perspective, which many truly lack.
            
            I enjoy building systems and solutions to solve problems, but beyond that,
            good food, good films, and good music are what I stay alive for.
          </p>
        </div>
      </div>
    </section>
  );
}