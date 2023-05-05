import React, { useState } from "react";
import { eyeicon, plusicon } from "../../assets";
const Upload = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const validateSelectedFile = () => {
    const MAX_FILE_SIZE = 5120;
    if (!selectedFile) {
      setErrorMsg("فایل سند ملک را اپلود کنید ");
      setIsSuccess(false);
      return;
    }

    const fileSizeKiloBytes = selectedFile.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("حجم فایل بیشتر از حد مجاز است .");
      setIsSuccess(false);
      return;
    }

    setErrorMsg("");
    setIsSuccess(true);
  };
  return (
    <div>
      <>
        <div className="grid gap-5 md:grid-cols-1 ">
          {isSuccess ? (
            <div className="p-[1rem] rounded-[5px] text-[#1C4B82] bg-[#F5F6FA] flex justify-between">
              <p className="success-message ">{props.alert} پیوست شد</p>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-[4px] cursor-pointer">
                  <p>مشاهده</p>
                  <img src={eyeicon} />
                </div>
                <div className="cursor-pointer">
                  <p className="text-[#E91919]">حذف </p>
                </div>
              </div>
            </div>
          ) : null}
          <div className="relative border-[1px] rounded-[8px] border-black  border-dashed md:p-[8px] p-[1rem]">
            <div className="flex items-center justify-between">
              <div>
                <span className="absolute -top-[12px] bg-white mr-[15px]">
                  {props.title}
                </span>
                <label
                  for="files"
                  className=" text-xs cursor-pointer text-[13px] block"
                >
                  برای انتخاب فایل روی این بخش کلیک کنید یا فایل خود را اینجا
                  رها نمائید
                </label>
              </div>
              <div>
                <button
                  type="button"
                  onClick={validateSelectedFile}
                  className="border p-[5px] rounded "
                >
                  <img src={plusicon} />
                </button>
              </div>
            </div>

            <input
              type="file"
              id="files"
              className="visible hidden"
              onChange={handleFileChange}
            />
          </div>
          {props.moretext == "t" ? (
            <></>
          ) : (
            <p className="text-[13px]">
              انواع فایل‌های مجاز: pdf, jpg, jpeg, png, bmp, doc, docx - حداکثر
              سایز: 500 کیلوبایت
            </p>
          )}

          <p className="text-red-600">{errorMsg}</p>
        </div>
      </>
    </div>
  );
};

export { Upload };
