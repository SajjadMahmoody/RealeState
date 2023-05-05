import React from "react";
import { steparrowicon, checkicon } from "../../assets";
const CheckStep = (props) => {
  const number = [
    { name: 1, id: 0, text: "مشخصات ملک" },
    { name: 2, id: 1, text: "اطلاعات مالکیتی" },
    { name: 3, id: 2, text: "موقعیت مکانی" },
    { name: 4, id: 3, text: "شرکا و وکلا" },
  ];
  return (
    <div>
      <div className="flex gap-5 font-semibold justify-center  mb-[3rem] number-font">
        <div className="flex md:gap-10 gap-[10px]">
          {number.map((item, index) => (
            <div>
              <div
                key={index}
                className={`inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px] font-bold border-2 border-white rounded-full -top-2 -right-2 mb-[10px]
              ${
                props.active > item.name
                  ? "text-white bg-[#49C264]"
                  : props.active == item.name
                  ? "text-white bg-[#1C4B82]"
                  : "bg-[#F5F6FA] text-black"
              }
              
              `}
              >
                {props.active > item.name ? <img src={checkicon} /> : item.name}
              </div>
              <div className="flex gap-3">
                <p className="md:text-[13px] lg:text-[20px] text-[10px] m-0">{item.text}</p>
                {item.id < 3 ? (
                  <img src={steparrowicon} className="hidden md:block" />
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}

          {/* <div >
            {props.checked == 1 ? (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px] font-bold text-white bg-[#49C264] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                <img src={checkicon} />
              </div>
            ) : props.active == 1 ? (
              <div className=" inline-flex items-center justify-center w-10 h-10  font-bold text-white bg-[#1C4B82] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                1
              </div>
            ) : (
              <div className=" inline-flex items-center justify-center w-10 h-10 text-[20px] font-bold text-black bg-[#F5F6FA] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                1
              </div>
            )}
            <div className="flex gap-3">
              <p className="md:text-[20px] text-[10px]">مشخصات ملک</p>
              <img src={steparrowicon} className="hidden md:block" />
            </div>
          </div>
          <div>
            {props.checked == "t" ? (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px]  font-bold text-white bg-[#49C264] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                <img src={checkicon} />
              </div>
            ) : props.active == 2 ? (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px]  font-bold text-white bg-[#1C4B82] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                2
              </div>
            ) : (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px]] font-bold text-black bg-[#F5F6FA] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                2
              </div>
            )}
            <div className="flex gap-3">
              <p className="md:text-[20px] text-[10px]"> اطلاعات مالکیتی</p>
              <img src={steparrowicon} className="hidden md:block" />
            </div>
          </div>
          <div>
            {props.checked == 2 ? (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px]  font-bold text-white bg-[#49C264] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                <img src={checkicon} />
              </div>
            ) : props.active == 3 ? (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px]  font-bold text-white bg-[#1C4B82] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                3
              </div>
            ) : (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px] font-bold text-black bg-[#F5F6FA] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                3
              </div>
            )}

            <div className="flex gap-3">
              <p className="md:text-[20px] text-[10px]">موقعیت مکانی</p>
              <img src={steparrowicon} className="hidden md:block" />
            </div>
          </div>
          <div>
            {props.checked == 3 ? (
              <div className=" inline-flex items-center justify-center w-10 h-10  font-bold text-white bg-[#49C264] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                <img src={checkicon} />
              </div>
            ) : props.active == 4 ? (
              <div className=" inline-flex items-center justify-center w-10 h-10 md:text-[20px] text-[15px] font-bold text-white bg-[#1C4B82] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                4
              </div>
            ) : (
              <div className=" inline-flex items-center justify-center w-10 h-10  md:text-[20px] text-[15px] font-bold text-black bg-[#F5F6FA] border-2 border-white rounded-full -top-2 -right-2 mb-[10px]">
                4
              </div>
            )}
            <div className="flex gap-3">
              <p className="md:text-[20px] text-[10px]">شرکا و وکلا</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { CheckStep };
