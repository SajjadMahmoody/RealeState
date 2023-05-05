import { arrowleft, infoattendicon } from "../../assets";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Stepthree = (props) => {
  const navigate = useNavigate();
  const [smsCode, setSmsCode] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showerror, setShowError] = useState("");

  const handleMaxSmsCode = (event) => {
    if (event.target.value.length <= 5) {
      setSmsCode(event.target.value);
    }
  };
  const handlePass = (event) => {
    if (event.target.value.length <= 10) {
      setPassword(event.target.value);
    }
  };
  const handleRePass = (event) => {
    if (event.target.value.length <= 10) {
      setRePassword(event.target.value);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleDashboard = () => {
    navigate("/Dashboard");
  };
  const onSubmit = (data) => {
    if (password == "") {
      setShowError("این فیلد نباید خالی باشد. ");
    } else {
      if (isStrongPassword(password)) {
        if (password === rePassword) {
          handleDashboard();
        } else {
          setShowError("رمز عبور یکسان نیست . ");
        }
      } else {
        setShowError("رمز عبور ضعیف است . ");
      }
    }
  };

  const isStrongPassword = (password) => {
    return password.length >= 8;
  };

  const handlePrevious = () => {
    props.previoushander();
  };

  const handleCount = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>کدی دریافت نکرده اید !</span>;
    } else {
      return (
        <span>
          {hours}
          {minutes}:{seconds}
        </span>
      );
    }
  };
  const [countdown, setCountDown] = useState();
  useEffect(() => {
    setCountDown(
      <Countdown date={Date.now() + 120000} renderer={handleCount} />
    );
  }, []);
  const phoneNumber = localStorage.getItem("phonenumber");
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-[3px] text-[13px] text-center ">
            لطفا کد ارسال شده به شماره
            <span className="text-[#1C4B82] font-semibold mx-[2px] number-font">
              {phoneNumber}
            </span>
            را وارد نمائید .
          </p>
          <p className="mb-[8px] text-[#1C4B82] font-semibold number-font">
            {countdown}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative md:mb-[14px] mb-[10px]">
            <label
              htmlFor={"smsCode"}
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg text-[13px] font-bold"
              name="smsCode"
            >
              کد دریافتی
            </label>
            <input
              id="smsCode"
              type="number"
              onInput={handleMaxSmsCode}
              value={smsCode}
              className="border border-[#DDDDDD] w-full p-[10px] rounded-lg mb-[10px] number-font"
              {...register("smsRequired", { required: true })}
            />

            {errors.smsRequired && (
              <span className="text-red-600">این فیلد نباید خالی باشد.</span>
            )}
          </div>
          <div className="relative mb-[14px]">
            <label
              htmlFor="username"
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg text-[13px] font-bold"
              name="phoneNumber"
            >
              رمز عبور
            </label>
            <input
              type="password"
              className="border border-[#DDDDDD] w-full p-[10px] rounded-lg number-font"
              value={password}
              onChange={handlePass}
            />
          </div>
          <div className="md:mb-[14px] mb-[1rem]">
            <div className="w-full bg-gray-200 rounded-[4px] h-[6px]">
              <div
                className={`h-[6px] rounded-full transition-all 
                ${
                  password.length <= 5 && password.length > 0
                    ? "bg-[#E94334] w-[20%]"
                    : ""
                } 
                ${
                  password.length >= 5 && password.length <= 8
                    ? "bg-[#FF8A00] w-[182px]"
                    : ""
                } 
                ${password.length >= 8 ? "bg-[#23AE5D] w-[100%]" : ""}`}
              ></div>
            </div>
            <div className="flex gap-2 my-[8px]">
              <img src={infoattendicon} />
              <h3 className="md:text-[12px] text-[10px] text-[#1C4B82] font-semibold">
                رمز عبور باید حداقل 8 کاراکتر و ترکیبی از حروف و اعداد باشد
              </h3>
            </div>
          </div>
          <div className="relative mb-[14px]">
            <label
              htmlFor="username"
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg text-[13px] font-bold "
              name="phoneNumber"
            >
              تکرار رمز عبور
            </label>
            <input
              type="password"
              className="border border-[#DDDDDD] w-full p-[10px] rounded-lg mb-[10px] number-font"
              value={rePassword}
              onChange={handleRePass}
            />
            {showerror && <span className="text-red-600">{showerror}</span>}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="bg-[#AAB7C6] px-[1rem] py-[10px] text-white rounded-[8px]"
              onClick={handlePrevious}
            >
              بازگشت
            </button>

            <button
              type="submit"
              className="bg-[#49C264] px-[1rem] py-[10px] text-white rounded-[8px]"
            >
              <div className="flex items-center justify-center">
                ثبت تغییرات
                <img src={arrowleft} className="mx-2" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export { Stepthree };
