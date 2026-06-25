import Link from "next/link";
import { ArrowRight } from "lucide-react";

function DashedLine() {
  return (
    <svg className="top-0 -ml-px h-5 w-px overflow-visible lg:h-8">
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke="#E4E7EC"
        strokeDashoffset="-2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SolidLine() {
  return (
    <svg
      width="1"
      height="100%"
      className="text-subtle-stroke hidden xl:block absolute top-0 left-1/2 h-8"
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100%"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GridLineDecor() {
  return (
    <div className="relative border-[#E4E7EC] grid grid-cols-12 gap-x-6 border-b">
      <div className="relative col-span-10 col-start-2 grid h-5 gap-px overflow-hidden px-px lg:h-8 grid-cols-[1fr_0.8fr_0.8fr] xl:grid-cols-[1fr_1.6fr_1fr]">
        <div className="relative hidden lg:block">
          <DashedLine />
        </div>
        <div className="relative hidden lg:block">
          <DashedLine />
          <SolidLine />
        </div>
        <div className="relative hidden lg:block">
          <DashedLine />
        </div>
        <svg className="absolute top-0 right-0 -ml-px hidden h-5 w-px overflow-visible lg:block lg:h-8">
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#E4E7EC"
            strokeDashoffset="-2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function SystemIllustration() {
  return (
    <svg
      className="h-auto w-full max-w-[87.8%] lg:mr-[10.3%] lg:max-w-[82.4%] xl:mr-[11.14%] xl:max-w-[77.98%]"
      viewBox="0 0 475 152"
      fill="none"
    >
      {/* Central large hexagon — Main System */}
      <path
        d="m187.149 146.187-35.176-65.912a8.738 8.738 0 0 1 0-8.28l35.176-65.912C188.811 2.967 192.2 1 195.904 1h82.052c3.705 0 7.092 1.967 8.755 5.083l35.176 65.911a8.738 8.738 0 0 1 0 8.281l-35.176 65.912c-1.662 3.116-5.05 5.083-8.755 5.083h-82.052c-3.704 0-7.092-1.967-8.755-5.083Z"
        fill="#fff"
        stroke="#505967"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Diagonal stripes mask inside central hexagon */}
      <mask
        id="cta_stripes"
        maskUnits="userSpaceOnUse"
        x="191"
        y="76"
        width="133"
        height="76"
        style={{ maskType: "alpha" }}
      >
        <path
          d="m230.357 76.14-38.243 70.927c-1.078 1.998.37 4.423 2.64 4.423h81.741a13 13 0 0 0 11.52-6.976l34.988-66.916a1 1 0 0 0-.886-1.463l-91.76.004Z"
          fill="#967E7E"
        />
      </mask>
      <g mask="url(#cta_stripes)" stroke="#F3F4F6">
        {Array.from({ length: 65 }, (_, i) => {
          const offset = -13.924 - i * 3.422;
          const yOffset = 264.465 + i * 8.265;
          return (
            <path
              key={i}
              transform={`scale(-1.02975 -.96934) rotate(-45 ${offset} ${yOffset})`}
              d="M0-.5h497.768"
            />
          );
        })}
      </g>
      {/* Center horizontal connector line */}
      <path
        d="m190.631 149.822 39.724-73.684-39.724-73.683M322.76 76.134h-92.408"
        stroke="#505967"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 4"
      />
      {/* Central hexagon outline */}
      <path
        d="m187.149 146.187-35.176-65.912a8.738 8.738 0 0 1 0-8.28l35.176-65.912C188.811 2.967 192.2 1 195.904 1h82.052c3.705 0 7.092 1.967 8.755 5.083l35.176 65.911a8.738 8.738 0 0 1 0 8.281l-35.176 65.912c-1.662 3.116-5.05 5.083-8.755 5.083h-82.052c-3.704 0-7.092-1.967-8.755-5.083Z"
        stroke="#505967"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right small hexagon — Support */}
      <path
        d="m391.957 146.204-35.176-65.911a8.743 8.743 0 0 1 0-8.281l35.176-65.911c1.663-3.116 5.051-5.083 8.756-5.083h28.012c3.705 0 7.092 1.967 8.756 5.083l35.176 65.911a8.743 8.743 0 0 1 0 8.28l-35.176 65.912c-1.663 3.116-5.051 5.083-8.756 5.083h-28.012c-3.705 0-7.092-1.967-8.756-5.083Z"
        fill="#fff"
        stroke="#505967"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m395.445 149.833 39.724-73.683-39.724-73.683m77.347 73.68h-37.625"
        stroke="#505967"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 4"
      />
      {/* Right medium hexagon — Deliver */}
      <path
        d="m316.99 146.204-35.176-65.911a8.743 8.743 0 0 1 0-8.281L316.99 6.101c1.663-3.116 5.051-5.083 8.756-5.083h28.013c3.704 0 7.092 1.967 8.755 5.083l35.176 65.911a8.738 8.738 0 0 1 0 8.28l-35.176 65.912c-1.663 3.116-5.051 5.083-8.755 5.083h-28.013c-3.705 0-7.092-1.967-8.756-5.083Z"
        fill="#FAFAFB"
        stroke="#505967"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m320.473 149.833 39.724-73.683-39.724-73.683m77.346 73.68h-37.625"
        stroke="#505967"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 4"
      />
      {/* Left medium hexagon — Build */}
      <path
        d="M112.184 146.204 77.008 80.293a8.74 8.74 0 0 1 0-8.281l35.176-65.911c1.662-3.116 5.051-5.083 8.755-5.083h28.013c3.704 0 7.092 1.967 8.755 5.083l35.177 65.911a8.743 8.743 0 0 1 0 8.28l-35.177 65.912c-1.662 3.116-5.051 5.083-8.755 5.083h-28.013c-3.704 0-7.092-1.967-8.755-5.083Z"
        fill="#FAFAFB"
        stroke="#505967"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M115.666 149.833 155.39 76.15 115.666 2.467m77.346 73.68h-37.625"
        stroke="#505967"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 4"
      />
      {/* Left small hexagon — Checkup */}
      <path
        d="M37.219 146.204 2.043 80.293a8.74 8.74 0 0 1 0-8.281L37.219 6.101c1.663-3.116 5.051-5.083 8.755-5.083h28.013c3.705 0 7.092 1.967 8.756 5.083l35.176 65.911a8.743 8.743 0 0 1 0 8.28l-35.176 65.912c-1.663 3.116-5.051 5.083-8.756 5.083H45.975c-3.705 0-7.093-1.967-8.756-5.083Z"
        fill="#fff"
        stroke="#505967"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m40.707 149.829 39.724-73.683L40.707 2.463m77.346 73.68H80.428"
        stroke="#505967"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 4"
      />
    </svg>
  );
}

export default function Cta() {
  return (
    <section className="relative bg-[#FAFAFB]">
      <GridLineDecor />

      <div className="relative">
        <div className="relative lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-10 lg:col-start-2 lg:grid lg:grid-cols-2">
            <div className="px-6 py-12 lg:flex lg:flex-col lg:items-start lg:justify-center lg:px-0 lg:py-16">
              <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-foreground lg:text-left leading-tight">
                Get Your First System
                <br />
                Built in 14 Days.
              </h2>

              <div className="flex w-full items-center justify-center gap-x-2.5 gap-y-2 max-md:flex-col max-md:items-center mt-6 lg:justify-start">
                <Link
                  href="#contact"
                  className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm has-[>svg:last-child,>img:last-child]:pr-2 has-[>svg:first-child,>img:first-child]:pl-2 max-lg:h-11.5 max-lg:gap-x-2 max-lg:rounded-xl max-lg:px-3.5 max-lg:text-base max-lg:has-[>svg:last-child,>img:last-child]:pr-3 max-lg:has-[>svg:first-child,>img:first-child]:pl-3 button-primary max-md:hidden"
                >
                  Book Free Checkup
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#process"
                  className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm has-[>svg:last-child,>img:last-child]:pr-2 has-[>svg:first-child,>img:first-child]:pl-2 max-lg:h-11.5 max-lg:gap-x-2 max-lg:rounded-xl max-lg:px-3.5 max-lg:text-base max-lg:has-[>svg:last-child,>img:last-child]:pr-3 max-lg:has-[>svg:first-child,>img:first-child]:pl-3 button-outline"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center px-3 lg:justify-end lg:px-0 aspect-2/1 w-full border-[#E4E7EC] border-t [background-size:9.1%_11.5%] [background-position:center] lg:[background-position:right] lg:[background-size:10.3%_9.15%] xl:[background-size:11.14%_9.15%] bg-[linear-gradient(to_right,#EDEFF3_1px,transparent_1px),linear-gradient(to_bottom,#EDEFF3_1px,transparent_1px)] lg:aspect-auto lg:h-[338px] lg:border-x lg:border-t-0">
              <SystemIllustration />
            </div>
          </div>
        </div>


      </div>

      <GridLineDecor />

      {/* Border lines on left and right edges */}
      <div className="absolute top-0 left-0 h-full w-px bg-[#E4E7EC]" />
      <div className="absolute top-0 right-0 h-full w-px bg-[#E4E7EC]" />
    </section>
  );
}
