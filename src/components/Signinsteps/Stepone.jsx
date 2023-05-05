import React, { useState } from "react";
import { arrowleft } from "../../assets";
import { useForm } from "react-hook-form";

const Stepone = (props) => {
  const [name, setName] = useState("کدملی");
  const [naCode, setNaCode] = useState("");

  const handleMaxlength = (event) => {
    if (event.target.value.length <= 10) {
      setNaCode(event.target.value);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.stephandler();
    props.handleNCode(data.nCode);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex gap-[10px] mt-[10px] ">
            <div className="flex ">
              <div className="items-center ">
                <input
                  type="radio"
                  id="ncode"
                  name="tip"
                  className="code"
                  value="nationalcode"
                  defaultChecked
                  onChange={() => setName("کدملی")}
                />
                <label className="ml-2 checkbox" htmlFor="ncode"></label>
              </div>
              <div className=" font-bold text-gray-900 text-[13px] ml-[10px]  ">
                حقیقی
              </div>
            </div>
            <div className="flex ">
              <div className="items-center ">
                <input
                  type="radio"
                  id="nid"
                  name="tip"
                  className="code"
                  value="nationalid"
                  onChange={() => setName("شناسه ملی")}
                />
                <label
                  className="ml-2 checkbox text-[13px]"
                  htmlFor="nid"
                ></label>
              </div>
              <div className=" font-bold text-gray-900 text-[14px]">حقوقی</div>
            </div>
          </div>
          <div className="relative md:mb-[4rem]">
            <label
              htmlFor={"nCode"}
              className="absolute mt-[-10px]   mr-[25px] right-0 text-[14px]  bg-white rounded-lg "
              name="nCode"
            >
              {name}
            </label>
            <input
              type="number"
              id="nCode"
              className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px] number-font"
              value={naCode}
              {...register("nCode", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              onInput={handleMaxlength}
            />
            {errors.nCode && (
              <span className="text-red-600">
                این فیلد نباید خالی باشد | بیشتر از 10 رقم نباشید.
              </span>
            )}
          </div>

          <div className="flex md:justify-end justify-between mt-[13px] gap-2">
            <button
              type="button"
              className="bg-[#1C4B82] px-[1rem] py-[10px] text-white rounded-[8px]"
            >
              ورود از درگاه دولت من
            </button>
            <button
              type="submit"
              className="bg-[#49C264] px-[1rem] py-[10px] text-white rounded-[8px] "
            >
              <div className="flex items-center justify-center gap-[6px]">
                <span>ادامه</span>
                <img src={arrowleft} className="" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export { Stepone };
