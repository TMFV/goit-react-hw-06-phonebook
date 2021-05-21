import types from "./app-types";
import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

/* const addContact = (contactData) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: uuid(),
    name: contactData.name,
    number: contactData.number,
  },
}); */
const addContact = createAction("app/addContact", (contactData) => {
  return {
    payload: {
      id: uuid(),
      name: contactData.name,
      number: contactData.number,
    },
  };
});

/* const deleteContact = (contactId) => ({
  type: types.DELETE_CONTACT,
  payload: { contactId: contactId },
}); */
const deleteContact = createAction("app/deleteContact");

/* const filterSet = (str) => ({
  type: types.FILTER_SET,
  payload: str,
});
 */
const filterSet = createAction("app/setFilterArr");

export default { addContact, deleteContact, filterSet };
