import React from "react";
import Avatar from "./Avatar";
import ppl1 from "../../styles/img/therich/ppl1.png";
import ppl2 from "../../styles/img/therich/ppl2.png";
import ppl3 from "../../styles/img/therich/ppl3.png";
import ppl4 from "../../styles/img/therich/ppl4.png";
import ppl5 from "../../styles/img/therich/ppl5.png";
import ppl6 from "../../styles/img/therich/ppl6.png";

const TheRich = () => {
  return (
    <div className="w-full flex flex-row flex-wrap">
      <div className="basis-1/3">
        <Avatar imgURL={ppl1} hei={20} wid={20} money="24B" />
      </div>
      <div className="basis-1/3">
        <Avatar imgURL={ppl2} hei={20} wid={20} money="65B" />
      </div>
      <div className="basis-1/3">
        <Avatar imgURL={ppl3} hei={20} wid={20} money="6.6B" />
      </div>
      <div className="basis-1/3">
        <Avatar imgURL={ppl4} hei={20} wid={20} money="5.9B" />
      </div>
      <div className="basis-1/3">
        <Avatar imgURL={ppl5} hei={20} wid={20} money="4.3B" />
      </div>
      <div className="basis-1/3">
        <Avatar imgURL={ppl6} hei={20} wid={20} money="8B" />
      </div>
    </div>
  );
};

export default TheRich;
