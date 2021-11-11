const fs = require('fs').promises;

async function updateContacts(contact) {
  await fs.writeFile('./db/contacts.json', JSON.stringify(contact));
}

module.exports = updateContacts;
