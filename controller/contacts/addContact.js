const { v4: uuidv4 } = require('uuid');
const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

async function addContact(name, email, phone) {
  try {
    const contact = await listContacts();
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    contact.push(newContact);
    await updateContacts(contact);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = addContact;
