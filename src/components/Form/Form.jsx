import { useState } from "react";
import s from "./Form.module.css";
import { addContact } from "../../redux/contacts/contactsOperations";
import { useDispatch, useSelector } from "react-redux";
import {getContactsFromState} from '../../redux/contacts/contactsSelectors'


export default function Form() {
  const contacts = useSelector(getContactsFromState)
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let duplicate = contacts.find((contact) => contact.name === name);
    if(duplicate){
        alert('Такой контакт уже существует')
        setName("")
        return }
    dispatch(addContact({ name, number }));
    setNumber("");
    setName("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Homer Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="+38(0XX)-XXX-XX-XX"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
          className={s.input}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// const mapStateToProps = (state) => {
//   return { contacts: state.contacts };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addContact: (name, number) => dispatch(addContact(name, number)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
