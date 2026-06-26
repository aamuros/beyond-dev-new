import Link from "next/link";
import LogoCloud from "@/components/sections/logo-cloud";

export default function Hero() {
  return (
    <section className="relative block overflow-hidden bg-[#FFFFFF] m-0 pt-[129px] pb-8 text-[12px] leading-[1.4] text-[#19171c] font-normal antialiased lg:pt-[160px] lg:pb-10 min-[1441px]:pt-[200px] min-[1441px]:pb-12">
      <div>
        <div className="headerWrapper">
          <section className="text-center">
            <div>
                <div className="mx-auto w-full max-w-[1200px] px-6 min-[1441px]:max-w-[1280px]">
                <div className="mb-5 flex justify-center">
                  <Link
                    href="#process"
                    className="inline-flex items-center rounded-full bg-black/[0.06] px-3 py-1.5 text-[13px] leading-[1.4] text-[#6e6e73] no-underline transition-colors hover:bg-black/[0.1]"
                  >
                    <span>
                      <h3 className="text-[13px] font-normal">
                        <b className="font-semibold text-[#19171c]">14-Day Starter:</b>{" "}
                        Get your first system built{" "}
                        <span className="underline underline-offset-2 decoration-black/30">
                          Learn more
                        </span>
                      </h3>
                    </span>
                  </Link>
                </div>

                <h1 className="text-[36px] leading-[1.05] font-extrabold tracking-[-0.02em] text-[#19171c] lg:text-[80px] lg:leading-[95%] lg:tracking-[-0.03em] min-[1441px]:text-[115px] min-[1441px]:leading-[95%] min-[1441px]:tracking-[-3.6px]">
                  Simple systems for
                  <br />
                  your business.
                </h1>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#202124] px-5 py-2.5 text-[14px] font-semibold leading-[1.4] text-white no-underline transition-colors hover:bg-[#2a2b2e]"
                  >
                    <span className="inline-flex items-center gap-inherit">
                      Book Your Free Checkup
                    </span>
                  </Link>
                </div>

                <div className="mt-10 flex justify-center overflow-hidden">
                  <p className="text-[12px] leading-[1.4] text-[#6e6e73]">
                    <strong className="font-semibold text-[#19171c]">
                      Over 200 businesses trust us
                    </strong>{" "}
                    to build their systems and grow online.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <LogoCloud />
        </div>
      </div>
    </section>
  );
}
