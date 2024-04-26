import React from "react";
import fb from "../assets/fb.svg";
import group from "../assets/Group.svg";
import vector from "../assets/Vector.svg";
import linkedin from "../assets/Linkedin.svg";

function FooterComponent() {
  return (
    <div className="my-10">
      <div className="flex justify-center items-center mb-5">
        <img src={fb} alt="" className="mr-5 text-xl" />
        <img src={group} alt="" className="mr-5" />
        <img src={vector} alt="" className="mr-5" />
        <img src={linkedin} alt="" />
      </div>
      <div className="text-">
        <p>Copyright &copy; 2020 All rights reserved</p>
      </div>
    </div>
  );
}

export default FooterComponent;
