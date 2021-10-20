import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { Meme } from "./Meme";

import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebase from "../../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

export const Recent: React.FC = () => {
  const [inputWindow, setinputWindow] = useState<boolean>(false);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputImage, setinputImage]: any = useState("");
  const [file, setFile] = useState() as any;

  const memesRef = firestore.collection("memes");
  const [memeData] = useCollectionData(memesRef);

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 40) setInputTitle(e.target.value);
  };

  const handleInputImage = async (e: any) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setinputImage(objectUrl);

    setFile(e.target.files[0]);

    setInputTitle(e.target.files[0].name);
  };

  const clearUploadField = () => {
    setinputImage("");
    setInputTitle("");
    setinputWindow(false);
  };

  const submitUpload = async () => {
    if (inputImage !== "") {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      const image = await fileRef.getDownloadURL();

      await memesRef.add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        meme: image,
        title: inputTitle,
        likes: 0,
      });

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
              accept="image/png, image/jpeg"
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
        {memeData?.map((meme: any) => (
          <Meme
            key={meme.meme}
            title={meme.title}
            meme={meme.meme}
            likes={meme.likes}
          />
        ))}
      </div>
    </div>
  );
};
