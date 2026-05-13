import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="border-y border-black/10">
      <div className="page-shell grid grid-cols-1 gap-10 py-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-black/45">
            About Me
          </p>
        </div>

        <div className="md:col-span-9">
          <p className="mt-6 max-w-2xl leading-relaxed text-black/65">
            People often become consumed by what feels important in isolation, losing sight of the bigger picture. 
            Many know what to build and how to build it, but rarely stop to ask why - the purpose, the vision,
            and the reason something should exist in the first place.
          </p>

          <p className="mt-6 max-w-2xl leading-relaxed text-black/65">
            I believe diligence and hard work matter, but ideas do not come from 
            staring at a screen all day. Go watch a film, listen to music, have a 
            nice meal. These things shift perspective, which many truly lack.
          </p>

          <p className="mt-6 max-w-2xl leading-relaxed text-black/65">
            I enjoy building systems and solutions to solve problems, but beyond that, 
            good food, good films, and good music are what I stay alive for.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-block font-mono text-xs uppercase tracking-widest underline underline-offset-4"
          >
            See the projects I have done!
          </Link>
        </div>
      </div>
    </section>
  );
}