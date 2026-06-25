"use client";

import { useState } from "react";

const tabs = ["Overview", "Records", "Workflows", "Reports"] as const;

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Overview");

  return (
    <section
      id="systems"
      data-visual-test="blackout"
      className="relative border-t border-subtle-stroke bg-linear-to-b from-[#FDFDFD] to-white-100"
    >
      <svg
        width="100%"
        height="1"
        className="text-subtle-stroke absolute inset-x-0 top-46 lg:top-36"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="currentColor"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-12">
        <div className="relative col-span-12 pb-7 lg:col-[2/-2]">
          <svg
            width="1"
            height="100%"
            className="text-subtle-stroke absolute -left-px"
          >
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="100%"
              stroke="currentColor"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width="1"
            height="100%"
            className="text-subtle-stroke absolute -right-px"
          >
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="100%"
              stroke="currentColor"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative">
            <div className="grid w-full grid-cols-2 gap-x-px bg-subtle-stroke lg:grid-cols-4">
              {tabs.map((tab) => (
                <div key={tab} className="relative w-full overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex h-16 w-full items-center justify-center border-subtle-stroke border-b px-4 font-medium text-[15px] leading-5 cursor-pointer hover:text-secondary-foreground transition-colors duration-150 ease-out ${
                      activeTab === tab
                        ? "bg-secondary-background text-secondary-foreground"
                        : "bg-primary-background text-accent-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                  {activeTab === tab && (
                    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-subtle-stroke">
                      <div
                        className="h-full bg-black-100"
                        style={{ width: "24.7622%" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative col-span-12 mx-[calc(50%-50vw)] max-w-screen pl-4 sm:flex sm:justify-center sm:px-6 lg:mx-0 lg:ml-0 lg:w-auto lg:px-20">
          <div className="relative w-full max-w-[570px] p-1 max-sm:pr-0 md:max-w-none mask-[linear-gradient(to_bottom,black,black_65%,transparent_100%)]">
            <div className="isolate">
              <div className="w-full overflow-hidden border border-default-stroke bg-white-100 outline-4 outline-default-stroke/20 shadow-[0px_2px_6px_0px_rgba(28,40,64,0.06),0px_6px_20px_-2px_rgba(28,40,64,0.08)] h-[320px] rounded-l-xl border-y border-l sm:rounded-xl sm:border lg:h-[640px] lg:rounded-lg pointer-events-none select-none">
                <div className="relative grid h-full w-full grid-rows-[24px_24px_1fr] lg:grid-cols-[272px_1fr] lg:grid-rows-[auto_auto_1fr]">
                  <div className="items-center h-[24px] gap-[6px] pr-[8px] pl-[6px] lg:h-[48px] lg:gap-[12px] lg:pr-[16px] lg:pl-[12px] border-[#EEEFF1] border-r border-b bg-[#FBFBFB] hidden lg:flex">
                    <div className="size-[12px] shrink-0 rounded-[3.5px] border border-[rgba(0,0,0,0.05)] lg:size-[24px] lg:rounded-[7px] bg-gradient-to-br from-blue-400 to-blue-600" />
                    <div className="flex h-full flex-1 items-center gap-[2px] lg:gap-[4px]">
                      <span className="font-semibold text-[#242629] text-[8px] leading-[10px] tracking-[-0.08px] lg:text-[16px] lg:leading-[20px] lg:tracking-[-0.16px]">
                        Basepoint
                      </span>
                      <svg className="size-[7px] shrink-0 lg:size-[14px]" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5.25L7 9.25L11 5.25" stroke="#5C5E63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full items-center border-[#EEEFF1] border-b-[0.5px] lg:border-b">
                    <div className="flex h-full w-full items-center">
                      <div className="flex w-full items-center justify-between gap-[8px] pr-[5px] pl-[8px] lg:gap-[16px] lg:pr-[10px] lg:pl-[16px]">
                        <div className="flex min-h-px min-w-px flex-1 items-center">
                          <div className="flex shrink-0 items-center gap-[3px] lg:gap-[6px]">
                            <span className="truncate font-medium text-[#242629] text-[7px] leading-[10px] tracking-[-0.07px] lg:text-[14px] lg:leading-[20px] lg:tracking-[-0.14px]">
                              Win deal with Greenleaf
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-span-2 h-full w-full overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
