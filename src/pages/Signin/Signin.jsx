import React from "react";
import { Stepone, Steptwo, Stepthree } from "../../components";
import { logo, background } from "../../assets";
import { useState } from "react";
const Signin = () => {
  document.title = "صفحه ورود";
  const [step, setStep] = useState(1);
  const [nCode, setNCode] = useState("");
  function handleCheck() {
    setStep(step + 1);
  }
  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleNCode = (data) => {
    setNCode(data);
  };

  return (
    <>
      <div>
        <div
          className="w-full "
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto mycontainer">
            <div className="flex justify-center items-center h-[100vh]">
              <div className="bg-[#FFFFFF]  rounded-[16px] md:p-[2rem] p-[1rem] w-[457px] max-w-full">
                <div className="flex flex-col items-center justify-center">
                  <img src={logo} className="mb-[3px]" />
                  <p className="text-[#1C4B82] font-bold text-[16px] mb-[1.6rem]">
                    بنیاد مسکن انقلاب اسلامی
                  </p>
                  <h3 className="font-bold mb-[14px] text-2xl">
                    ورود به سامانه بنیاد مسکن
                  </h3>
                </div>
                {step == 1 && (
                  <Stepone
                    stephandler={handleCheck}
                    handleNCode={handleNCode}
                    previoushander={handlePrevious}
                  />
                )}
                {step == 2 && (
                  <Steptwo
                    stephandler={handleCheck}
                    previoushander={handlePrevious}
                    nCode={nCode}
                  />
                )}
                {step == 3 && (
                  <Stepthree
                    stephandler={handleCheck}
                    previoushander={handlePrevious}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signin };
