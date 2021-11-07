const path = require('path');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  // ...твой код
}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  try {
    const data = await listContacts();
    const contact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    data.push(contact);
    await fs.writeFile('./db/contacts.json', JSON.stringify(data));
    return contact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
