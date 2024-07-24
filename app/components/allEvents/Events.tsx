"use client";
import Image from "next/image";
import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const images = [];

export default function Events(): JSX.Element {
  return (
    <>
      <div className="bg-red- mb-32 flex flex-col justify-center items-center gap-5">
        <h1 className="font-paladins text-4xl">Our Previous Events</h1>
        <p className="text-base">
          Explore the highlights and key moments from our past events
        </p>
        <div className="px-32 pt-12">
          <TECarousel showControls ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {[1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <TECarouselItem
                    key={i}
                    itemID={i + 1}
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  >
                    <div className="w-full bg-red- flex justify-center items-center">
                      <Image
                        src={"/allEvents/img2.png"}
                        alt="event"
                        width={500}
                        height={500}
                        className="object-contain object-center"
                      ></Image>
                    </div>
                  </TECarouselItem>
                );
              })}
            </div>
          </TECarousel>
        </div>
      </div>
    </>
  );
}
