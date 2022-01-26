import generalImage from "../../images/cloud.png";
import s from "./HomeView.module.css";

export default function HomeView() {
  return (
    <>
      <span className={s.message}>
        Welcome! To use the Phone Book, please log in or sign up.
      </span>
      <img className={s.img} src={generalImage} alt="" />
    </>
  );
}
