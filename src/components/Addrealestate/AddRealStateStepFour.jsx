import React, { useState } from "react";
import { arrowleft, anglelefticon, plusicon } from "../../assets";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Upload } from "../Uploadfile/Upload";
const AddRealStateStepFour = (props) => {
  const navigate = useNavigate();
  const [lastName, setLastName] = useState("");
  const [fathername, setFathername] = useState("");
  const [issued, setIssued] = useState("");
  const [id, setID] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [ceoCode, setCeoCode] = useState("");

  const handleCeoCode = (event) => {
    if (event.target.value.length <= 10) {
      setCeoCode(event.target.value);
    }
  };
  const handlePhonenumber = (event) => {
    if (event.target.value.length <= 11) {
      setPhonenumber(event.target.value);
    }
  };

  const handleIssued = (event) => {
    if (event.target.value.length <= 20) {
      setIssued(event.target.value);
    }
  };
  const handleId = (event) => {
    if (event.target.value.length <= 10) {
      setID(event.target.value);
    }
  };
  const handleMaxFathername = (event) => {
    if (event.target.value.length <= 20) {
      setFathername(event.target.value);
    }
  };
  const handleLastName = (event) => {
    if (event.target.value.length <= 30) {
      setLastName(event.target.value);
    }
  };

  const [allItems, setAllItems] = useState([
    {
      name: "محمدحسین رضاپور",
      nCode: 2090641234,
      type: "وکیل",
    },
    {
      name: "علیرضا محمدی",
      nCode: 2085438109,
      type: "شریک",
    },
  ]);
  const [custom, setCustom] = useState({
    name: "",
    nCode: "",
    type: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAllItems([...allItems, custom]);
  };
  const handlePrevious = () => {
    props.previoushander();
  };

  const handleproperty = () => {
    navigate("/Realstatemanagement");
  };

  return (
    <div>
      <div>
        <div>
          <div className="grid grid-cols-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
                <div className="relative">
                  <label
                    htmlFor={"name"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    نام*
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="name"
                    name="propertytitle"
                    {...register("nameRequired", { required: true })}
                    onChange={(event) => {
                      setCustom({ ...custom, name: event.target.value });
                    }}
                    value={custom.name}
                  />
                  {errors.nameRequired && (
                    <span className="text-red-600">
                      این فیلد نباید خالی باشد .
                    </span>
                  )}
                </div>
                <div className="relative ">
                  <label
                    htmlFor={"lastname"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    نام خانوادگی*
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="lastname"
                    {...register("lastnameRequired", { required: true })}
                    value={lastName}
                    onInput={handleLastName}
                  />
                  {errors.lastnameRequired && (
                    <span className="text-red-600">
                      این فیلد نباید خالی باشد .
                    </span>
                  )}
                </div>
                <div className="relative ">
                  <label
                    htmlFor={"fathername"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    نام پدر*
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="fathername"
                    {...register("fathernameRequired", { required: true })}
                    onInput={handleMaxFathername}
                    value={fathername}
                  />
                  {errors.fathernameRequired && (
                    <span className="text-red-600">
                      این فیلد نباید خالی باشد .
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor={"issued"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    صادره*
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="issued"
                    {...register("issuedRequired", { required: true })}
                    onInput={handleIssued}
                    value={issued}
                  />
                  {errors.issuedRequired && (
                    <span className="text-red-600">
                      این فیلد نباید خالی باشد .
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor={"id"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    شماره شناسنامه*
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="id"
                    {...register("idRequired", {
                      required: true,
                      maxLength: 10,
                    })}
                    onInput={handleId}
                    value={id}
                  />
                  {errors.idRequired && (
                    <span className="text-red-600">
                      این فیلد نباید خالی باشد و باید 10 رقم باشد .
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor={"nationalcode"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    کد ملی*
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="nationalcode"
                    {...register("nationalcodeRequired", {
                      required: true,
                      maxLength: 10,
                    })}
                    onInput={(event) => {
                      setCustom({ ...custom, nCode: event.target.value });
                    }}
                    value={custom.nCode}
                  />
                  {errors.nationalcodeRequired && (
                    <span className="text-red-600">
                      این فیلد نباید خالی باشد و باید 10 رقم باشد .
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor={"mobilenumber"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    شماره همراه
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="mobilenumber"
                    onInput={handlePhonenumber}
                    value={phonenumber}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor={"ceo"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    کد ملی مدیرعامل
                  </label>
                  <input
                    type="number"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="ceo"
                    value={ceoCode}
                    onInput={handleCeoCode}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor={"type"}
                    className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
                  >
                    نوع*
                  </label>
                  <input
                    type="text"
                    className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                    id="type"
                    {...register("typeRequired", { required: true })}
                    onInput={(event) => {
                      setCustom({ ...custom, type: event.target.value });
                    }}
                    value={custom.type}
                  />
                  {errors.typeRequired && (
                    <span className="text-red-600">
                      این فیلد نباید خالی باشد .
                    </span>
                  )}
                </div>
                <div>
                  <Upload title="مدارک * " moretext="t" alert="مدارک" />
                </div>
              </div>
              <div className="flex justify-end mb-[2rem]">
                <button className="items-center gap-[5px] rounded-[16px] flex justify-between border-solid border-[1px] p-[13px] border-[#1C4B82]">
                  <span> افزودن</span>
                  <div>
                    <img src={plusicon} />
                  </div>
                </button>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full text-right table-normal">
                    <thead>
                      <tr className="border-b-[#DDDDDD] border-b-[1px]">
                        <th className="flex">
                          <span>لیست شرکا </span>
                          <span className="hidden md:block">و وکلای ملک</span>
                        </th>
                        <th>کد ملی</th>
                        <th>نوع</th>
                        <th className="flex justify-center">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allItems.map((item) => (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.nCode}</td>
                          <td>{item.type}</td>
                          <td className="flex justify-center">
                            <div className="flex gap-[13px] font-bold">
                              <p className="text-[#1C4B82] hover:cursor-pointer">
                                ویرایش
                              </p>
                              <p className="text-[#E91919] hover:cursor-pointer">
                                حذف
                              </p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
            <div className="flex gap-[10px] justify-end">
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-[#AAB7C6] mt-[20px] mb-[10px] px-[1rem] py-[10px] text-white rounded-[8px]"
              >
                <div className="flex items-center justify-center">
                  <img src={anglelefticon} className="mx-2" />
                  بازگشت
                </div>
              </button>
              <button
                type="button"
                className="bg-[#49C264] mt-[20px] mb-[10px] px-[1rem] py-[10px] text-white rounded-[8px]"
                onClick={handleproperty}
              >
                <div className="flex items-center justify-center">
                  ثبت ملک
                  <img src={arrowleft} className="mx-2" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { AddRealStateStepFour };
