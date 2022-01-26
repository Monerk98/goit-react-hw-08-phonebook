import s from "./UserMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsername } from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

export default function UserMenu() {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <div>
      <span className={s.ave}>Welcome, {username}</span>
      <button
        className={s.btn}
        type={"button"}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
