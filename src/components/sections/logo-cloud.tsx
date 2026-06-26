import Image from "next/image";

const logos = [
  { name: "Granola", src: "https://a.storyblok.com/f/234930/172x60/fcdb777219/granola.svg", width: 172, height: 60 },
  { name: "Wispr Flow", src: "https://a.storyblok.com/f/234930/173x60/5aa9938421/wispr-flow.svg", width: 173, height: 60 },
  { name: "Listen Labs", src: "https://a.storyblok.com/f/234930/173x60/7800e4c389/listen-labs.svg", width: 173, height: 60 },
  { name: "Obvious", src: "https://a.storyblok.com/f/234930/172x60/b5a865340d/obvious.svg", width: 172, height: 60 },
  { name: "Modal", src: "https://a.storyblok.com/f/234930/172x60/5ed753dd8e/modal.svg", width: 172, height: 60 },
  { name: "USV", src: "https://a.storyblok.com/f/234930/173x60/bbb189948e/usv.svg", width: 173, height: 60 },
  { name: "Replicate", src: "https://a.storyblok.com/f/234930/172x60/4fe58634ce/replicate.svg", width: 172, height: 60 },
  { name: "Railway", src: "https://a.storyblok.com/f/234930/173x60/1daf489031/railway.svg", width: 173, height: 60 },
  { name: "Taskrabbit", src: "https://a.storyblok.com/f/234930/172x60/b410ff1288/taskrabbit.svg", width: 172, height: 60 },
  { name: "Public", src: "https://a.storyblok.com/f/234930/173x60/7a911b221e/public.svg", width: 173, height: 60 },
  { name: "Wordsmith", src: "https://a.storyblok.com/f/234930/173x60/baaf394a5a/wordsmith.svg", width: 173, height: 60 },
  { name: "Passionfroot", src: "https://a.storyblok.com/f/234930/173x60/34144cc093/passionfroot-3.svg", width: 173, height: 60 },
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-10 max-lg:gap-7 max-md:gap-5">
      {logos.map((logo) => (
        <div key={logo.name} className="flex h-13 shrink-0 items-center max-xl:h-11 max-md:h-9">
          <Image
            alt={logo.name}
            loading="lazy"
            width={logo.width}
            height={logo.height}
            decoding="async"
            className="h-full w-auto object-contain"
            src={logo.src}
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoCloud() {
  return (
    <section id="systems">
      <div className="grid grid-cols-12 justify-items-center mt-10 pb-12 lg:mt-12">
        <div className="col-[2/-2] w-full">
          <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track flex w-max">
              <LogoRow />
              <LogoRow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
