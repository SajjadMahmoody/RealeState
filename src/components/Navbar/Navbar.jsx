import { useEffect, useState } from "react";
import { logo, settingicon, bellicon, searchicon } from "../../assets";
import { AiOutlineSearch } from "react-icons/ai";
import { GrClose, GrMenu } from "react-icons/gr";
import { Rightmenu } from "../Rightmenu/Rightmenu";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      window.document.body.classList.add("lg:overflow-auto");
      window.document.body.classList.add("overflow-hidden");
    } else {
      window.document.body.classList.remove("overflow-hidden");
      window.document.body.classList.remove("lg:overflow-auto");
    }
  }, [isMenuOpen]);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-base-100">
      <div className="px-2 mx-auto">
        <div className="flex items-center justify-between p-[1rem]">
          <div className="flex items-center gap-2">
            <div className="flex -mr-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out border rounded-md "
                id="main-menu"
                aria-label="Main menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <GrMenu color="white" />
              </button>
            </div>
            <img src={logo} />
            <p className="text-[#1C4B82] font-bold text-[16px] md:flex hidden">
              بنیاد مسکن انقلاب اسلامی
            </p>
          </div>
          <div className="flex items-center gap-2">
            <form>
              <div className="relative md:flex hidden ml-[10px]">
                <input
                  type="text"
                  className=" bg-[#F5F6FA] border-none rounded-[50px] lg:w-[308px]  max-w-full p-[10px] placeholder:text-[#AAB7C6] placeholder:p-[20px]"
                  placeholder="جستجو..."
                  maxLength={35}
                />
                <button type="button">
                  <img
                    src={searchicon}
                    className="absolute  top-[15px] left-[22px] "
                  />
                </button>
              </div>
            </form>
            <div className="flex md:hidden">
              <label
                htmlFor="my-modal-4"
                className="hover:bg-slate-200 p-[10px] rounded-[10px]"
              >
                <img src={searchicon} />
              </label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="cursor-pointer modal">
                <form className="flex">
                  <label className="relative modal-box w-[300px] max-w-full">
                    <div className="flex justify-center py-4">
                      <input
                        type="text"
                        className=" bg-[#F5F6FA] border-none rounded-s-[50px] lg:w-[308px]  max-w-full p-[10px] placeholder:text-[#AAB7C6] placeholder:p-[10px]  focus:outline-none"
                        placeholder="جستجو..."
                        maxLength={10}
                      />
                      <button
                        type="button"
                        className="border  px-[8px] rounded-e-[10px]  hover:bg-slate-100"
                      >
                        <AiOutlineSearch size={20} />
                      </button>
                    </div>
                  </label>
                </form>
              </label>
            </div>
            <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white hover:cursor-pointer">
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#49C264]  rounded-full -top-[1px] -right-[5px] number-font">
                8
              </div>
              <img src={bellicon} />
            </div>
            <div className="hover:cursor-pointer">
              <img src={settingicon} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "" : "hidden"
        } md:block bg-base-100  absolute  left-0 w-full z-10 transition duration-300 ease-in-out`}
        id="main-menu-content"
      >
        <div className="px-2 pt-2  space-y-1 sm:px-3 md:hidden h-[30rem] pb-[2rem] overflow-auto">
          <div className="flex ">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-white p-[10px] rounded-[3px]"
            >
              {" "}
              <GrClose />
            </button>
          </div>
          <Rightmenu />
        </div>
      </div>
    </div>
  );
}

export { Navbar };
