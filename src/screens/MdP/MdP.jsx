import React from "react";
import { useWindowWidth } from "../../breakpoints";

export const MdP = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="w-full flex flex-row justify-center bg-white">
      <div
        className={`bg-white relative ${
          screenWidth < 428
            ? "w-[393px]"
            : screenWidth >= 428 && screenWidth < 1360
            ? "w-[428px]"
            : screenWidth >= 1360 && screenWidth < 1512
            ? "w-[1360px]"
            : screenWidth >= 1512 && screenWidth < 1728
            ? "w-[1512px]"
            : screenWidth >= 1728
            ? "w-[1728px]"
            : ""
        } ${
          (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
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
          (screenWidth >= 428 && screenWidth < 1360)
            ? "overflow-hidden"
            : ""
        }`}
      >
        <div
          className={`left-0 top-0 bg-cover bg-[50%_50%] absolute ${
            screenWidth < 428
              ? "w-[393px]"
              : screenWidth >= 428 && screenWidth < 1360
              ? "w-[428px]"
              : screenWidth >= 1360 && screenWidth < 1512
              ? "w-[1360px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "w-[1512px]"
              : screenWidth >= 1728
              ? "w-[1728px]"
              : ""
          } ${
            (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
              ? "h-[440px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "h-[938px]"
              : ""
          } ${
            screenWidth < 428
              ? "bg-[url(/static/img/bg.png)]"
              : screenWidth >= 428 && screenWidth < 1360
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
              screenWidth < 428 ? "w-[359px]" : screenWidth >= 428 && screenWidth < 1360 ? "w-[360px]" : ""
            } ${
              screenWidth < 428
                ? "left-[17px]"
                : screenWidth >= 428 && screenWidth < 1360
                ? "left-[35px]"
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
              screenWidth < 428
                ? "top-[33px]"
                : screenWidth >= 428 && screenWidth < 1360
                ? "top-[35px]"
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
            } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "h-[323px]" : ""}`}
          >
            <div
              className={`${
                screenWidth < 428
                  ? "w-[363px]"
                  : screenWidth >= 428 && screenWidth < 1360
                  ? "w-[364px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "w-[1210px]"
                  : ""
              } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "left-0" : ""} ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "top-0" : ""
              } ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "mr-[-3.73px]"
                  : ""
              } ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                  ? "h-[92px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "h-[149px]"
                  : ""
              } ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                  ? "absolute"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "relative"
                  : ""
              }`}
            >
              <div
                className={`relative ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728 ||
                  screenWidth < 428
                    ? "border border-solid"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728 ||
                  screenWidth < 428
                    ? "border-[#c0b4b41a]"
                    : ""
                } ${
                  screenWidth < 428
                    ? "w-[359px]"
                    : screenWidth >= 428 && screenWidth < 1360
                    ? "w-[360px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "w-[1206px]"
                    : ""
                } ${
                  (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                    ? "h-[92px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "h-[149px]"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728 ||
                  screenWidth < 428
                    ? "rounded-[40px]"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728 ||
                  screenWidth < 428
                    ? "[-webkit-backdrop-filter:blur(19.8px)_brightness(100%)]"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728 ||
                  screenWidth < 428
                    ? "bg-black"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728 ||
                  screenWidth < 428
                    ? "backdrop-blur-[19.8px] backdrop-brightness-[100%]"
                    : ""
                }`}
              >
                {screenWidth >= 428 && screenWidth < 1360 && (
                  <div className="absolute w-[359px] h-[92px] top-0 left-px bg-black rounded-[40px] border border-solid border-[#c0b4b41a] backdrop-blur-[19.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(19.8px)_brightness(100%)]" />
                )}

                <p
                  className={`[font-family:'Poppins',Helvetica] tracking-[0] text-white font-normal whitespace-nowrap leading-[normal] absolute ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "w-[359px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[581px]"
                      : ""
                  } ${
                    screenWidth >= 428 && screenWidth < 1360
                      ? "left-0"
                      : screenWidth < 428
                      ? "-left-px"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-[312px]"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "text-[13px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "text-2xl"
                      : ""
                  } ${
                    screenWidth >= 428 && screenWidth < 1360
                      ? "top-[46px]"
                      : screenWidth < 428
                      ? "top-[45px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "top-[101px]"
                      : ""
                  } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "text-center" : ""}`}
                >
                  Front-End Developer , UI/UX &amp; Graphic Designer
                </p>
                <div
                  className={`[font-family:'Poppins',Helvetica] tracking-[0] text-white absolute font-semibold leading-[normal] ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "w-[359px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[695px]"
                      : ""
                  } ${
                    screenWidth < 428
                      ? "-left-px"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-64"
                      : screenWidth >= 428 && screenWidth < 1360
                      ? "left-0"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "text-2xl"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "text-[75px]"
                      : ""
                  } ${
                    screenWidth < 428
                      ? "top-[11px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "top-2"
                      : screenWidth >= 428 && screenWidth < 1360
                      ? "top-3"
                      : ""
                  } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "text-center" : ""} ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "whitespace-nowrap" : ""
                  }`}
                >
                  M-JEY L. SATURNO
                </div>
              </div>
            </div>
            <div
              className={`${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                  ? "w-[361px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "w-[1208.27px]"
                  : ""
              } ${screenWidth < 428 ? "left-0" : screenWidth >= 428 && screenWidth < 1360 ? "left-px" : ""} ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "top-[110px]" : ""
              } ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "mr-[-2.00px]"
                  : ""
              } ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                  ? "h-[91px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "h-[249.1px]"
                  : ""
              } ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
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
                  (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                    ? "w-[359px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "w-[1206px]"
                    : ""
                } ${
                  (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
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
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "w-[359px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[133px]"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "-left-px"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-[536px]"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "text-2xl"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "text-[43px]"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "top-[3px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "-top-px"
                      : ""
                  } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "text-center" : ""}`}
                >
                  SKILLS
                </div>
                <img
                  className={`absolute ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "w-[238px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "w-[765px]"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "left-[60px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "left-[220px]"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "top-[41px]"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "top-20"
                      : ""
                  } ${
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                      ? "h-10"
                      : (screenWidth >= 1360 && screenWidth < 1512) ||
                        (screenWidth >= 1512 && screenWidth < 1728) ||
                        screenWidth >= 1728
                      ? "h-[121px]"
                      : ""
                  }`}
                  alt="Languages"
                  src={
                    (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
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
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                  ? "w-[361px]"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "w-[1208.27px]"
                  : ""
              } ${screenWidth < 428 ? "left-0" : screenWidth >= 428 && screenWidth < 1360 ? "left-px" : ""} ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "top-[227px]" : ""
              } ${
                (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
                  ? "mr-[-2.00px]"
                  : ""
              } ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                  ? "h-24"
                  : (screenWidth >= 1360 && screenWidth < 1512) ||
                    (screenWidth >= 1512 && screenWidth < 1728) ||
                    screenWidth >= 1728
                  ? "h-[248.79px]"
                  : ""
              } ${
                (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
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
                  (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                    ? "w-[359px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "w-[1206px]"
                    : ""
                } ${
                  (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
                    ? "h-24"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "h-[249px]"
                    : ""
                }`}
              >
                {((screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428) && (
                  <>
                    <div className="[font-family:'Poppins',Helvetica] w-[359px] -left-px tracking-[0] text-2xl top-0.5 text-white font-normal text-center whitespace-nowrap leading-[normal] absolute">
                      Tools
                    </div>
                    <div className="w-[219px] left-[69px] top-[41px] h-10 absolute">
                      <img
                        className="w-[39px] left-0 top-0 h-[39px] absolute"
                        alt="Ps"
                        src={
                          screenWidth < 428
                            ? "/img/ps.svg"
                            : screenWidth >= 428 && screenWidth < 1360
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
                          screenWidth < 428
                            ? "/img/canva.svg"
                            : screenWidth >= 428 && screenWidth < 1360
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
          } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "inline-flex" : ""} ${
            screenWidth < 428
              ? "left-[72px]"
              : screenWidth >= 428 && screenWidth < 1360
              ? "left-[90px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "left-0"
              : ""
          } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "flex-col" : ""} ${
            (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "items-center" : ""
          } ${
            (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
              ? "top-[455px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "top-[1650px]"
              : ""
          } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "gap-5" : ""} ${
            (screenWidth >= 1360 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1728) ||
            screenWidth >= 1728
              ? "h-[4206px]"
              : ""
          } ${(screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428 ? "justify-center" : ""}`}
        >
          {((screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428) && (
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
            screenWidth < 428
              ? "w-[393px]"
              : screenWidth >= 428 && screenWidth < 1360
              ? "w-[435px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "w-[1229px]"
              : ""
          } ${
            screenWidth < 428
              ? "left-0"
              : screenWidth >= 428 && screenWidth < 1360
              ? "-left-1"
              : screenWidth >= 1360 && screenWidth < 1512
              ? "left-[65px]"
              : screenWidth >= 1512 && screenWidth < 1728
              ? "left-[141px]"
              : screenWidth >= 1728
              ? "left-[249px]"
              : ""
          } ${
            (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
              ? "top-[1460px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "top-[994px]"
              : ""
          } ${
            (screenWidth >= 428 && screenWidth < 1360) || screenWidth < 428
              ? "h-[2160px]"
              : (screenWidth >= 1360 && screenWidth < 1512) ||
                (screenWidth >= 1512 && screenWidth < 1728) ||
                screenWidth >= 1728
              ? "h-[536px]"
              : ""
          } ${screenWidth < 428 ? "bg-[#1e1e1e]" : ""}`}
        >
          {screenWidth >= 428 && screenWidth < 1360 && (
            <div className="relative w-[439px] h-[2160px]">
              <div className="absolute w-[430px] h-[2160px] top-0 left-0.5 bg-[#1e1e1e]" />
              <div className="absolute w-[439px] h-[1153px] top-[7px] left-0">
                <div className="absolute w-[370px] h-[1051px] top-0 left-[34px]">
                  <div className="absolute w-[369px] h-[986px] top-[65px] left-px">
                    <div className="absolute w-[209px] h-[869px] top-[118px] left-[79px]">
                      <div className="absolute w-[147px] h-[440px] top-[429px] left-[31px]">
                        <img
                          className="absolute w-[147px] h-[225px] top-[215px] left-0 object-cover"
                          alt="Logo"
                          src="/img/logo-1-1.png"
                        />
                        <img
                          className="absolute w-[147px] h-[225px] top-0 left-0 object-cover"
                          alt="Logo with name"
                          src="/img/logo-with-name-1-1.png"
                        />
                      </div>
                      <img
                        className="absolute w-[209px] h-[411px] top-0 left-0 object-cover"
                        alt="Image"
                        src="/img/image-1-1.png"
                      />
                    </div>
                    <p className="absolute w-[367px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[normal]">
                      <span className="font-medium">
                        Icadio - A Image Captioning WIth Speech Syntesizer for visually <br />
                        impaired people.
                        <br />
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[11px] tracking-[0]">
                        Built with Vite + React &amp; Salesforce’s BLIP: Bootstrapping Language-Image Pre-training for
                        Unified Vision-Language Understanding and Generation.
                      </span>
                    </p>
                  </div>
                  <div className="absolute w-[226px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal]">
                    Works:
                  </div>
                </div>
                <div className="absolute w-[435px] top-[1095px] left-0 [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[normal]">
                  Graphic Design Works:
                </div>
              </div>
              <div className="absolute w-[356px] h-[875px] top-[1238px] left-[41px]">
                <img
                  className="absolute w-[170px] h-[241px] top-0 left-0 object-cover"
                  alt="Tyreek poster"
                  src="/img/tyreek-poster-1-1.png"
                />
                <img
                  className="absolute w-[170px] h-[241px] top-0 left-[186px] object-cover"
                  alt="Kd"
                  src="/img/kd-2k25-1-1.png"
                />
                <img
                  className="absolute w-[170px] h-[213px] top-[261px] left-0 object-cover"
                  alt="Raiders"
                  src="/img/raiders-1-1.png"
                />
                <img
                  className="absolute w-[170px] h-[213px] top-[261px] left-[186px] object-cover"
                  alt="Gusion rse"
                  src="/img/gusion-rse-1-1.png"
                />
                <img
                  className="absolute w-[170px] h-[170px] top-[489px] left-0 object-cover"
                  alt="Nike kobe protro"
                  src="/img/nike-kobe-6-protro-1-1.png"
                />
                <img
                  className="absolute w-[170px] h-[170px] top-[489px] left-[186px] object-cover"
                  alt="Anta kai artist on"
                  src="/img/anta-kai-1-artist-on-court-1-1-1.png"
                />
                <img
                  className="absolute w-[356px] h-[200px] top-[675px] left-0 object-cover"
                  alt="Pubmat"
                  src="/img/pubmat2-1-1.png"
                />
              </div>
            </div>
          )}

          {((screenWidth >= 1360 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1728) ||
            screenWidth >= 1728) && (
            <div className="[font-family:'Poppins',Helvetica] w-[387px] left-[444px] tracking-[0] text-[64px] top-0 text-black absolute font-semibold leading-[normal]">
              EXPERIENCE
            </div>
          )}

          {((screenWidth >= 1360 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1728) ||
            screenWidth >= 1728 ||
            screenWidth < 428) && (
            <>
              <div
                className={`left-0 absolute ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                    ? "w-[398px]"
                    : screenWidth < 428
                    ? "w-[397px]"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                    ? "top-[115px]"
                    : screenWidth < 428
                    ? "top-3.5"
                    : ""
                } ${
                  (screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728
                    ? "h-[421px]"
                    : screenWidth < 428
                    ? "h-[1124px]"
                    : ""
                }`}
              >
                {((screenWidth >= 1360 && screenWidth < 1512) ||
                  (screenWidth >= 1512 && screenWidth < 1728) ||
                  screenWidth >= 1728) && (
                  <div className="w-[396px] h-[421px] relative">
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
                )}

                {screenWidth < 428 && (
                  <>
                    <div className="absolute w-[334px] h-[1051px] top-0 left-[31px]">
                      <div className="absolute w-[333px] h-[986px] top-[65px] left-px">
                        <div className="absolute w-[189px] h-[869px] top-[118px] left-[72px]">
                          <div className="absolute w-[133px] h-[440px] top-[429px] left-7">
                            <img
                              className="absolute w-[133px] h-[225px] top-[215px] left-0 object-cover"
                              alt="Logo"
                              src="/img/logo-1.png"
                            />
                            <img
                              className="absolute w-[133px] h-[225px] top-0 left-0 object-cover"
                              alt="Logo with name"
                              src="/img/logo-with-name-1.png"
                            />
                          </div>
                          <img
                            className="absolute w-[189px] h-[411px] top-0 left-0 object-cover"
                            alt="Image"
                            src="/img/image-1.png"
                          />
                        </div>
                        <p className="absolute w-[331px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[normal]">
                          <span className="font-medium">
                            Icadio - A Image Captioning WIth Speech Syntesizer for visually <br />
                            impaired people.
                            <br />
                          </span>
                          <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[11px] tracking-[0]">
                            Built with Vite + React &amp; Salesforce’s BLIP: Bootstrapping Language-Image Pre-training
                            for Unified Vision-Language Understanding and Generation.
                          </span>
                        </p>
                      </div>
                      <div className="w-[204px] top-0 [font-family:'Poppins',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal] absolute left-0">
                        Works:
                      </div>
                    </div>
                    <div className="absolute w-[393px] top-[1066px] left-0 [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[normal]">
                      Graphic Design Works:
                    </div>
                  </>
                )}
              </div>
              <div
                className={`absolute ${
                  screenWidth < 428
                    ? "w-[298px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "w-[400px]"
                    : ""
                } ${
                  screenWidth < 428
                    ? "left-[49px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "left-[416px]"
                    : ""
                } ${
                  screenWidth < 428
                    ? "top-[1236px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "top-[115px]"
                    : ""
                } ${
                  screenWidth < 428
                    ? "h-[804px]"
                    : (screenWidth >= 1360 && screenWidth < 1512) ||
                      (screenWidth >= 1512 && screenWidth < 1728) ||
                      screenWidth >= 1728
                    ? "h-[419px]"
                    : ""
                }`}
              >
                {screenWidth < 428 && (
                  <>
                    <img
                      className="absolute w-[142px] h-[221px] top-0 left-0 object-cover"
                      alt="Tyreek poster"
                      src="/img/tyreek-poster-1.png"
                    />
                    <img
                      className="absolute w-[142px] h-[221px] top-0 left-[155px] object-cover"
                      alt="Kd"
                      src="/img/kd-2k25-1.png"
                    />
                    <img
                      className="absolute w-[142px] h-[196px] top-60 left-0 object-cover"
                      alt="Raiders"
                      src="/img/raiders-1.png"
                    />
                    <img
                      className="absolute w-[142px] h-[196px] top-60 left-[155px] object-cover"
                      alt="Gusion rse"
                      src="/img/gusion-rse-1.png"
                    />
                    <img
                      className="absolute w-[142px] h-[156px] top-[449px] left-0 object-cover"
                      alt="Nike kobe protro"
                      src="/img/nike-kobe-6-protro-1.png"
                    />
                    <img
                      className="absolute w-[142px] h-[156px] top-[449px] left-[155px] object-cover"
                      alt="Anta kai artist on"
                      src="/img/anta-kai-1-artist-on-court-1-1.png"
                    />
                    <img
                      className="absolute w-[298px] h-[184px] top-[620px] left-0 object-cover"
                      alt="Pubmat"
                      src="/img/pubmat2-1.png"
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
            </>
          )}

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
