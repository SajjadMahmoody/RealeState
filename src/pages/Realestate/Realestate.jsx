import React, { useState } from "react";
import {
  Rightmenu,
  CheckStep,
  Navbar,
  AddRealStateStepOne,
  AddRealStateStepTwo,
  AddRealStateStepThree,
  AddRealStateStepFour,
} from "../../components";
window.document.title = "افزودن ملک جدید";
const Realestate = () => {
  const [step, setStep] = useState(1);
  const handleCheck = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <div className="grid grid-cols-1 md:flex ">
            <div className="lg:w-[20%] md:w-[30%] w-[100%]">
              <div className=" bordder-2 p-[1rem] md:block hidden bg-white ">
                <Rightmenu active="2" />
              </div>
            </div>
            <div className="lg:w-[80%] md:w-[70%] w-[100%]  min-h-screen bg-[#f3f4f8]">
              <div className="md:container md:mx-auto md:mycontainer">
                <div className="p-[1rem]">
                  <div className="grid grid-cols-1 mt-[1rem] mb-[1rem]">
                    <div className="lg:p-[1rem]">
                      <div className="bg-white  rounded-[16px]   p-[1rem]">
                        <div className="text-[20px] font-semibold mb-[1rem]">
                          افزودن ملک جدید
                        </div>
                        <CheckStep active={step} />
                        <div>
                          {step == 1 && (
                            <AddRealStateStepOne
                              stephandler={handleCheck}
                              previoushander={handlePrevious}
                            />
                          )}
                          {step == 2 && (
                            <AddRealStateStepTwo
                              stephandler={handleCheck}
                              previoushander={handlePrevious}
                            />
                          )}
                          {step == 3 && (
                            <AddRealStateStepThree
                              stephandler={handleCheck}
                              previoushander={handlePrevious}
                            />
                          )}
                          {step == 4 && (
                            <AddRealStateStepFour
                              stephandler={handleCheck}
                              previoushander={handlePrevious}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Realestate };
