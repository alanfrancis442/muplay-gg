"use client";
import Image from "next/image";
import React from "react";

const details = [
  {
    title: "Promote μPlay.gg",
    description: "Spread the word about μPlay.gg in their campuses",
  },
  {
    title: "Organize Events",
    description:
      "Host events and activities in their institutions to engage students",
  },
  {
    title: "Build Community",
    description:
      "Create a network of gamers and developers within their campus, fostering a micro-community that ties into the larger μPlay.gg network.",
  },
];

function Cap() {
  return (
    <div className="py-32 mb-64 box-center w-full bg-[url(/Cap/background.png)] bg-cover bg-center text-center ">
      <div className=" w-full h-full box-center flex-col gap-5">
        <h1 className="text-4xl font-paladins">Campus Ambassador Program</h1>
        <p>
          Our Campus Ambassador program aims to bring μPlay.gg to educational
          institutions. Ambassadors:
        </p>
        <div className="box-center gap-12 px-12 pt-8 max-md:flex-col">
          {details.map((e, i) => (
            <div
              key={i}
              className="box-center bg-[#1E1E1E] p-3 flex justify-between clip-box"
            >
              <div className="w-1/2">
                <h1 className="font-bold text-2xl">Organize Events</h1>
                <p className="text-sm">
                  Host events and activities in their institutions to engage
                  students
                </p>
              </div>
              <Image
                src={"/Cap/icon.png"}
                width={150}
                height={150}
                alt="ambassador"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cap;