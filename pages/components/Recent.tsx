import React, { useState, useEffect } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { Meme } from "./Meme";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import "firebase/compat/firestore";
import firebase from "../../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

export const getStaticProps: GetStaticProps = async (context) => {
  const bruh = "siema";

  return {
    props: {
      bruh,
    },
  };
};

export const Recent: React.FC = (props: any) => {
  const [inputWindow, setinputWindow] = useState<boolean>(false);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputImage, setinputImage] = useState("");
  console.log(props);

  const memesRef = firestore.collection("memes");
  let memeData: any = [{ meme: "co tam", title: "dupa" }];
  //[memeData] = useCollectionData(memesRef);
  console.log(memeData);

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 40) setInputTitle(e.target.value);
  };

  const handleInputImage = (e: any) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setinputImage(objectUrl);
    setInputTitle(e.target.files[0].name);
  };

  const clearUploadField = () => {
    setinputImage("");
    setInputTitle("");
    setinputWindow(false);
  };

  const submitUpload = () => {
    if (inputImage !== "") {
      // push to firebase storage

      clearUploadField();
    }
  };

  return (
    <div className="recent">
      <div className="circle"></div>
      <div className="cross"></div>
      <div className="recent__header">
        <h1 className="recent__title">Recent memes</h1>
        <p className="recent__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          suscipit augue eleifend mauris dictum, at sagittis sem faucibus. Ut
          tristique metus ullamcorper euismod fringilla.
        </p>
      </div>

      <div className="recent__upload">
        <div
          onClick={() => setinputWindow(!inputWindow)}
          className="recent__btn"
        >
          {inputImage === "" ? (
            <div className="recent__btnContainer">
              <div className="recent__btnIcon">
                <MdLibraryAdd />
              </div>
              <span className="recent__btnText">Upload</span>
            </div>
          ) : (
            <img
              src={inputImage}
              alt="preview"
              className="recent__inputPreview"
            />
          )}
        </div>

        {inputWindow && (
          <div className="recent__btnExtended">
            <input
              onChange={handleInputImage}
              type="file"
              className="recent__inputFile"
            />
            <input
              onChange={handleInputTitle}
              placeholder="Set title"
              type="text"
              className="recent__inputTitle"
              value={inputTitle}
            />
            <button onClick={submitUpload} className="recent__inputSubmit">
              Upload new meme
            </button>
            <button onClick={clearUploadField} className="recent__inputCancel">
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="recent__memeContainer">
        {memeData.map((meme: any) => (
          <Meme key={meme.meme} title={meme.title} meme={meme.meme} />
        ))}
      </div>
    </div>
  );
};
