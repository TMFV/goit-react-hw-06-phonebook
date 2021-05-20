import types from "./app-types";
import { uuid } from "uuidv4";

const addContact = (contactData) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: uuid(),
    name: contactData.name,
    number: contactData.number,
  },
});
const deleteContact = (contactId) => ({
  type: types.DELETE_CONTACT,
  payload: { contactId: contactId },
});

const filterSet = (str) => ({
  type: types.FILTER_SET,
  payload: str,
});

export default { addContact, deleteContact, filterSet };
