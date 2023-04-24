import { memo } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Collection } from "../../../Interface/interface";
import writeImgToClipBoard from "../../../script/clipboard";

import styles from "./Popup.module.scss";

interface Props {
  collection: Collection | undefined;
  setCollectionPopup: React.Dispatch<
    React.SetStateAction<Collection | undefined>
  >;
}
const getCollectionContent = (collection: Collection) => {
  const JSX = [];
  console.log(collection);

  if (collection) {
    for (let i = 0; i <= collection.content - 1; i++) {
      JSX.push(
        <div
          className={styles.layout}
          key={i}
          onClick={() =>
            writeImgToClipBoard(
              `/ji-oh-clone/collections/${collection.id}/1 (${i + 1}).jpg`
            )
          }
        >
          <div className={styles.content}>
            <img
              alt=""
              src={`/ji-oh-clone/collections/${collection.id}/1 (${i + 1}).jpg`}
            />
            <p>Look {i + 1}</p>
          </div>
        </div>
      );
    }
  }

  return JSX;
};

const Popup: React.FC<Props> = ({ collection, setCollectionPopup }) => {
  console.log(collection);

  return createPortal(
    <div className={`${styles.container} ${collection ? styles.show : ""}`}>
      {getCollectionContent(collection!)}
      <div
        className={styles.close}
        onClick={() => setCollectionPopup(undefined)}
      >
        <img src="/ji-oh-clone/icon/close.png" alt="" />
      </div>
    </div>,
    document.getElementById("overlay")!
  );
};

export default memo(Popup);
