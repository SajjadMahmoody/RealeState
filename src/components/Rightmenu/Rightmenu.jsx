import { useState } from "react";
import Swal from "sweetalert2";
import { openmenuicon } from "../../assets";
import { useNavigate, Link } from "react-router-dom";
import {
  dashboardiconactive,
  dashboardicon,
  manageicon,
  manageiconactive,
  currencyicon,
  cartableicon,
  usericon,
  headseticon,
  exiticon,
  bellonicon,
  closemenuicon,
} from "../../assets";

const Rightmenu = (props) => {
  const navigate = useNavigate();

  const handleExit = () => {
    Swal.fire({
      title: "ایا می خواید خارج شوید?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FE0000",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("phonenumber");

        navigate("/Signin");
      }
    });
  };
  const [openCollapse, setOpenCollapse] = useState(false);
  const handleCollapse = () => {
    if (openCollapse) {
      setOpenCollapse(false);
    } else {
      setOpenCollapse(true);
    }
  };
  const phoneNumber = localStorage.getItem("phonenumber");
  return (
    <div>
      <div>
        <div className="p-[1rem] border-[1px] border-[#F5F6FA] bg-white mb-[10px] rounded-[8px]">
          <div className="flex flex-col items-center justify-center ">
            <h3>محمدرضا فراهانی اصل</h3>
            <p className="text-[#A4A4A4] mt-[5px] number-font">
              {phoneNumber ? phoneNumber : "شماره ای ثبت نشده !"}
            </p>
            <div className="flex gap-2 px-[21px] py-[8px] bg-[#D4FFDE] mt-[5px] rounded-[8px]">
              <img src={bellonicon} />
              <p className="text-[#49C264] text-[14px] number-font">
                شما 8 اعلان جدید دارید
              </p>
            </div>
          </div>
        </div>
        <ul className="grid max-w-full grid-cols-1 menu">
          <div>
            <div
              className={`font-semibold  rounded-[8px] mb-[5px] text-[16px] 
              ${
                props.active == 1
                  ? "bg-[#1C4B82] text-white"
                  : "bg-white text-black"
              } `}
            >
              <li>
                <Link
                  to="/dashboard"
                  className="active:bg-[#4392f1]  rounded-[8px]"
                >
                  <img
                    src={
                      props.active == 1 ? dashboardiconactive : dashboardicon
                    }
                  />
                  داشبورد
                </Link>
              </li>
            </div>
          </div>

          <div>
            <div
              className={`font-semibold  rounded-[8px] mb-[5px] text-[16px] 
              ${
                props.active == 2
                  ? "bg-[#1C4B82] text-white"
                  : "bg-white text-black"
              } `}
            >
              <li>
                <Link
                  to="/Realstatemanagement"
                  className="active:bg-[#4392f1]  rounded-[8px]"
                >
                  <img
                    src={props.active == 2 ? manageiconactive : manageicon}
                  />
                  مدیریت املاک
                </Link>
              </li>
            </div>
          </div>
          <div className="font-semibold text-black text-[16px] bg-[#ffffff] rounded-[8px] mb-[5px]">
            <li>
              <Link
                to="/currency"
                className="active:bg-[#4392f1]  rounded-[8px]"
              >
                <img src={currencyicon} /> امور مالی
              </Link>
            </li>
          </div>
          <div>
            <div className="collapse " onClick={handleCollapse}>
              <input type="checkbox" className="peer" />

              <div
                className={`collapse-title  rounded-t-box text-[20px] font-semibold   ${
                  openCollapse == true ? " bg-[#F5F6FA] " : "bg-white"
                }`}
              >
                <div className="flex justify-between">
                  <div className="text-black text-[16px] flex items-center gap-[10px]">
                    <img
                      src={cartableicon}
                      className="active:bg-[#4392f1]  rounded-[8px]"
                    />
                    کارتابل
                  </div>
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
              <div
                className={`collapse-content  rounded-b-box ${
                  openCollapse == true ? " bg-[#F5F6FA] " : "bg-white"
                }`}
              >
                <div>
                  <div>
                    <div className="px-[16px]">
                      <ul className="text-[14px]  text-black list-item list-disc">
                        <Link className="active:bg-[#4392f1]  rounded-[8px] mb-0">
                          <li>
                            <div className="flex p-0 ">
                              خدمات فنی
                              <span className=" flex items-center number-font justify-center w-6 h-6 text-xs font-bold text-white bg-[#FF8A00]  rounded-full">
                                5
                              </span>
                            </div>
                          </li>
                        </Link>

                        <li className="mb-[6px] list-item list-disc ">
                          تسهیلات
                        </li>
                        <li className="mb-[6px] list-item list-disc ">
                          فنی و مهندسی
                        </li>
                        <li className="mb-[6px] list-item list-disc ">
                          خدمات مالکیتی
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-semibold text-black text-[16px] bg-[#ffffff] rounded-[8px] mb-[5px]">
            <li>
              <Link
                to="/userinfo"
                className="active:bg-[#4392f1]  rounded-[8px]"
              >
                <img src={usericon} /> اطلاعات هویتی
              </Link>
            </li>
          </div>
          <div className="font-semibold text-black text-[16px] bg-[#ffffff] rounded-[8px] mb-[5px]">
            <li>
              <Link
                to="/support"
                className="active:bg-[#4392f1]  rounded-[8px]"
              >
                <img src={headseticon} /> پشتیبانی
              </Link>
            </li>
          </div>
          <div className="font-semibold text-black text-[16px] bg-[#ffffff] rounded-[8px] ">
            <li>
              <Link
                onClick={handleExit}
                className="active:bg-[#4392f1]  rounded-[8px]"
              >
                <img src={exiticon} /> خروج
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export { Rightmenu };
