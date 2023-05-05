import React from "react";
import { Realstateitems } from "../../components/Realstateitems/Realstateitems";
import { Collapse } from "../../components";
const Realstatelist = () => {

  return (

    <div>
      <div>
        <div className="md:container md:mx-auto md:mycontainer">
          <div className="grid grid-cols-1 mt-[1rem]">
          <Collapse title="لیست املاک" more="yes">
          <Realstateitems />
          </Collapse>
           
              </div>
            </div>
          </div>
        </div>
  );
};

export { Realstatelist };
