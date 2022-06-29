import React from "react";
import Image from "next/image";
import worldmap from "../../styles/img/world.svg";

const Location = () => {
  return (
    <div className="relative flex w-full h-2/3 my-3">
      <div className="">
        <Image
          src={worldmap}
          alt="world map"
          // width={300}
          // height={250}
          layout="fill" // required
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Location;
