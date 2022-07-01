import React from "react";
import Image from "next/image";

const Avatar = (props) => {
  return (
    <div className="border-1 p-1 drop-shadow-sm	">
      <div className="bg-yellow-400/10 w-full h-[16px] z-20  text-lg font-robo relative table">
        <div className="align-middle absolute table-cell">${props.money}</div>
      </div>
      <Image
        className="z-10"
        src={props.imgURL}
        alt="avatar"
        height={props.hei}
        width={props.wid}
        layout="responsive" // required
        // objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
