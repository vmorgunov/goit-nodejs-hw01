const path = require('path');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('./db/contacts.json');

async function updateContacts(contact) {
  await fs.writeFile('./db/contacts.json', JSON.stringify(contact));
}

async function listContacts() {
  try {
    const contact = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(contact);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contact = await listContacts();
    const contactByID = contact.find(item => item.id === Number(contactId));
    return contactByID;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contact = await listContacts();
    const removeIndex = await contact.findIndex(
      i => i.id === Number(contactId),
    );
    const removedContact = await contact.splice(removeIndex, 1);
    await updateContacts(contact);
    return removedContact;
  } catch (error) {
    console.log(error);
  }
}

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

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
