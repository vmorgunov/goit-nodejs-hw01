const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const contact = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(contact);
  } catch (error) {
    console.log(error);
  }
}

module.exports = listContacts;
