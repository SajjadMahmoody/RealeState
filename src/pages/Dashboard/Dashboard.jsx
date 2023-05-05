import React from "react";
import { circleinfocon, circlecheckicon, circlexmark } from "../../assets";
import { Collapse, Rightmenu, Alert, Navbar } from "../../components";
import { Realstatelist } from "./Realstatelist";
const Dashboard = () => {
  document.title = "داشبورد";

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <div>
            <div className="grid grid-cols-1 md:flex ">
              <div className="lg:w-[20%] md:w-[30%] w-[100%]">
                <div className=" bordder-2 p-[1rem] md:block hidden bg-white ">
                  <Rightmenu active="1" />
                </div>
              </div>
              <div className="lg:w-[80%] md:w-[70%] w-[100%]  min-h-screen bg-[#f3f4f8]">
                <div className="md:container md:mx-auto md:mycontainer">
                  <div className="p-[1rem]">
                    <div className="grid grid-cols-1 mt-[1rem] mb-[1rem]">
                      <div>
                        <Collapse title="اعلانات" more="yes">
                          <Alert
                            icon={circleinfocon}
                            desc="    درخواست تسهیلات طرح ویژه بهسازی و مسکن روستایی
                                با کد رهگیری 6531279513 نیاز به بازبینی و تکمیل
                                مدارک دارد."
                            color="atention"
                          />

                          <Alert
                            icon={circlecheckicon}
                            desc="درخواست خدمات فنی صدور پروانه برای تخریب و
                                نوسازی ملک مورد تائید قرار گرفت."
                            color="success"
                          />
                          <Alert
                            icon={circlexmark}
                            desc="درخواست خدمات فنی صدور پروانه برای تخریب و
                                نوسازی ملک مورد تائید قرار گرفت."
                            color="wrong"
                          />
                        </Collapse>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[16px]">
                      <div className="rounded-[16px] p-[1rem] bg-white">
                        <h3 className=" text-black  mb-[28px] text-[20px] font-semibold">
                          وضعیت پروفایل
                        </h3>
                        <div className="relative">
                          <div className="bg-[#1C4B82] w-full h-[10px] rounded-lg mt-[1rem]"></div>
                          <div className="inline-flex items-center justify-center absolute w-6 h-6  text-[12px]  text-white bg-[#1C4B82] rounded-full -top-2 left-0 number-font  ">
                            100
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[16px] p-[1.3rem] bg-white">
                        <h3 className="text-black text-[20px] font-semibold">
                          درخواست‌ها
                        </h3>
                        <div className="mt-[1rem] flex justify-between number-font">
                          <div className="flex flex-col items-center justify-center">
                            <div className=" inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#49C264] border-2 border-white rounded-full -top-2 -right-2 ">
                              15
                            </div>
                            <p className="text-[14px]">تکمیل</p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <div className=" inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#AAB7C6] border-2 border-white rounded-full -top-2 -right-2">
                              22
                            </div>
                            <p className="text-[14px]">در دست بررسی</p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <div className=" inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#FF8A00] border-2 border-white rounded-full -top-2 -right-2 ">
                              7
                            </div>
                            <p className="text-[14px]">نیاز به بازبینی</p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <div className=" inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#E91919] border-2 border-white rounded-full -top-2 -right-2 ">
                              2
                            </div>
                            <p className="text-[14px]">رد شده</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Realstatelist />
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

export { Dashboard };
