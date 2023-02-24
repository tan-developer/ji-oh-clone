import { useEffect, useState } from "react";
import { Post } from "../../Interface/interface";
import PressOverlay from "../PressOverlay/PressOverlay";
import styles from "./Press.module.scss";

const Press: React.FC = () => {
  const [statePress, setPress] = useState<Post[] | undefined>();
  const [statePressSelected, updatePress] = useState<Post | undefined>();

  useEffect(() => {
    const fetchDataPress = async () => {
      const response = await fetch(
        "https://api.npoint.io/0d661f7b796edde8aa6b"
      );

      setPress(await response.json());
    };

    fetchDataPress();
  }, []);

  console.log(statePressSelected)
  return (
    <>
      <div className={styles.container}>
        {statePress &&
          statePress.map((element, index) => {
            return (
              <div className={styles.section} key={index}>
                <div
                  className={styles.section__banner}
                  onClick={() => {
                    updatePress(element);
                  }}
                >
                  <img src={element.banner} alt="" />
                </div>
                <div
                  className={styles.section__text}
                  onClick={() => {
                    updatePress(element);
                  }}
                >
                  <p>{`${element.date}`}</p>
                  <p className={styles.bold}>{" — " + element.source}</p>
                </div>
              </div>
            );
          })}
      </div>

      <PressOverlay post={statePressSelected} setPost={updatePress}/>
    </>
  );
};

export default Press;
