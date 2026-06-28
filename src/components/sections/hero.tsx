import SmoothLink from "@/components/ui/smooth-link";
import LogoCloud from "@/components/sections/logo-cloud";
import DashboardCarousel from "@/components/sections/dashboard-carousel";

export default function Hero() {
  return (
    <section id="hero" className="relative block overflow-hidden bg-[#FFFFFF] m-0 pt-[129px] pb-8 text-[14px] leading-[1.4] text-[#19171c] font-normal antialiased lg:pt-[160px] lg:pb-10 min-[1441px]:pt-[200px] min-[1441px]:pb-12">
      <div>
        <div className="headerWrapper">
          <section className="text-center">
            <div>
                <div className="mx-auto w-full max-w-[1200px] px-6 min-[1441px]:max-w-[1280px]">
                <div className="mb-5 flex justify-center">
                  <SmoothLink
                    href="#process"
                     className="inline-flex items-center rounded-full bg-black/[0.06] px-3 py-1.5 text-[15px] leading-[1.4] text-[#6e6e73] no-underline transition-colors hover:bg-black/[0.1]"
                  >
                    <span>
                      <h3 className="text-[15px] font-normal">
                        <b className="font-semibold text-[#19171c]">14-Day Starter:</b>{" "}
                        Get your first system built{" "}
                        <span className="underline underline-offset-2 decoration-black/30">
                          Learn more
                        </span>
                       </h3>
                    </span>
                  </SmoothLink>
                </div>

                <h1 className="text-[48px] leading-[90%] font-extrabold tracking-[-0.02em] text-[#19171c] font-['TWK_Lausanne',sans-serif] lg:text-[110px] lg:tracking-[-0.03em] min-[1441px]:text-[150px] min-[1441px]:tracking-[-3.6px]">
                  Simple systems for
                  <br />
                  your business.
                </h1>

                <div className="mt-8 flex justify-center">
                  <SmoothLink
                    href="#contact"
                     className="inline-flex items-center justify-center rounded-[10px] bg-[#202124] px-5 py-2.5 text-[16px] font-semibold leading-[1.4] text-white no-underline transition-colors hover:bg-[#2a2b2e]"
                  >
                    <span className="inline-flex items-center gap-inherit">
                      Book Your Free Checkup
                    </span>
                  </SmoothLink>
                </div>

                <div className="mt-10 flex justify-center overflow-hidden">
                  <p className="text-[14px] leading-[1.4] text-[#6e6e73]">
                    <strong className="font-semibold text-[#19171c]">
                      Over 200 businesses trust us
                    </strong>{" "}
                    to build their systems and grow online.
                  </p>
                </div>

                <DashboardCarousel />
              </div>
            </div>
          </section>

          <LogoCloud />
        </div>
      </div>
    </section>
  );
}
