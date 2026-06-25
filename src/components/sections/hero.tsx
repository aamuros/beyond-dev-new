import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/container";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-[#FDFDFD] to-white-100 pt-24 pb-20 md:pt-32 md:pb-28">
      <Container grid>
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
          <div
            className="relative inline-flex items-center gap-x-1 py-[5px] pr-[7px] pl-[11px] bg-white-100 hover:bg-[#FBFBFC] transition-colors duration-300 ease-in-out font-medium text-[13px]/[18px] text-secondary-foreground border border-weak-stroke mb-5"
            style={{ borderRadius: "13px" }}
          >
            <span className="text-balance">For Local Filipino Businesses</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1]">
            Stop Managing Your Business{" "}
            <span className="text-primary">With Paper and Chat</span>
          </h1>

          <p className="mt-5 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            We help local businesses fix one messy manual process by turning it
            into a simple working system &mdash; in just 14 days after
            requirements are approved.
          </p>

          <div className="flex items-center justify-center gap-y-2 max-md:flex-col max-md:items-center mt-6 w-full gap-x-2">
            <Link
              href="#contact"
              className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm has-[>svg:last-child,>img:last-child]:pr-2 has-[>svg:first-child,>img:first-child]:pl-2 max-lg:h-11.5 max-lg:gap-x-2 max-lg:rounded-xl max-lg:px-3.5 max-lg:text-base max-lg:has-[>svg:last-child,>img:last-child]:pr-3 max-lg:has-[>svg:first-child,>img:first-child]:pl-3 button-primary max-md:hidden"
            >
              Book Free Business Checkup
              <ArrowRight className="h-4 w-4" />
            </Link>

            <form
              className="flex w-full max-w-xs flex-col gap-2 md:hidden"
              action="#contact"
            >
              <div className="flex flex-col gap-y-1.5">
                <div>
                  <input
                    className="block w-full rounded-[10px] bg-background p-[10px_13px] outline-none transition-all duration-300 ease-out text-secondary-foreground placeholder:text-accent-foreground border border-border hover:border-subtle-stroke hover:shadow-[0px_1px_4px_rgba(56,_62,_71,_0.1)] focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-300 placeholder:max-w-full placeholder:text-base placeholder-shown:truncate"
                    placeholder="Your email address"
                    type="email"
                    name="email"
                  />
                </div>
              </div>
              <button
                className="inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-11.5 gap-x-2 rounded-xl px-3.5 text-base has-[>svg:last-child,>img:last-child]:pr-3 has-[>svg:first-child,>img:first-child]:pl-3 button-primary relative"
                type="submit"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="animate-spin opacity-0 transition-opacity duration-150"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="8"
                      stroke="currentColor"
                      strokeOpacity="0.1"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17 9C17 10.0506 16.7931 11.0909 16.391 12.0615C15.989 13.0321 15.3997 13.914 14.6569 14.6569C13.914 15.3997 13.0321 15.989 12.0615 16.391C11.0909 16.7931 10.0506 17 9 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="transition-opacity duration-150">
                  Book Free Business Checkup
                </span>
              </button>
            </form>

            <Link
              href="#process"
              className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm has-[>svg:last-child,>img:last-child]:pr-2 has-[>svg:first-child,>img:first-child]:pl-2 max-lg:h-11.5 max-lg:gap-x-2 max-lg:rounded-xl max-lg:px-3.5 max-lg:text-base max-lg:has-[>svg:last-child,>img:last-child]:pr-3 max-lg:has-[>svg:first-child,>img:first-child]:pl-3 button-outline max-md:hidden"
            >
              See How It Works
            </Link>

            <Link
              href="#process"
              className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm has-[>svg:last-child,>img:last-child]:pr-2 has-[>svg:first-child,>img:first-child]:pl-2 max-lg:h-11.5 max-lg:gap-x-2 max-lg:rounded-xl max-lg:px-3.5 max-lg:text-base max-lg:has-[>svg:last-child,>img:last-child]:pr-3 max-lg:has-[>svg:first-child,>img:first-child]:pl-3 button-ghost group self-center md:hidden"
            >
              <span>See How It Works</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="relative transition-[translate] duration-400 ease-in-out group-hover:translate-x-0.25 group-hover:duration-150 group-active:translate-x-0.25 group-active:duration-50"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.1"
                  d="M2.25 7h9.5m0 0L8.357 3.5M11.75 7l-3.393 3.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
