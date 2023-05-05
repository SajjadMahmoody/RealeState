import React, { useState } from "react";
import { arrowdownicon, arrowupicon } from "../../assets";
const Ostan = () => {
  const [selected, setselected] = useState("یکی از موارد زیر را انتخاب کنید ");
  const [changeicon, setChangeicon] = useState(false);
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
  const ostan = [
    {
      id: 1,
      name: "آذربایجان شرقی",
      slug: "آذربایجان-شرقی",
    },
    {
      id: 2,
      name: "اردبیل",
      slug: "اردبیل",
    },
    {
      id: 3,
      name: "اصفهان",
      slug: "اصفهان",
    },
    {
      id: 4,
      name: "البرز",
      slug: "البرز",
    },
    {
      id: 5,
      name: "بوشهر",
      slug: "بوشهر",
    },

    {
      id: 6,
      name: "تهران",
      slug: "تهران",
    },
    {
      id: 7,
      name: "چهارمحال و بختیاری",
      slug: "چهارمحال-بختیاری",
    },
    {
      id: 8,
      name: "گلستان",
      slug: "گلستان",
    },
    {
      id: 9,
      name: "مازندران",
      slug: "مازندران",
    },
  ];
  return (
    <div>
      <div className="w-full dropdown dropdown-bottom">
        <div
          tabIndex={0}
          className="border relative border-[#DDDDDD] rounded-[8px] p-[10px] "
          onClick={handleIcon}
        >
          <label
            htmlFor={"province"}
            className="absolute mt-[-10px] mr-[25px] right-0 -top-[2px] bg-white rounded-lg cursor-pointer"
          >
            استان*
          </label>
          <div className="flex items-center justify-between">
            <div id="province">{selected}</div>
            <div>
              <img src={changeicon ? arrowupicon : arrowdownicon} />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow bg-white w-full rounded-[8px] mb-[10px]"
        >
          {ostan.map((item, index) => (
            <div key={index}>
              <li
                className="p-[8px] cursor-pointer"
                onClick={() => setselected(item.name)}
              >
                {item.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="mt-[10px]">
        {selected == "یکی از موارد زیر را انتخاب کنید " ? (
          <span className="text-red-600">
            یکی از موارد بالا را انتخاب کنید.
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { Ostan };
