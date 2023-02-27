import { useEffect, useState } from "react";
import { Collection } from "../../Interface/interface";
import styles from "./Collection.module.scss";
import Popup from "./Popup/Popup";

const Collections: React.FC = () => {
  const [state, setCollections] = useState<Collection[] | undefined>();
  const [stateCollection, setCollection] = useState<Collection | undefined>();
  const [stateCollectionPopup, setCollectionPopup] = useState<Collection | undefined>();

  useEffect(() => {
    const fetchDataPress = async () => {
      const response = await fetch(
        "https://api.npoint.io/a19f9ece5529f59fc41e"
      );

      setCollections(await response.json());
    };

    fetchDataPress();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        {state &&
          state.map((element) => {
            return <h1 onClick={() => setCollectionPopup(element)} key={element.id} onMouseEnter={() => setCollection(element)}>{element.title}</h1>;
          })}
      </div>
      <div className={`${styles.container__image} `}>
        {state &&
          state.map((element) => {
            return <img className={element.id === stateCollection?.id ? styles.active : ''} key={element.id} src={element.banner} alt="" />;
          })}
      </div>

      <Popup collection={stateCollectionPopup} setCollectionPopup={setCollectionPopup}/>
    </div>
  );
};

export default Collections;
