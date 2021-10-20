import React from "react";

// icons
import { MdLibraryAdd, MdCloudUpload } from "react-icons/md";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";

export const MainPage: React.FC = () => {
  return (
    <div className="main">
      <div className="circle"></div>
      <div className="circle--color"></div>
      <div className="cross"></div>
      <div className="cross--color"></div>

      <div className="main__container">
        <div className="main__col">
          <h1 className="main__title">Memenator</h1>
          <p className="main__subtitle">
            Aliquam erat volutpat. Quisque sagittis enim erat, eu bibendum justo
            molestie posuere. Maecenas sagittis bibendum dolor eu tincidunt.
            Praesent vel dui venenatis.
          </p>

          <div className="main__counter">
            <div className="main__text">Uploaded memes</div>
            <div className="main__number">353</div>
          </div>

          <div className="main__btn">
            <div className="main__btnIcon">
              <MdLibraryAdd />
            </div>
            <div className="main__btnText">Let's start</div>
          </div>
        </div>

        <div className="main__cardsContainer">
          <div className="main__card--m1">
            <div className="main__cardTitle">Easy to upload</div>
            <div className="main__cardText">
              Just select image form your device
            </div>
            <div className="main__cardIcon">
              <MdCloudUpload />
            </div>
          </div>
          <div className="main__card--white">
            <div className="main__cardTitle">Free to watch</div>
            <div className="main__cardText">Watch any meme you want</div>
            <div className="main__cardIcon">
              <BsEmojiSunglassesFill />
            </div>
          </div>
          <div className="main__card--m2">
            <div className="main__cardTitle">Share with one click</div>
            <div className="main__cardText">Share memes with your friends</div>
            <div className="main__cardIcon">
              <IoShareSocialSharp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
