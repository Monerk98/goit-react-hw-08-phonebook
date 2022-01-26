import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./LoginView.module.css";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";


export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setName] = useState("");
  const [password, setNumber] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setName(value);
        break;
      case "password":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setNumber("");
    setName("");
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Email
          <input
            name="email"
            placeholder="zelenskiy@mail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            onChange={handleChange}
            value={email}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            name="password"
            required
            onChange={handleChange}
            value={password}
            type="password"
            className={s.input}
          />
        </label>
        <button className={s.btn} type="submit">
          Log in
        </button>
      </form>
      <span className={s.message}>New to Phonebook?</span>
      <Link className={`${s.link} ${s.btn}`} to="/register">
        Create your Phonebook account
      </Link>
    </>
  );
}
