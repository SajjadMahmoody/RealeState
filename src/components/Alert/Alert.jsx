import React from "react";
const Alert = (props) => {
  return (
    <div
      className={`bg-[#E9FFEE] px-[1rem] py-[10px] rounded-[8px] text-[14px] font-semibold mb-[8px] 
    ${
      props.color == "atention"
        ? "text-[#FF8A00] bg-[#FFF1E1]"
        : props.color == "success"
        ? "text-[#49C264] bg-[#E9FFEE]"
        : props.color == "wrong"
        ? "text-[#E91919] bg-[#FFE5E5]"
        : "text-black"
    }`}
    >
      <div className="flex gap-2">
        <img src={props.icon} />
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export { Alert };
