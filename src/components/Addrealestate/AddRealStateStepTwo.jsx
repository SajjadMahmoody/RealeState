import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  anglelefticon,
  arrowleft,
  arrowdownicon,
  arrowupicon,
} from "../../assets";
import Swal from "sweetalert2";
import { Upload } from "../Uploadfile/Upload";
const AddRealStateStepTwo = (props) => {
  const [selected, setselected] = useState("یکی از موارد زیر را انتخاب کنید ");
  const [changeicon, setChangeicon] = useState(false);
  const [registrationdepartment, setRegistrationdepartment] = useState("");
  const [marfooz, setMarfooz] = useState("");
  const [piece, setPiece] = useState("");
  const [prime, setPrime] = useState("");
  const [sub, setSub] = useState("");
  const [contractNumber, setContractNumber] = useState("");
  const [assignor, setAssignor] = useState("");

  const handleIcon = () => {
    if (changeicon) {
      setChangeicon(false);
    } else {
      setChangeicon(true);
    }
  };
  setInterval(() => {
    setChangeicon(false);
  }, 4000);

  const handleMaxRegistrationde = (event) => {
    if (event.target.value.length <= 30) {
      setRegistrationdepartment(event.target.value);
    }
  };
  const handleMaxMarfooz = (event) => {
    if (event.target.value.length <= 20) {
      setMarfooz(event.target.value);
    }
  };
  const handleMaxPiece = (event) => {
    if (event.target.value.length <= 10) {
      setPiece(event.target.value);
    }
  };
  const handleMaxPrime = (event) => {
    if (event.target.value.length <= 20) {
      setPrime(event.target.value);
    }
  };
  const handleMaxSub = (event) => {
    if (event.target.value.length <= 20) {
      setSub(event.target.value);
    }
  };
  const handleMaxAssignor = (event) => {
    if (event.target.value.length <= 25) {
      setAssignor(event.target.value);
    }
  };
  const handleMaxContractNumber = (event) => {
    if (event.target.value.length <= 20) {
      setContractNumber(event.target.value);
    }
  };

  const handlePrevious = () => {
    props.previoushander();
  };
  const unSubmit = () => {
    Swal.fire({
      icon: "error",
      text: "لطفا یکی از گزینه های منو بالا را انتخاب کنید ",
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.stephandler();
  };

  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              className="border relative border-[#DDDDDD] rounded-[8px] p-[10px] m-1"
              onClick={handleIcon}
            >
              <label
                htmlFor={"address"}
                className="absolute mt-[-10px] mr-[25px] right-0 -top-[2px] bg-white rounded-lg"
              >
                آدرس ملک *
              </label>
              <div className="flex items-center justify-between">
                <div>{selected}</div>
                <div>
                  <img src={changeicon ? arrowupicon : arrowdownicon} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-white w-full rounded-[8px]"
            >
              <li
                className="p-[8px] cursor-pointer"
                onClick={() => setselected("سند شش دانگ")}
              >
                سند شش دانگ
              </li>
              <li
                className="p-[8px] cursor-pointer mb-[5px]"
                onClick={() => setselected("برگه واگذاری")}
              >
                برگه واگذاری
              </li>
              <li
                className="p-[8px] cursor-pointer mb-[5px]"
                onClick={() => setselected("قولنامه")}
              >
                قولنامه
              </li>
              <li
                className="p-[8px] cursor-pointer mb-[5px]"
                onClick={() => setselected("سند مشاعی")}
              >
                سند مشاعی
              </li>
              <li
                className="p-[8px] cursor-pointer mb-[5px]"
                onClick={() => setselected("سند ")}
              >
                سند مشاعی
              </li>
              <li
                className="p-[8px] cursor-pointer mb-[5px]"
                onClick={() => setselected("سایر")}
              >
                سایر
              </li>
            </ul>
          </div>
        </div>

        <div>
          {selected == "برگه واگذاری" ? (
            <div>
              <div className="border-b-2 border-dashed mt-[20px] mb-[2rem]"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="relative">
                    <label
                      htmlFor={"contractnumber"}
                      className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                    >
                      شماره قرارداد*
                    </label>
                    <input
                      type="number"
                      className="border border-[#DDDDDD] w-full p-[10px] text-[14px] font-semibold  rounded-lg mb-[10px]"
                      id="contractnumber"
                      {...register("contractnumberRequired", {
                        required: true,
                      })}
                      onInput={handleMaxContractNumber}
                      value={contractNumber}
                    />
                    {errors.contractnumberRequired && (
                      <span className="text-red-600">
                        این فیلد نباید خالی باشد .
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor={"assignor"}
                      className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                    >
                      واگذارکننده*
                    </label>
                    <input
                      type="text"
                      className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                      id="assignor"
                      {...register("assignorRequired", { required: true })}
                      value={assignor}
                      onInput={handleMaxAssignor}
                    />
                    {errors.assignorRequired && (
                      <span className="text-red-600">
                        این فیلد نباید خالی باشد .
                      </span>
                    )}
                  </div>
                </div>
                <div className="border-b-2 border-dashed mt-[20px] mb-[2rem]"></div>
                <Upload title="برگه واگذاری*" alert="برگه واگذاری" />
                <div className="border-b-[1px] border-solid mt-[20px] mb-[2rem]"></div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#49C264] mt-[20px] mb-[10px] px-[1rem] py-[10px] text-white rounded-[8px]"
                  >
                    <div className="flex items-center justify-center">
                      ذخیره و ادامه
                      <img src={arrowleft} className="mx-2" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <></>
          )}
          {selected == "سند شش دانگ" ? (
            <div>
              <div className="border-b-2 border-dashed mt-[20px] mb-[2rem]"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="relative">
                    <label
                      htmlFor={"registrationdepartment"}
                      className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                    >
                      بخش ثبتی*
                    </label>
                    <input
                      type="text"
                      className="border border-[#DDDDDD] w-full p-[10px] text-[14px] font-semibold  rounded-lg mb-[10px]"
                      id="registrationdepartment"
                      {...register("registrationdepartmentRequired", {
                        required: true,
                      })}
                      onInput={handleMaxRegistrationde}
                      value={registrationdepartment}
                    />
                    {errors.registrationdepartmentRequired && (
                      <span className="text-red-600">
                        این فیلد نباید خالی باشد .
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor={"marfooz"}
                      className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                    >
                      مفروز*
                    </label>
                    <input
                      type="text"
                      className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                      id="marfooz"
                      {...register("marfoozRequired", { required: true })}
                      onInput={handleMaxMarfooz}
                      value={marfooz}
                    />
                    {errors.marfoozRequired && (
                      <span className="text-red-600">
                        این فیلد نباید خالی باشد .
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor={"piece"}
                      className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                    >
                      قطعه*
                    </label>
                    <input
                      type="number"
                      className="border border-[#DDDDDD] w-full p-[10px] text-[14px] font-semibold  rounded-lg mb-[10px]"
                      id="piece"
                      {...register("pieceRequired", {
                        required: true,
                      })}
                      onInput={handleMaxPiece}
                      value={piece}
                    />
                    {errors.pieceRequired && (
                      <span className="text-red-600">
                        این فیلد نباید خالی باشد .
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor={"prime"}
                      className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                    >
                      اصلی*
                    </label>
                    <input
                      type="text"
                      className="border border-[#DDDDDD] w-full p-[10px] text-[14px] font-semibold  rounded-lg mb-[10px]"
                      id="prime"
                      {...register("primeRequired", {
                        required: true,
                      })}
                      value={prime}
                      onInput={handleMaxPrime}
                    />
                    {errors.primeRequired && (
                      <span className="text-red-600">
                        این فیلد نباید خالی باشد .
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor={"sub"}
                      className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                    >
                      فرعی*
                    </label>
                    <input
                      type="text"
                      className="border border-[#DDDDDD] w-full p-[10px] text-[14px] font-semibold  rounded-lg mb-[10px]"
                      id="sub"
                      {...register("subRequired", {
                        required: true,
                      })}
                      value={sub}
                      onInput={handleMaxSub}
                    />
                    {errors.subRequired && (
                      <span className="text-red-600">
                        این فیلد نباید خالی باشد .
                      </span>
                    )}
                  </div>
                </div>
                <div className="border-b-2 border-dashed mt-[20px] mb-[2rem]"></div>
                <Upload title="سند ملکی شش دانگ*" alert="سند ملکی شش دانگ" />

                <div className="border-b-[1px] border-solid mt-[20px] mb-[2rem]"></div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#49C264] mt-[20px] mb-[10px] px-[1rem] py-[10px] text-white rounded-[8px]"
                  >
                    <div className="flex items-center justify-center">
                      <p> ذخیره و ادامه</p>
                      <img src={arrowleft} />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <></>
          )}
          {selected == "برگه واگذاری" || selected == "سند شش دانگ" ? (
            <></>
          ) : (
            <div className="flex justify-end gap-[7px]">
              <button
                type="submit"
                className="bg-[#AAB7C6] mt-[20px] mb-[10px] px-[1rem] py-[10px] text-white rounded-[8px]"
                onClick={handlePrevious}
              >
                <div className="flex items-center gap-[5px]">
                  <img src={anglelefticon} />
                  <span> بازگشت</span>
                </div>
              </button>
              <div
                className="lg:hover:tooltip "
                data-tip="تمام فیلد های الزامی را کامل کنید."
              >
                <button
                  type="button"
                  className="bg-[#AAB7C6] mt-[20px] mb-[10px] px-[1rem] py-[10px] text-white rounded-[8px]"
                  onClick={unSubmit}
                >
                  <div className="flex items-center gap-[5px]">
                    <span> ذخیره و ادامه</span>
                    <img src={arrowleft} />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { AddRealStateStepTwo };
