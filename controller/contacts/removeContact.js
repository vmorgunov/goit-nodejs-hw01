const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

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

module.exports = removeContact;
