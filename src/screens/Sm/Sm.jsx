import React from "react";
import { useWindowWidth } from "../../breakpoints";

export const Sm = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="w-full flex flex-row justify-center bg-white">
      <div
        className={`h-[5856px] overflow-hidden bg-white relative ${
          screenWidth < 1512
            ? "w-[1360px]"
            : screenWidth >= 1512 && screenWidth < 1728
            ? "w-[1512px]"
            : screenWidth >= 1728
            ? "w-[1728px]"
            : ""
        }`}
      >
        <div
          className={`left-0 top-0 bg-cover h-[938px] bg-[50%_50%] absolute ${
            screenWidth < 1512
              ? "w-[1360px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "w-[1512px]"
              : screenWidth >= 1728
              ? "w-[1728px]"
              : ""
          } ${
            screenWidth < 1512
              ? "bg-[url(/static/img/bg.png)]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "bg-[url(/static/img/bg-1.png)]"
              : screenWidth >= 1728
              ? "bg-[url(/static/img/bg-2.png)]"
              : ""
          }`}
        >
          <div
            className={`inline-flex flex-col items-start top-[97px] gap-7 relative ${
              screenWidth < 1512
                ? "left-[77px]"
                : screenWidth >= 1512 && screenWidth < 1728
                ? "left-[153px]"
                : screenWidth >= 1728
                ? "left-[261px]"
                : ""
            }`}
          >
            <div className="w-[1210px] mr-[-3.73px] h-[149px] relative">
              <div className="border border-solid border-[#c0b4b41a] w-[1206px] h-[149px] rounded-[40px] [-webkit-backdrop-filter:blur(19.8px)_brightness(100%)] bg-black backdrop-blur-[19.8px] backdrop-brightness-[100%] relative">
                <p className="[font-family:'Poppins',Helvetica] w-[581px] left-[312px] tracking-[0] text-2xl top-[101px] text-white absolute font-normal whitespace-nowrap leading-[normal]">
                  Front-End Developer , UI/UX &amp; Graphic Designer
                </p>
                <div className="[font-family:'Poppins',Helvetica] w-[695px] left-64 tracking-[0] text-[75px] top-2 text-white absolute font-semibold leading-[normal]">
                  M-JEY L. SATURNO
                </div>
              </div>
            </div>
            <div className="w-[1208.27px] mr-[-2.00px] h-[249.1px] relative">
              <div className="border border-solid border-[#c0b4b41a] w-[1206px] h-[249px] rounded-[40px] [-webkit-backdrop-filter:blur(19.8px)_brightness(100%)] bg-black backdrop-blur-[19.8px] backdrop-brightness-[100%] relative">
                <div className="[font-family:'Poppins',Helvetica] w-[133px] left-[536px] tracking-[0] text-[43px] -top-px text-white absolute font-normal leading-[normal]">
                  SKILLS
                </div>
                <img
                  className="w-[765px] left-[220px] top-20 h-[121px] absolute"
                  alt="Languages"
                  src={
                    (screenWidth >= 1512 && screenWidth < 1728) || screenWidth < 1512
                      ? "/img/languages-1.png"
                      : screenWidth >= 1728
                      ? "/img/languages-2.png"
                      : undefined
                  }
                />
              </div>
            </div>
            <div className="w-[1208.27px] mr-[-2.00px] h-[248.79px] relative">
              <div className="border border-solid border-[#c0b4b41a] w-[1206px] h-[249px] rounded-[40px] [-webkit-backdrop-filter:blur(19.8px)_brightness(100%)] bg-black backdrop-blur-[19.8px] backdrop-brightness-[100%] relative">
                <div className="[font-family:'Poppins',Helvetica] w-[117px] left-[542px] tracking-[0] text-[43px] top-[15px] text-white absolute font-normal leading-[normal]">
                  Tools
                </div>
                <img
                  className="w-[661px] left-[272px] top-[63px] h-[164px] absolute"
                  alt="Group"
                  src={
                    screenWidth < 1512
                      ? "/img/group-1.png"
                      : screenWidth >= 1512 && screenWidth < 1728
                      ? "/img/group-1-1.png"
                      : screenWidth >= 1728
                      ? "/img/group-1-2.png"
                      : undefined
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`left-0 top-[1650px] h-[4206px] absolute ${
            screenWidth < 1512
              ? "w-[1416px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "w-[1568px]"
              : screenWidth >= 1728
              ? "w-[1784px]"
              : ""
          }`}
        >
          <div
            className={`left-0 top-0 h-[4206px] absolute ${
              screenWidth < 1512
                ? "w-[1416px]"
                : screenWidth >= 1512 && screenWidth < 1728
                ? "w-[1568px]"
                : screenWidth >= 1728
                ? "w-[1784px]"
                : ""
            }`}
          >
            <div
              className={`h-[4206px] relative ${
                screenWidth < 1512
                  ? "w-[1412px]"
                  : screenWidth >= 1512 && screenWidth < 1728
                  ? "w-[1564px]"
                  : screenWidth >= 1728
                  ? "w-[1780px]"
                  : ""
              }`}
            >
              <div
                className={`left-0 top-0 h-[4206px] bg-[#1e1e1e] absolute ${
                  screenWidth < 1512
                    ? "w-[1360px]"
                    : screenWidth >= 1512 && screenWidth < 1728
                    ? "w-[1512px]"
                    : screenWidth >= 1728
                    ? "w-[1728px]"
                    : ""
                }`}
              />
              <div
                className={`w-[1166px] top-[245px] h-[1299px] absolute ${
                  screenWidth < 1512
                    ? "left-[103px]"
                    : screenWidth >= 1512 && screenWidth < 1728
                    ? "left-[179px]"
                    : screenWidth >= 1728
                    ? "left-[287px]"
                    : ""
                }`}
              >
                <div className="w-[1036px] left-[55px] top-[252px] h-[1047px] absolute">
                  <div className="w-[466px] left-[570px] top-0 h-[1047px] absolute">
                    <img
                      className="w-[466px] left-0 top-0 object-cover h-[533px] absolute"
                      alt="Logo"
                      src="/img/logo-1-2.png"
                    />
                    <img
                      className="w-[466px] left-0 top-[514px] object-cover h-[533px] absolute"
                      alt="Logo with name"
                      src="/img/logo-with-name-1-2.png"
                    />
                  </div>
                  <img
                    className="w-[502px] left-0 top-2 object-cover h-[1012px] absolute"
                    alt="Image"
                    src="/img/image-1-2.png"
                  />
                </div>
                <p className="[font-family:'Poppins',Helvetica] w-[1164px] left-0 tracking-[0] text-4xl top-0 text-white absolute font-normal leading-[normal]">
                  <span className="font-medium">
                    Icadio - A Image Captioning WIth Speech Syntesizer for visually <br />
                    impaired people.
                    <br />
                  </span>
                  <span className="text-2xl">
                    Built with Vite + React &amp; Salesforce’s BLIP: Bootstrapping Language-Image Pre-training for
                    Unified Vision-Language Understanding and Generation.
                  </span>
                </p>
              </div>
              <div
                className={`[font-family:'Poppins',Helvetica] w-[717px] tracking-[0] text-9xl top-20 text-white absolute font-bold leading-[normal] ${
                  screenWidth < 1512
                    ? "left-[103px]"
                    : screenWidth >= 1512 && screenWidth < 1728
                    ? "left-[255px]"
                    : screenWidth >= 1728
                    ? "left-[471px]"
                    : ""
                }`}
              >
                Works:
              </div>
              <div
                className={`[font-family:'Poppins',Helvetica] w-[1309px] tracking-[0] text-[85px] top-[1584px] text-white absolute font-bold leading-[normal] ${
                  screenWidth < 1512
                    ? "left-[103px]"
                    : screenWidth >= 1512 && screenWidth < 1728
                    ? "left-[255px]"
                    : screenWidth >= 1728
                    ? "left-[471px]"
                    : ""
                }`}
              >
                Graphic Design Works:
              </div>
            </div>
          </div>
          <div
            className={`w-[911px] top-[1781px] h-[2236px] absolute ${
              screenWidth < 1512
                ? "left-[225px]"
                : screenWidth >= 1512 && screenWidth < 1728
                ? "left-[301px]"
                : screenWidth >= 1728
                ? "left-[409px]"
                : ""
            }`}
          >
            <img
              className="w-[435px] left-0 top-0 object-cover h-[615px] absolute"
              alt="Tyreek poster"
              src="/img/tyreek-poster-1-2.png"
            />
            <img
              className="w-[435px] left-[476px] top-0 object-cover h-[615px] absolute"
              alt="Kd"
              src="/img/kd-2k25-1-2.png"
            />
            <img
              className="w-[435px] left-0 top-[667px] object-cover h-[544px] absolute"
              alt="Raiders"
              src="/img/raiders-1-2.png"
            />
            <img
              className="w-[435px] left-[476px] top-[667px] object-cover h-[544px] absolute"
              alt="Gusion rse"
              src="/img/gusion-rse-1-2.png"
            />
            <img
              className="w-[435px] left-0 top-[1250px] object-cover h-[435px] absolute"
              alt="Nike kobe protro"
              src="/img/nike-kobe-6-protro-1-2.png"
            />
            <img
              className="w-[435px] left-[476px] top-[1250px] object-cover h-[435px] absolute"
              alt="Anta kai artist on"
              src="/img/anta-kai-1-artist-on-court-1-1-2.png"
            />
            <img
              className="w-[911px] left-0 top-[1724px] object-cover h-[512px] absolute"
              alt="Pubmat"
              src="/img/pubmat2-1-2.png"
            />
          </div>
        </div>
        <div
          className={`w-[1229px] top-[994px] h-[536px] absolute ${
            screenWidth < 1512
              ? "left-[65px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "left-[141px]"
              : screenWidth >= 1728
              ? "left-[249px]"
              : ""
          }`}
        >
          <div className="[font-family:'Poppins',Helvetica] w-[387px] left-[444px] tracking-[0] text-[64px] top-0 text-black absolute font-semibold leading-[normal]">
            EXPERIENCE
          </div>
          <div className="w-[398px] left-0 top-[115px] h-[421px] absolute">
            <div className="w-[396px] h-[421px] relative">
              <div className="w-[396px] left-0 top-0.5 h-[419px] rounded-[50px] bg-black absolute" />
              <img
                className="w-[145px] left-[126px] top-0 h-[150px] absolute"
                alt="Frame"
                src={
                  (screenWidth >= 1512 && screenWidth < 1728) || screenWidth < 1512
                    ? "/img/frame-1.svg"
                    : screenWidth >= 1728
                    ? "/img/frame-2.svg"
                    : undefined
                }
              />
              <p className="[font-family:'Poppins',Helvetica] w-[396px] left-0 tracking-[0] text-[25px] top-[150px] text-white absolute font-normal text-center leading-[normal]">
                <span className="font-semibold">
                  {" "}
                  Freelance Graphic Designer <br />
                </span>
                <span className="font-light">
                  Cabuyao City, Laguna <br />
                  March 2021 - 2022
                </span>
              </p>
            </div>
          </div>
          <div className="w-[400px] left-[416px] top-[115px] h-[419px] absolute">
            <div className="w-[396px] h-[419px] rounded-[50px] bg-black relative">
              <p className="[font-family:'Poppins',Helvetica] w-[394px] left-0.5 tracking-[0] text-[25px] top-[148px] text-white absolute font-normal text-center leading-[normal]">
                <span className="font-semibold">
                  {" "}
                  Part-Time Layout Designer &amp; Graphic Designer <br />
                </span>
                <span className="font-light">
                  Cabuyao City, Laguna <br />
                  Dec 2022 - Aug 2023
                </span>
              </p>
              <div className="[font-family:'Poppins',Helvetica] w-[394px] left-0.5 tracking-[0] text-5xl top-[41px] text-white absolute font-extrabold text-center leading-[normal]">
                EZ Press
              </div>
            </div>
          </div>
          <div className="w-[398px] left-[831px] top-[115px] h-[419px] absolute">
            <div className="w-[396px] h-[419px] rounded-[50px] bg-black relative">
              <p className="[font-family:'Poppins',Helvetica] w-[394px] left-0.5 tracking-[0] text-[25px] top-[150px] text-white absolute font-normal text-center leading-[normal]">
                <span className="font-semibold">
                  Freelanc Graphic Designer
                  <br />
                </span>
                <span className="font-light">
                  Cabuyao City, Laguna <br />
                  Present
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
