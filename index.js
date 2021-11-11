const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./controller/contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case 'list':
        return await listContacts();

      case 'get':
        return await getContactById(id);

      case 'add':
        return await addContact(name, email, phone);

      case 'remove':
        return await removeContact(id);

      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await invokeAction(argv)
    .then(data => console.table(data))
    .catch(error => console.log(error));
})();
