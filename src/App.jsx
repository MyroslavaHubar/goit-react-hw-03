import { useState, useEffect } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const contacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactList contacts={contacts} />
      </Section>
    </>
  );
}

export default App;
