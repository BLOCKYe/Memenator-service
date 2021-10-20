import React from "react";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  title: string,
  meme: string
}

export const Meme: React.FC<Props> = (props) => {
  return (
    <div className="meme">
      {/* <div className="meme__img"></div> */}
      <img src={props.meme} alt="" className="meme__img" />

      <div className="meme__details">
        <div className="meme__title">{props.title}</div>
        <AiFillHeart className="meme__icon" />
        <div className="meme__like">54</div>
      </div>
    </div>
  );
};
