import { contactsArr } from "./contactsData.js";

const patternSearchInput = document.getElementById("pattern-search-input");
const patternSearchSubmit = document.getElementById("pattern-search-submit");
const contactDisplay = document.getElementById("contact-display");

patternSearchSubmit.addEventListener("click", () =>
  findMatchingContacts(contactsArr, patternSearchInput.value)
);

function findMatchingContacts(contactsArr, pattern) {
  contactDisplay.innerHTML = "";
  const regex = new RegExp(pattern, "i");
  contactsArr
    .filter((contact) => regex.test(contact.name))
    .forEach((contact) => renderContact(contact));
}

function renderContact(contactObj) {
  const { name, email, phone } = contactObj;
  const contactCard = document.createElement("aside");
  contactCard.classList.add("contact-card");
  const nameElement = document.createElement("p");
  const emailElement = document.createElement("p");
  const phoneElement = document.createElement("p");
  nameElement.innerHTML = name;
  emailElement.innerHTML = email;
  phoneElement.innerHTML = phone;
  contactCard.appendChild(nameElement);
  contactCard.appendChild(emailElement);
  contactCard.appendChild(phoneElement);
  contactDisplay.appendChild(contactCard);
}
