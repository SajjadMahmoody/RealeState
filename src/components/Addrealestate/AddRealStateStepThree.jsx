import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";
import { useForm } from "react-hook-form";
import { arrowleft, anglelefticon } from "../../assets";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const AddRealStateStepThree = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    props.stephandler();
  };

  const [lng, setLng] = useState("");
  const [lat, setLat] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleMaxLng = (event) => {
    if (event.target.value.length <= 30) {
      setLng(event.target.value);
    }
  };

  const handleMaxLat = (event) => {
    if (event.target.value.length <= 30) {
      setLat(event.target.value);
    }
  };

  const handleChange = (event) => {
    setIsChecked((current) => !current);
  };

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setLng(e.latlng.lng);
        setLat(e.latlng.lat);
        map.locate();
      },
    });
  }
  const handlePrevious = () => {
    props.previoushander();
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="relative">
              <label
                htmlFor={"longitude"}
                className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
              >
                طول جغرافیایی
              </label>
              <input
                type="number"
                className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                id="longitude"
                value={lng}
                onInput={handleMaxLng}
                {...register("longitudeRequired", { required: true })}
              />
              {errors.longitudeRequired && (
                <span className="text-red-600">این فیلد نباید خالی باشد .</span>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor={"latitude"}
                className="absolute mt-[-10px] mr-[25px] right-0  bg-white rounded-lg"
              >
                عرض جغرافیایی
              </label>
              <input
                type="number"
                className="border border-[#DDDDDD] w-full p-[10px]  rounded-lg mb-[10px]"
                id="latitude"
                value={lat}
                {...register("latitudeRequired", { required: true })}
                onChange={handleMaxLat}
              />
              {errors.latitudeRequired && (
                <span className="text-red-600">این فیلد نباید خالی باشد .</span>
              )}
            </div>

            <div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  className="block  accent-[#1C4B82] w-4 h-4"
                  id="map"
                  value={isChecked}
                  onChange={handleChange}
                />
                <label
                  htmlFor="map"
                  className="text-[13px] text-[#1E1E1E] font-semibold leading-0"
                >
                  انتخاب مختصات از روی نقشه
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-[1rem]">
            <div className="rounded-[20px] ">
              {isChecked ? (
                <MapContainer
                  center={{ lat: 32.4279, lng: 53.688 }}
                  zoom={5}
                  zoomControl={false}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={{ lat, lng }}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                  <LocationMarker />
                </MapContainer>
              ) : (
                <></>
              )}
            </div>
          </div>
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
              type="submit"
              className="bg-[#49C264] mt-[20px] mb-[10px] px-[1rem] py-[10px] text-white rounded-[8px]"
            >
              <div className="flex gap-[5px] items-center justify-center">
                ذخیره و ادامه
                <img src={arrowleft} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { AddRealStateStepThree };
