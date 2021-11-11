const listContacts = require('./listContacts');

async function getContactById(contactId) {
  try {
    const contact = await listContacts();
    const contactByID = contact.find(item => item.id === Number(contactId));
    return contactByID;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getContactById;
