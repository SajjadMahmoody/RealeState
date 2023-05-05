import React from "react";
import { Navbar, Newrequest } from "../../components";
import {
  filecircleplusicon,
  circleinfoicon,
  houseflagicon,
  filecertificateicon,
  housebuildingicon,
  moneybilltransfericon,
  roadcirclecheckicon,
  housemedicalicon,
  memocirclecheckicon,
  buildingcirclearrowrighticon,
  filesignatureicon,
  fileexporticon,
  housecirclecheckicon,
  eyeicon,
} from "../../assets";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Rightmenu, Collapse } from "../../components";

const Realstatedetails = () => {
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setlng(e.latlng.lng);
        setLat(e.latlng.lat);
        map.locate();
      },
    });
  }
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <div>
            <div className="grid grid-cols-1 md:flex ">
              <div className="lg:w-[20%] md:w-[30%] w-[100%]">
                <div className=" bordder-2 p-[1rem] md:block hidden bg-white ">
                  <Rightmenu active="2" />
                </div>
              </div>
              <div className="lg:w-[80%] md:w-[70%] w-[100%]  min-h-screen bg-[#f3f4f8]">
                <div className="md:container md:mx-auto md:mycontainer">
                  <div className="p-[1rem]">
                    <div className="grid grid-cols-1 mt-[1rem] mb-[1rem]">
                      <div>
                        <div className="bg-white  rounded-[16px]   p-[1rem]">
                          <div className=" mb-[1rem]">
                            <h3 className="text-[20px] font-semibold text-[#1C4B82]">
                              ساختمان تجاری بهار
                            </h3>
                          </div>
                          <div>
                            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                              <div>
                                <div className="overflow-x-auto">
                                  <table className="table text-[14px] text-right">
                                    <tbody className="relative z-0">
                                      <tr>
                                        <th>استان</th>
                                        <td>تهران</td>
                                        <th>شهرستان</th>
                                        <td>تهران</td>
                                      </tr>
                                      <tr>
                                        <th>استان</th>
                                        <td>مرکزی</td>
                                        <th>دهستان | شهر</th>
                                        <td>تهران</td>
                                      </tr>
                                      <tr>
                                        <th>بخش</th>
                                        <td>تهران</td>
                                        <th>شهرستان</th>
                                        <td>تهران</td>
                                      </tr>
                                      <tr>
                                        <th>روستا | شهر</th>
                                        <td>تهران</td>
                                        <th>مساحت زمین</th>
                                        <td>250 مترمربع</td>
                                      </tr>
                                      <tr>
                                        <th>نوع مالکیت</th>
                                        <td>سند شش دانگ</td>
                                        <th>آدرس</th>
                                        <p className="w-200">
                                          میدان ولیعصر، بلوار کشاورز، خیابان
                                          فلسطین شمالی، خیابان غفاری
                                        </p>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="z-[0]">
                                <MapContainer
                                  center={{ lat: 35.7175738, lng: 51.2949122 }}
                                  zoom={13}
                                  zoomControl={false}
                                  scrollWheelZoom={false}
                                >
                                  <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                  />
                                  <Marker
                                    position={{
                                      lat: 35.7175738,
                                      lng: 51.2949122,
                                    }}
                                  >
                                    <Popup>
                                      A pretty CSS3 popup. <br /> Easily
                                      customizable.
                                    </Popup>
                                  </Marker>
                                  <LocationMarker />
                                </MapContainer>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 mt-[1rem] mb-[1rem]">
                      <Collapse title="تاریخچه درخواست‌ها">
                        <div className="grid lg:grid-cols-5 grid-cols-2 text-center text-[14px] number-font ">
                          <div className="flex flex-col gap-[5px] text-right mb-[20px]">
                            <h3 className="font-semibold">نوع درخواست</h3>
                            <div className="border-[1px]"></div>
                            <p className="mt-[5px]">درخواست تعیین حدود وضعیت</p>
                            <p className="mt-[5px]">
                              درخواست تسهیلات قرض الحسنه
                            </p>
                          </div>
                          <div className="flex flex-col gap-[5px] mb-[20x] ">
                            <h3 className="font-semibold">تاریخ ثبت</h3>
                            <div className="border-[1px] "></div>
                            <p className="mt-[5px]">12 آبان 1401</p>
                            <p className="mt-[5px]">12 آبان 1401</p>
                          </div>
                          <div>
                            <div className="flex flex-col gap-[5px] lg:text-center text-right">
                              <h3 className="font-semibold">وضعیت</h3>
                              <div className="border-[1px]"></div>
                              <div className="mt-[5px]">
                                <span className="bg-[#49C264] rounded-[4px] text-white p-[3px] ">
                                  تکمیل
                                </span>
                              </div>
                              <div className="mt-[5px]">
                                <span className="bg-[#FF8A00] rounded-[4px] text-white p-[3px]">
                                  نیاز به باز بینی
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex flex-col gap-[5px] ">
                              <h3 className="font-semibold">کدرهگیری</h3>
                              <div className="border-[1px]"></div>
                              <p className="mt-[5px]">2135790264</p>
                              <p className="mt-[5px]">2135790264</p>
                            </div>
                          </div>
                          <div className=" flex-col gap-[5px] lg:flex hidden">
                            <h3 className="font-semibold">عملیات</h3>
                            <div className="border-[1px]"></div>
                            <div className="flex justify-center gap-[13px] font-bold">
                              <p className="text-[#1C4B82] flex-row items-center flex font-bold gap-[2px]">
                                مشاهده
                                <img src={eyeicon} />
                              </p>
                            </div>
                            <div className="flex justify-center gap-[13px] font-bold">
                              <p className="text-[#1C4B82] flex-row items-center flex font-bold gap-[2px]">
                                مشاهده
                                <img src={eyeicon} />
                              </p>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="grid grid-cols-1 mt-[1rem] mb-[1rem]">
                      <Collapse title=" ثبت درخواست جدید">
                        <div>
                          <div>
                            <div className="flex md:items-center items-baseline gap-[7px] ">
                              <img src={circleinfoicon} />
                              <div className="flex">
                                اگر برای ثبت درخواست جدید اطلاعات کافی ندارید،
                                می‌توانید از <>راهنمای ثبت درخواست</> کمک بگیرید
                                .
                              </div>
                            </div>
                            <h3 className="text-[16px] font-semibold my-[1rem] md:text-right text-center">
                              خدمات فنی صدور پروانه ساختمانی
                            </h3>
                            <div className="md:flex gap-[14px] md:place-items-stretch  grid grid-cols-1 place-items-center">
                              <Newrequest
                                img={filecircleplusicon}
                                text="درخواست خدمات فنی صدور پروانه"
                              />
                              <Newrequest
                                img={houseflagicon}
                                text="تعیین حدود و وضعیت"
                              />
                              <Newrequest
                                img={filecertificateicon}
                                text="درخواست امکان صدور پایانکار/عدم خلافی"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-[16px] font-semibold my-[1rem] md:text-right text-center">
                              تسهیلات
                            </h3>
                            <div className="md:flex gap-[14px] md:place-items-stretch  grid grid-cols-1 place-items-center">
                              <Newrequest
                                img={housebuildingicon}
                                text="تسهیلات طرح ویژه بهسازی و مسکن روستایی"
                              />
                              <Newrequest
                                img={moneybilltransfericon}
                                text="تسهیلات قرض الحسنه"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-[16px] font-semibold my-[1rem] md:text-right text-center">
                              فنی و مهندسی
                            </h3>
                            <div className="md:flex gap-[14px] md:place-items-stretch  grid grid-cols-1 place-items-center">
                              <Newrequest
                                img={roadcirclecheckicon}
                                text="درخواست اصلاح معابر"
                              />
                              <Newrequest
                                img={housemedicalicon}
                                text="درخواست تغییر کاربری"
                              />
                              <Newrequest
                                img={memocirclecheckicon}
                                text="درخواست اصلاح ضوابط"
                              />
                              <Newrequest
                                img={buildingcirclearrowrighticon}
                                text="درخواست اصلاح محدوده"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-[16px] font-semibold my-[1rem] md:text-right text-center">
                              خدمات مالکیتی
                            </h3>
                            <div className="md:flex gap-[14px] md:place-items-stretch  grid grid-cols-1 place-items-center">
                              <Newrequest
                                img={filesignatureicon}
                                text="صدور سند"
                              />
                              <Newrequest
                                img={fileexporticon}
                                text="قرارداد واگذاری"
                              />
                              <Newrequest
                                img={housecirclecheckicon}
                                text="قرارداد اجاره"
                              />
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Realstatedetails };
