import React from "react";
import { pagenotfound } from "../../assets";
const NoPage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <img src={pagenotfound} className="w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export { NoPage };
