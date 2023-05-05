import { useState } from "react";
import { arrowleft, infoicon } from "../../assets";
import { useForm } from "react-hook-form";
const Steptwo = (props) => {
  const [checknumber, setChecknumber] = useState(false);
  const [phonenumber, setPhonenumber] = useState("");

  const handleMaxlength = (event) => {
    if (event.target.value.length <= 11) {
      setPhonenumber(event.target.value);
    }
  };
  const regexPhoneNumber = (str) => {
    const regexPhoneNumber = /^(\+98|0)?9\d{9}$/;
    let phoneNumber = str.currentTarget.value;
    if (phoneNumber.match(regexPhoneNumber)) {
      setChecknumber(false);
      localStorage.setItem("phonenumber", phoneNumber);
    } else {
      setChecknumber(true);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (checknumber == false) {
      props.stephandler();
    }
  };
  const handlePrevious = () => {
    props.previoushander();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-[1rem] ">
            <label
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white text-[#A4A4A4] rounded-lg h-[22px] text-[13px] number-font"
              name="nCode"
            >
              کدملی
            </label>
            <input
              type="number"
              className=" border-[#A4A4A4] text-[#A4A4A4] w-full p-[10px] rounded-lg mb-[10px] focus:outline-none focus:border-red-600 number-font"
              defaultValue={props.nCode}
              disabled
            />
          </div>
          <div className="relative lg:mb-[2px] mb-[2rem]">
            <label
              htmlFor="username"
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg h-[22px] text-[13px]"
              name="phoneNumber"
            >
              شماره همراه
            </label>
            <input
              type="number"
              {...register("phoneNumber", { required: true })}
              className="border border-[#DDDDDD] w-full p-[10px] rounded-lg mb-[10px]"
              onChange={(e) => regexPhoneNumber(e)}
              value={phonenumber}
              onInput={handleMaxlength}
              autoComplete="off"
            />
            <img src={infoicon} className="absolute  top-[16px] left-[10px] " />
            {errors.phoneNumber && (
              <span className="text-red-600">
                این فیلد نباید خالی باشد | بیشتر از 10 رقم نباشید.
              </span>
            )}
            {checknumber && (
              <span className="text-red-600">
                ورودی شماره همراه شما اشتباه می باشد .
              </span>
            )}
          </div>
          <div className="flex justify-end mt-[1rem] gap-2">
            <button
              type="button"
              className="bg-[#AAB7C6] px-[1rem] py-[10px] text-white rounded-[8px]"
              onClick={handlePrevious}
            >
              بازگشت
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

export { Steptwo };
