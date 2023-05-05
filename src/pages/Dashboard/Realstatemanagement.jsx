import React from "react";
import { Navbar, Rightmenu } from "../../components";
import { Realstatelist } from "./Realstatelist";
const Realstatemanagement = () => {
  document.title = "مدیریت املاک";
  return (
    <div>
      <Navbar />
      <div>
        <div>
        <div className="grid grid-cols-1 md:flex ">
        <div className="lg:w-[20%] md:w-[30%] w-[100%]   ">
        <div className=" bordder-2 p-[1rem] md:block hidden bg-white ">
                <Rightmenu active="2" />
              </div>
            </div>
            <div className="lg:w-[80%] md:w-[70%] w-[100%]  min-h-screen bg-[#f3f4f8]">
              <div className="p-[1rem]">
                <Realstatelist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Realstatemanagement };
