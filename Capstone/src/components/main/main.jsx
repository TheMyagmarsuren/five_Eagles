import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Kind } from "../kind/kind";
import { useEffect } from "react"
import axios from "axios";

export const Main = ({kinds, setKinds}) => {
   useEffect(() => {
    axios.get("/data/kind.json").then((data) => {
      setKinds(data.data.kind);
    });
}, [setKinds]);

  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p>인기순</p>
        <p>오름차순</p>
        <p>내림차순</p>
      </div>
      <main className={styles.flex_wrap}>
        {kinds.map((kinds) => {
          return <Kind key={'key-${kind.id}'} kind = {kinds}  />;
        })}
      </main> 
      <footer className={styles.footer}>
      <p>DongPay</p>
    </footer>
    </>
  );
};
