import React, { useState } from "react";
import { arrowright, openmenuicon, closemenuicon } from "../../assets";
const Collapse = ({ children, title, more }) => {
  const [openCollapse, setOpenCollapse] = useState(true);
  const handleCollapse = () => {
    if (openCollapse) {
      setOpenCollapse(false);
    } else {
      setOpenCollapse(true);
    }
  };
  return (
    <div>
      <div className="collapse" onClick={handleCollapse}>
        <input type="checkbox" className="peer" defaultChecked />

        <div className="collapse-title  bg-white  rounded-t-box rounded-b-box text-[20px] font-semibold  peer-checked:rounded-b-none">
          <div className="flex justify-between">
            <div>{title}</div>
            <div>
              <label className="swap ">
                <input type="checkbox" className="peer" />

                <img
                  src={openCollapse ? closemenuicon : openmenuicon}
                  className="fill-current swap-off"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="collapse-content bg-base-100 rounded-b-box ">
          <div>
            <div>{children}</div>
            {more ? (
              <div className="flex items-center justify-center mt-[1.6rem]">
                <p className="text-[#1C4B82] flex items-center justify-center gap-[5px] hover:cursor-pointer">
                  مشاهده همه موارد
                  <img src={arrowright} />
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Collapse };
