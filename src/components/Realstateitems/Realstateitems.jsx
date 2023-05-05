import React from "react";
import { Link } from "react-router-dom";
import { circleplusicon } from "../../assets";

const Realstateitems = () => {
  const realstateItems = [
    {
      title: "زمین مسکونی روستایی",
      address: "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      meter: "249 متر مربع",
    },
    {
      title: "ساختمان تجاری بهار",
      address: "البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      meter: "675 متر مربع",
    },
    {
      title: "زمین مسکونی روستایی",
      address: "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      meter: "249 متر مربع",
    },
    {
      title: "ساختمان تجاری بهار",
      address: " البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      meter: "675 متر مربع",
    },
    {
      title: "زمین مسکونی روستایی",
      address: " تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      meter: "249 متر مربع",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
        <div className="border-2 items-center flex justify-center border-[#1C4B82] rounded-[8px] border-dashed p-[4rem]">
          <Link to="/Realstate">
            <div className="flex md:gap-2 gap-[1px]">
              <div>افزودن ملک جدید</div>
              <div>
                <img src={circleplusicon} />
              </div>
            </div>
          </Link>
        </div>
        {realstateItems.map((item, index) => (
          <div key={index} className="rounded-[8px] bg-[#F5F6FA] p-[1rem]">
            <Link to="/Realstatedetails">
              <h3 className="text-[#1C4B82] text-[16px] mb-[10px] font-bold">
                {item.title}
              </h3>
            </Link>
            <div className="flex gap-2 mb-[5px]">
              <p className="font-bold text-[14px]">موقعیت</p>
              <p className="text-[14px]">{item.address}</p>
            </div>
            <div className="flex gap-3 mb-[5px]">
              <p className="font-bold text-[14px]">مالکیت</p>
              <p className="text-[14px]">{item.ownership}</p>
            </div>
            <div className="flex gap-[30px] mb-[10px]">
              <p className="font-bold text-[14px]">متراژ</p>
              <p className="text-[14px] number-font">{item.meter}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Realstateitems };
