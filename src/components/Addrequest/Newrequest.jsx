import React from "react";

const Newrequest = (props) => {
  return (
    <div>
      <div className=" border-[1px] p-[1rem] rounded-[16px] w-[171px]  text-center hover:bg-[#f1f1f2] hover:cursor-pointer h-full">
        <div className="flex flex-col items-center justify-center gap-[14px]">
          <img src={props.img} />
          <h3 className="text-[14px] font-semibold ">{props.text}</h3>
        </div>
      </div>
    </div>
  );
};

export { Newrequest };
