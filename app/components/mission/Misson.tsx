"use client";
import Image from "next/image";
import { title } from "process";
import React from "react";

const aim = [
  {
    "Uniting Gamers":
      "Bringing together individuals from diverse backgrounds to share their passion for gaming",
    image: "/mission/aim1.svg",
  },
  {
    "Development Aid":
      "Providing resources and support for indie game developers to unleash their creativity",
    image: "/mission/aim2.svg",
  },
  {
    "Fostering Competition":
      "Creating an environment where esports enthusiasts can compete at the highest levels.",
    image: "/mission/aim3.svg",
  },
  {
    "Building Community":
      " Promoting a sense of belonging and mutual support among all members. ",
    image: "/mission/aim4.svg",
  },
];

const whatWeDo = [
  {
    title: "Esports Tournaments",
    description:
      "Hosting annual esports championship,Simulate.gg with exciting prizes",
  },
  {
    title: "Game Jams",
    description:
      "Organizing events where developers can come together to create games in a short period",
  },
  {
    title: "Community Events",
    description:
      "Facilitating meetups, online events, talk sessions ,bootcamps  and discussion forums to foster community engagement",
  },
  {
    title: "Educational Programs",
    description:
      " Running courses and workshops through our educational partner, TILTEDU, to nurture the next generation of game developers",
  },
];

const contribure_cards = [
  {
    title: "Hosting Workshops",
    description:
      "Organizing workshops and training sessions led by industry experts.",
  },
  {
    title: "Team Projects",
    description:
      "Featuring indie games and developers on our platform, giving them a stage to shine",
  },
  {
    title: "Showcasing Talent",
    description:
      " Encouraging collaboration between developers, artists, and gamers to create innovative projects",
  },
];

function Misson() {
  return (
    <div className=" pt-12 py-64 box-center flex-col">
      <div className=" box-center bg-[url(/mission/mission_bg.jpg)] bg-cover bg-center py-28 w-full">
        <div className="box-center flex-col gap-12">
          <h1 className="text-4xl font-paladins text-wrap text-center">
            Mission & Vision of muplay.gg
          </h1>
          <div className="flex gap-5 max-md:flex-col items-center justify-center">
            <Image
              width={500}
              height={500}
              alt="vision"
              src={"/mission/mission.svg"}
            ></Image>
            <Image
              width={500}
              height={500}
              alt="vision"
              src={"/mission/vision.svg"}
            ></Image>
          </div>
        </div>
      </div>

      <div className=" box-center flex-col gap-8 py-32">
        <h1 className="text-4xl font-paladins flex-wrap text-center">
          what we aim to achieve
        </h1>
        {/* <p className="text-lg">μPlay.gg is dedicated to</p> */}
        <div className="clip-box-inverse bg-[#111111] w-[90%]">
          <div className="flex flex-col gap-5 p-12">
            {aim.map((e, i) => {
              return (
                <div key={i} className="flex gap-2 bg-blue-">
                  <Image
                    width={100}
                    height={100}
                    alt="aim"
                    src={`/mission/achive/char${i + 1}.webp`}
                    className="rounded-lg h-16 w-16"
                  ></Image>
                  <div className="flex items-center max-md:flex-col">
                    <span className="text-ld font-paladins md:text-nowrap text-wrap md:text-2xl text-xl pr-4">
                      {Object.keys(e)[0]} :
                    </span>
                    <p className="text-wrap md:text-lg text-base">
                      {Object.values(e)[0]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="act flex w-[95%] gap-10 box-center max-md:flex-col py-12">
        <Image
          src="/mission/activities.png"
          alt="activities"
          width={900}
          height={500}
          className="w-1/2"
        ></Image>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-paladins">activities we do</h1>
            <p>
              {`μPlay.gg is more than just a community—it's a hub of activity.
              Some of our key activities include`}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {whatWeDo.map((e, i) => {
              return (
                <div key={i} className="flex gap-5 items-center">
                  <Image
                    width={50}
                    height={50}
                    alt="activity"
                    src={"/mission/icon.png"}
                  ></Image>
                  <div className="box-center flex flex-col justify-start items-start">
                    <span className="text-2xl font-bold">{e.title}</span>
                    <p className="w-1/2">{e.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="box-center gap-6 flex-col py-24">
        <p className="font-paladins text-4xl text-center text-wrap">
          How We Contribute to the Creative Community
        </p>
        <p>
          At μPlay.gg, we believe in the power of creativity. We contribute to
          the creative community by:
        </p>
        <div className="flex gap-12 pt-60 max-md:flex-col max-md:gap-48">
          {contribure_cards.map((e, i) => {
            return (
              <div key={i} className="box-center relative z-0">
                <Image
                  src={`/mission/cards/c${i + 1}img.png`}
                  width={250}
                  height={250}
                  className={`absolute -top-36`}
                  alt="creative"
                ></Image>
                <div className=" max-w-80 clip-top bg-gradient-to-t from-[#222222] to-[#151515]">
                  <div className="p-4">
                    <h1 className="font-paladins text-2xl text-center">
                      {e.title}
                    </h1>
                    <p className="text-center py-5 text-base">
                      {e.description}
                    </p>
                  </div>
                  <Image
                    src={`/mission/cards/b${i + 1}img.png`}
                    width={250}
                    height={250}
                    className="w-full"
                    alt="creative"
                  ></Image>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Misson;
