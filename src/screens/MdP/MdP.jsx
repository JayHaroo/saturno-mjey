import React from "react";
import { useWindowWidth } from "../../breakpoints";

export const MdP = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="w-full flex flex-row justify-center bg-white">
      <div
        className={`bg-white relative ${
          screenWidth < 433
            ? "w-[395px]"
            : screenWidth >= 433 && screenWidth < 1360
            ? "w-[433px]"
            : screenWidth >= 1360 && screenWidth < 1512
            ? "w-[1360px]"
            : screenWidth >= 1512 && screenWidth < 1728
            ? "w-[1512px]"
            : screenWidth >= 1728
            ? "w-[1728px]"
            : ""
        } ${
          (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
            ? "h-[3620px]"
            : (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
            ? "h-[5856px]"
            : ""
        } ${
          (screenWidth >= 1360 && screenWidth < 1512) ||
          (screenWidth >= 1512 && screenWidth < 1728) ||
          screenWidth >= 1728 ||
          (screenWidth >= 433 && screenWidth < 1360)
            ? "overflow-hidden"
            : ""
        }`}
      >
        <div
          className={`left-0 top-0 bg-cover bg-[50%_50%] absolute ${
            screenWidth < 433
              ? "w-[395px]"
              : screenWidth >= 433 && screenWidth < 1360
              ? "w-[433px]"
              : screenWidth >= 1360 && screenWidth < 1512
              ? "w-[1360px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "w-[1512px]"
              : screenWidth >= 1728
              ? "w-[1728px]"
              : ""
          } ${
            (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
              ? "h-[440px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "h-[938px]"
              : ""
          } ${
            screenWidth < 433
              ? "bg-[url(/static/img/bg.png)]"
              : screenWidth >= 433 && screenWidth < 1360
              ? "bg-[url(/static/img/bg-1.png)]"
              : screenWidth >= 1360 && screenWidth < 1512
              ? "bg-[url(/static/img/bg-2.png)]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "bg-[url(/static/img/bg-3.png)]"
              : screenWidth >= 1728
              ? "bg-[url(/static/img/bg-4.png)]"
              : ""
          }`}
        >
          <div
            className={`relative ${
              (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "w-[359px]" : ""
            } ${
              screenWidth < 433
                ? "left-[17px]"
                : screenWidth >= 433 && screenWidth < 1360
                ? "left-[39px]"
                : screenWidth >= 1360 && screenWidth < 1512
                ? "left-[77px]"
                : screenWidth >= 1512 && screenWidth < 1728
                ? "left-[153px]"
                : screenWidth >= 1728
                ? "left-[261px]"
                : ""
            } ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
                ? "inline-flex"
                : ""
            } ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
                ? "flex-col"
                : ""
            } ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
                ? "items-start"
                : ""
            } ${
              screenWidth < 433
                ? "top-[33px]"
                : screenWidth >= 433 && screenWidth < 1360
                ? "top-[29px]"
                : (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                ? "top-[97px]"
                : ""
            } ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
                ? "gap-7"
                : ""
            } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "h-[323px]" : ""}`}
          >
            <div
              className={`${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "w-[363px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "w-[1210px]"
                  : ""
              } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "left-0" : ""} ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "top-0" : ""
              } ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "mr-[-3.73px]"
                  : ""
              } ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "h-[92px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "h-[149px]"
                  : ""
              } ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "absolute"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "relative"
                  : ""
              }`}
            >
              <div
                className={`border border-solid border-[#c0b4b41a] rounded-[40px] [-webkit-backdrop-filter:blur(19.8px)_brightness(100%)] bg-black backdrop-blur-[19.8px] backdrop-brightness-[100%] relative ${
                  (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "w-[359px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "w-[1206px]"
                    : ""
                } ${
                  (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "h-[92px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "h-[149px]"
                    : ""
                }`}
              >
                <p
                  className={`[font-family:'Poppins',Helvetica] tracking-[0] text-white absolute font-normal whitespace-nowrap leading-[normal] ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "w-[359px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[581px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "-left-px"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-[312px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "text-[13px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "text-2xl"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "top-[45px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "top-[101px]"
                      : ""
                  } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "text-center" : ""}`}
                >
                  Front-End Developer , UI/UX &amp; Graphic Designer
                </p>
                <div
                  className={`[font-family:'Poppins',Helvetica] tracking-[0] text-white absolute font-semibold leading-[normal] ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "w-[359px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[695px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "-left-px"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-64"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "text-2xl"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "text-[75px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "top-[11px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "top-2"
                      : ""
                  } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "text-center" : ""} ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "whitespace-nowrap" : ""
                  }`}
                >
                  M-JEY L. SATURNO
                </div>
              </div>
            </div>
            <div
              className={`${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "w-[361px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "w-[1208.27px]"
                  : ""
              } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "left-0" : ""} ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "top-[110px]" : ""
              } ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "mr-[-2.00px]"
                  : ""
              } ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "h-[91px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "h-[249.1px]"
                  : ""
              } ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "absolute"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "relative"
                  : ""
              }`}
            >
              <div
                className={`border border-solid border-[#c0b4b41a] rounded-[40px] [-webkit-backdrop-filter:blur(19.8px)_brightness(100%)] bg-black backdrop-blur-[19.8px] backdrop-brightness-[100%] relative ${
                  (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "w-[359px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "w-[1206px]"
                    : ""
                } ${
                  (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "h-[91px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "h-[249px]"
                    : ""
                }`}
              >
                <div
                  className={`[font-family:'Poppins',Helvetica] tracking-[0] text-white absolute font-normal leading-[normal] ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "w-[359px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[133px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "-left-px"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-[536px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "text-2xl"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "text-[43px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "top-[3px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "-top-px"
                      : ""
                  } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "text-center" : ""}`}
                >
                  SKILLS
                </div>
                <img
                  className={`absolute ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "w-[238px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[765px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "left-[60px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-[220px]"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "top-[41px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "top-20"
                      : ""
                  } ${
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "h-10"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "h-[121px]"
                      : ""
                  }`}
                  alt="Languages"
                  src={
                    (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                      ? "/img/languages-1.png"
                      : (screenWidth >= 1360 && screenWidth < 1512) || (screenWidth >= 1512 && screenWidth < 1728)
                      ? "/img/languages-3.png"
                      : screenWidth >= 1728
                      ? "/img/languages-4.png"
                      : undefined
                  }
                />
              </div>
            </div>
            <div
              className={`${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "w-[361px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "w-[1208.27px]"
                  : ""
              } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "left-0" : ""} ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "top-[227px]" : ""
              } ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "mr-[-2.00px]"
                  : ""
              } ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "h-24"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "h-[248.79px]"
                  : ""
              } ${
                (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "absolute"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "relative"
                  : ""
              }`}
            >
              <div
                className={`border border-solid border-[#c0b4b41a] rounded-[40px] [-webkit-backdrop-filter:blur(19.8px)_brightness(100%)] bg-black backdrop-blur-[19.8px] backdrop-brightness-[100%] relative ${
                  (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "w-[359px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "w-[1206px]"
                    : ""
                } ${
                  (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "h-24"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "h-[249px]"
                    : ""
                }`}
              >
                {((screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433) && (
                  <>
                    <div className="[font-family:'Poppins',Helvetica] w-[359px] -left-px tracking-[0] text-2xl top-0.5 text-white font-normal text-center whitespace-nowrap leading-[normal] absolute">
                      Tools
                    </div>
                    <div className="w-[219px] left-[69px] top-[41px] h-10 absolute">
                      <img
                        className="w-[39px] left-0 top-0 h-[39px] absolute"
                        alt="Ps"
                        src={
                          screenWidth < 433
                            ? "/img/ps.svg"
                            : screenWidth >= 433 && screenWidth < 1360
                            ? "/img/ps-1.svg"
                            : undefined
                        }
                      />
                      <div className="w-[69px] left-[50px] top-0 h-[39px] absolute">
                        <img className="w-9 left-[33px] top-0 h-[39px] absolute" alt="Figma" src="/img/figma-1.svg" />
                        <img
                          className="w-[39px] left-0 top-0 object-cover h-[39px] absolute"
                          alt="Ai"
                          src="/img/ai-1.png"
                        />
                      </div>
                      <img
                        className="w-9 left-[183px] top-px h-[39px] absolute"
                        alt="Canva"
                        src={
                          screenWidth < 433
                            ? "/img/canva.svg"
                            : screenWidth >= 433 && screenWidth < 1360
                            ? "/img/canva-1.svg"
                            : undefined
                        }
                      />
                      <img
                        className="w-[38px] left-[134px] top-px object-cover h-[38px] absolute"
                        alt="Capcut"
                        src="/img/capcut-1.png"
                      />
                    </div>
                  </>
                )}

                {((screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728) && (
                  <>
                    <div className="[font-family:'Poppins',Helvetica] w-[117px] left-[542px] tracking-[0] text-[43px] top-[15px] text-white absolute font-normal leading-[normal]">
                      Tools
                    </div>
                    <img
                      className="w-[661px] left-[272px] top-[63px] h-[164px] absolute"
                      alt="Group"
                      src={
                        screenWidth >= 1360 && screenWidth < 1512
                          ? "/img/group-1.png"
                          : screenWidth >= 1512 && screenWidth < 1728
                          ? "/img/group-1-1.png"
                          : screenWidth >= 1728
                          ? "/img/group-1-2.png"
                          : undefined
                      }
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute ${
            screenWidth >= 1360 && screenWidth < 1512
              ? "w-[1416px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "w-[1568px]"
              : screenWidth >= 1728
              ? "w-[1784px]"
              : ""
          } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "inline-flex" : ""} ${
            screenWidth < 433
              ? "left-[72px]"
              : screenWidth >= 433 && screenWidth < 1360
              ? "left-[94px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "left-0"
              : ""
          } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "flex-col" : ""} ${
            (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "items-center" : ""
          } ${
            screenWidth < 433
              ? "top-[455px]"
              : screenWidth >= 433 && screenWidth < 1360
              ? "top-[451px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "top-[1650px]"
              : ""
          } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "gap-5" : ""} ${
            (screenWidth >= 1360 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1728) ||
            screenWidth >= 1728
              ? "h-[4206px]"
              : ""
          } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "justify-center" : ""}`}
        >
          {((screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433) && (
            <>
              <div className="[font-family:'Poppins',Helvetica] w-[238px] mt-[-1.00px] tracking-[0] text-[40px] text-black h-[71px] font-semibold leading-[normal] relative">
                EXPERIENCE
              </div>
              <div className="w-[251.01px] mr-[-1.50px] h-[271.62px] relative">
                <div className="w-[249px] h-[272px] relative">
                  <div className="w-[249px] left-0 top-px h-[270px] rounded-[50px] bg-black absolute" />
                  <img className="w-[91px] left-[79px] top-0 h-[97px] absolute" alt="Frame" src="/img/frame-1.svg" />
                  <p className="[font-family:'Poppins',Helvetica] w-[249px] left-0 tracking-[0] text-[15px] top-[97px] text-white font-normal text-center leading-[normal] absolute">
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
              <div className="w-[254px] mr-[-4.00px] h-[271.48px] relative">
                <div className="w-[250px] h-[271px] rounded-[50px] bg-black relative">
                  <p className="[font-family:'Poppins',Helvetica] w-[249px] left-px tracking-[0] text-[15px] top-24 text-white font-normal text-center leading-[normal] absolute">
                    <span className="font-semibold">
                      {" "}
                      Part-Time Layout Designer &amp; Graphic Designer <br />
                    </span>
                    <span className="font-light">
                      Cabuyao City, Laguna <br />
                      Dec 2022 - Aug 2023
                    </span>
                  </p>
                  <div className="[font-family:'Poppins',Helvetica] w-[249px] left-px tracking-[0] text-[32px] top-[29px] text-white font-extrabold text-center leading-[normal] absolute">
                    EZ Press
                  </div>
                </div>
              </div>
              <div className="w-[249.92px] h-[271.48px] relative">
                <div className="w-[252px] h-[271px]">
                  <div className="w-[250px] h-[271px] rounded-[50px] bg-black relative">
                    <p className="[font-family:'Poppins',Helvetica] w-[250px] left-0 tracking-[0] text-[15px] top-24 text-white font-normal text-center leading-[normal] absolute">
                      <span className="font-semibold">
                        Freelance Graphic Designer
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
            </>
          )}

          {((screenWidth >= 1360 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1728) ||
            screenWidth >= 1728) && (
            <>
              <div
                className={`left-0 top-0 h-[4206px] absolute ${
                  screenWidth >= 1360 && screenWidth < 1512
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
                    screenWidth >= 1360 && screenWidth < 1512
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
                      screenWidth >= 1360 && screenWidth < 1512
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
                      screenWidth >= 1360 && screenWidth < 1512
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
                          src="/img/logo-1-4.png"
                        />
                        <img
                          className="w-[466px] left-0 top-[514px] object-cover h-[533px] absolute"
                          alt="Logo with name"
                          src="/img/logo-with-name-1-4.png"
                        />
                      </div>
                      <img
                        className="w-[502px] left-0 top-2 object-cover h-[1012px] absolute"
                        alt="Image"
                        src="/img/image-1-4.png"
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
                      screenWidth >= 1360 && screenWidth < 1512
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
                      screenWidth >= 1360 && screenWidth < 1512
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
                  screenWidth >= 1360 && screenWidth < 1512
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
                  src="/img/tyreek-poster-1-4.png"
                />
                <img
                  className="w-[435px] left-[476px] top-0 object-cover h-[615px] absolute"
                  alt="Kd"
                  src="/img/kd-2k25-1-4.png"
                />
                <img
                  className="w-[435px] left-0 top-[667px] object-cover h-[544px] absolute"
                  alt="Raiders"
                  src="/img/raiders-1-4.png"
                />
                <img
                  className="w-[435px] left-[476px] top-[667px] object-cover h-[544px] absolute"
                  alt="Gusion rse"
                  src="/img/gusion-rse-1-4.png"
                />
                <img
                  className="w-[435px] left-0 top-[1250px] object-cover h-[435px] absolute"
                  alt="Nike kobe protro"
                  src="/img/nike-kobe-6-protro-1-4.png"
                />
                <img
                  className="w-[435px] left-[476px] top-[1250px] object-cover h-[435px] absolute"
                  alt="Anta kai artist on"
                  src="/img/anta-kai-1-artist-on-court-1-1-4.png"
                />
                <img
                  className="w-[911px] left-0 top-[1724px] object-cover h-[512px] absolute"
                  alt="Pubmat"
                  src="/img/pubmat2-1-4.png"
                />
              </div>
            </>
          )}
        </div>
        <div
          className={`absolute ${
            screenWidth < 433
              ? "w-[395px]"
              : screenWidth >= 433 && screenWidth < 1360
              ? "w-[438px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "w-[1229px]"
              : ""
          } ${
            screenWidth < 433
              ? "left-0"
              : screenWidth >= 433 && screenWidth < 1360
              ? "-left-0.5"
              : screenWidth >= 1360 && screenWidth < 1512
              ? "left-[65px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "left-[141px]"
              : screenWidth >= 1728
              ? "left-[249px]"
              : ""
          } ${
            screenWidth < 433
              ? "top-[1460px]"
              : screenWidth >= 433 && screenWidth < 1360
              ? "top-[1456px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "top-[994px]"
              : ""
          } ${
            screenWidth < 433
              ? "h-[2160px]"
              : screenWidth >= 433 && screenWidth < 1360
              ? "h-[2175px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "h-[536px]"
              : ""
          } ${(screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433 ? "bg-[#1e1e1e]" : ""}`}
        >
          {((screenWidth >= 1360 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1728) ||
            screenWidth >= 1728) && (
            <div className="[font-family:'Poppins',Helvetica] w-[387px] left-[444px] tracking-[0] text-[64px] top-0 text-black absolute font-semibold leading-[normal]">
              EXPERIENCE
            </div>
          )}

          <div
            className={`absolute ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728 ||
              (screenWidth >= 433 && screenWidth < 1360)
                ? "w-[398px]"
                : screenWidth < 433
                ? "w-[397px]"
                : ""
            } ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
                ? "left-0"
                : screenWidth < 433
                ? "left-0.5"
                : screenWidth >= 433 && screenWidth < 1360
                ? "left-[15px]"
                : ""
            } ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
                ? "top-[115px]"
                : screenWidth < 433
                ? "top-3.5"
                : screenWidth >= 433 && screenWidth < 1360
                ? "top-[15px]"
                : ""
            } ${
              (screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728
                ? "h-[421px]"
                : screenWidth < 433
                ? "h-[1124px]"
                : screenWidth >= 433 && screenWidth < 1360
                ? "h-[1121px]"
                : ""
            }`}
          >
            <div
              className={`relative ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "w-[396px]"
                  : (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                  ? "w-[395px]"
                  : ""
              } ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "h-[421px]"
                  : screenWidth < 433
                  ? "h-[1124px]"
                  : screenWidth >= 433 && screenWidth < 1360
                  ? "h-[1121px]"
                  : ""
              }`}
            >
              {((screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728) && (
                <>
                  <div className="w-[396px] left-0 top-0.5 h-[419px] rounded-[50px] bg-black absolute" />
                  <img
                    className="w-[145px] left-[126px] top-0 h-[150px] absolute"
                    alt="Frame"
                    src={
                      (screenWidth >= 1360 && screenWidth < 1512) || (screenWidth >= 1512 && screenWidth < 1728)
                        ? "/img/frame-3.svg"
                        : screenWidth >= 1728
                        ? "/img/frame-4.svg"
                        : undefined
                    }
                  />
                </>
              )}

              {((screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433) && (
                <>
                  <div
                    className={`w-[395px] left-0 h-[999px] absolute ${
                      screenWidth < 433 ? "top-[67px]" : screenWidth >= 433 && screenWidth < 1360 ? "top-16" : ""
                    }`}
                  >
                    <div className="w-[212px] left-[90px] top-[92px] h-[907px] absolute">
                      <div className="w-[149px] left-[31px] top-[448px] h-[459px] absolute">
                        <img
                          className="w-[149px] left-0 top-[225px] object-cover h-[235px] absolute"
                          alt="Logo"
                          src="/img/logo-1-1.png"
                        />
                        <img
                          className="w-[149px] left-0 top-0 object-cover h-[235px] absolute"
                          alt="Logo with name"
                          src="/img/logo-with-name-1-1.png"
                        />
                      </div>
                      <img
                        className="w-[212px] left-0 top-0 object-cover h-[429px] absolute"
                        alt="Image"
                        src="/img/image-1-1.png"
                      />
                    </div>
                    <p className="[font-family:'Poppins',Helvetica] w-[393px] left-0 tracking-[0] text-[11px] top-0 text-white font-normal text-center leading-[normal] absolute">
                      <span className="font-medium">
                        Icadio - A Image Captioning WIth Speech Syntesizer for visually impaired people.
                        <br />
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] tracking-[0] text-[11px] text-white font-normal">
                        Built with Vite + React &amp; Salesforce’s BLIP: Bootstrapping Language-Image Pre-training for
                        Unified Vision-Language Understanding and Generation.
                      </span>
                    </p>
                  </div>
                  <div
                    className={`[font-family:'Poppins',Helvetica] w-[204px] tracking-[0] text-5xl top-0 text-white font-bold leading-[normal] absolute ${
                      screenWidth < 433 ? "left-[31px]" : screenWidth >= 433 && screenWidth < 1360 ? "left-[19px]" : ""
                    }`}
                  >
                    Works:
                  </div>
                </>
              )}

              <div
                className={`[font-family:'Poppins',Helvetica] tracking-[0] text-white text-center leading-[normal] absolute ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                    ? "w-[396px]"
                    : (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "w-[393px]"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728 ||
                  screenWidth < 433
                    ? "left-0"
                    : screenWidth >= 433 && screenWidth < 1360
                    ? "left-px"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                    ? "text-[25px]"
                    : (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "text-[40px]"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                    ? "top-[150px]"
                    : screenWidth < 433
                    ? "top-[1066px]"
                    : screenWidth >= 433 && screenWidth < 1360
                    ? "top-[1063px]"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                    ? "font-normal"
                    : (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                    ? "font-bold"
                    : ""
                }`}
              >
                {((screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728) && (
                  <>
                    <p>
                      <span className="font-semibold">
                        {" "}
                        Freelance Graphic Designer <br />
                      </span>
                    </p>
                    <p>
                      <span className="font-light">
                        Cabuyao City, Laguna <br />
                        March 2021 - 2022
                      </span>
                    </p>
                  </>
                )}

                {((screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433) && <>Graphic Design Works:</>}
              </div>
            </div>
          </div>
          <div
            className={`absolute ${
              (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                ? "w-[345px]"
                : (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                ? "w-[400px]"
                : ""
            } ${
              screenWidth < 433
                ? "left-[26px]"
                : screenWidth >= 433 && screenWidth < 1360
                ? "left-[47px]"
                : (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                ? "left-[416px]"
                : ""
            } ${
              (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                ? "top-[1236px]"
                : (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                ? "top-[115px]"
                : ""
            } ${
              (screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433
                ? "h-[804px]"
                : (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                ? "h-[419px]"
                : ""
            }`}
          >
            {((screenWidth >= 433 && screenWidth < 1360) || screenWidth < 433) && (
              <>
                <img
                  className="w-[165px] left-0 top-0 object-cover h-[221px] absolute"
                  alt="Tyreek poster"
                  src="/img/tyreek-poster-1-1.png"
                />
                <img
                  className="w-[165px] left-[180px] top-0 object-cover h-[221px] absolute"
                  alt="Kd"
                  src="/img/kd-2k25-1-1.png"
                />
                <img
                  className="w-[165px] left-0 top-60 object-cover h-[196px] absolute"
                  alt="Raiders"
                  src="/img/raiders-1-1.png"
                />
                <img
                  className="w-[165px] left-[180px] top-60 object-cover h-[196px] absolute"
                  alt="Gusion rse"
                  src="/img/gusion-rse-1-1.png"
                />
                <img
                  className="w-[165px] left-0 top-[449px] object-cover h-[156px] absolute"
                  alt="Nike kobe protro"
                  src="/img/nike-kobe-6-protro-1-1.png"
                />
                <img
                  className="w-[165px] left-[180px] top-[449px] object-cover h-[156px] absolute"
                  alt="Anta kai artist on"
                  src="/img/anta-kai-1-artist-on-court-1-1-1.png"
                />
                <img
                  className="w-[345px] left-0 top-[620px] object-cover h-[184px] absolute"
                  alt="Pubmat"
                  src="/img/pubmat2-1-1.png"
                />
              </>
            )}

            {((screenWidth >= 1360 && screenWidth < 1512) ||
              (screenWidth >= 1512 && screenWidth < 1728) ||
              screenWidth >= 1728) && (
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
            )}
          </div>
          {((screenWidth >= 1360 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1728) ||
            screenWidth >= 1728) && (
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
          )}
        </div>
      </div>
    </div>
  );
};
