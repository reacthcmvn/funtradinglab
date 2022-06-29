import React from "react";
import Image from "next/image";
import worldmap from "../../styles/img/world.svg";

const Location = () => {
  return (
    <div className="relative flex w-full h-full ">
      <Image
        src={worldmap}
        alt="world map"
        // width={300}
        // height={100}
        // layout="fill" // required
        objectFit="cover"
      />
    </div>
  );
};

export default Location;
