import { useState, useEffect } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const contacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [filterValue, setFilterValue] = useState("");

  const contactsFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <SearchBox setFilterValue={setFilterValue} />
        <ContactList contacts={contactsFilter} />
      </Section>
    </>
  );
}

export default App;
