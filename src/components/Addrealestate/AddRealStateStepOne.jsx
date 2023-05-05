import React, { useState } from "react";
import { arrowleft } from "../../assets";
import { useForm } from "react-hook-form";
import { Ostan, Zone, Cities } from "../Dropdown";
const AddRealStateStepOne = (props) => {
  const [realestatetitle, setRealestateTitle] = useState("");
  const [addAddress, setAddAdresss] = useState("");
  const [landarea, setLandarea] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleMaxAdress = (event) => {
    if (event.target.value.length <= 68) {
      setAddAdresss(event.target.value);
    }
  };
  const handleRealestateTitle = (event) => {
    if (event.target.value.length <= 26) {
      setRealestateTitle(event.target.value);
    }
  };
  const handleMaxlandarea = (event) => {
    if (event.target.value.length <= 20) {
      setLandarea(event.target.value);
    }
  };
  const handleMaxPostalCode = (event) => {
    if (event.target.value.length <= 10) {
      setPostalCode(event.target.value);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    props.stephandler();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="relative">
            <label
              htmlFor={"propertytitle"}
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
            >
              عنوان ملک*
            </label>
            <input
              type="text"
              className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
              id="propertytitle"
              name="propertytitle"
              onInput={handleRealestateTitle}
              value={realestatetitle}
              {...register("propertytitleRequired", {
                required: true,
              })}
            />
            {errors.propertytitleRequired && (
              <span className="text-red-600">این فیلد نباید خالی باشد .</span>
            )}
          </div>
          <Ostan />
          <Zone />
          <Cities title="دهستان | شهر*" label="city" />
          <div>
            <Cities title="روستا | شهر*" label="village" />
          </div>
          <div className="relative">
            <label
              htmlFor={"address"}
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
            >
              آدرس ملک *
            </label>
            <input
              type="text"
              className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
              id="address"
              {...register("addressRequired", { required: true })}
              onInput={handleMaxAdress}
              value={addAddress}
            />
            {errors.addressRequired && (
              <span className="text-red-600">این فیلد نباید خالی باشد .</span>
            )}
          </div>
        </div>
        <div className="border-b-2 border-dashed mt-[20px] mb-[2rem]"></div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="relative">
            <label
              htmlFor={"landarea"}
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
            >
              مساحت زمین(مترمربع)*
            </label>
            <input
              type="number"
              className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
              id="landarea"
              {...register("landareaRequired", { required: true })}
              onInput={handleMaxlandarea}
              value={landarea}
            />
            {errors.landareaRequired && (
              <span className="text-red-600">این فیلد نباید خالی باشد .</span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor={"postalcode"}
              className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
            >
              کد پستی
            </label>
            <input
              type="number"
              className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
              id="postalcode"
              value={postalCode}
              onInput={handleMaxPostalCode}
            />
          </div>
        </div>
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
  );
};

export { AddRealStateStepOne };
