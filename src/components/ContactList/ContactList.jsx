import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

export default ContactList;
