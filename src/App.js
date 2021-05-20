import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import appActions from "./redux/app/app-actions";
import { connect } from "react-redux";

class App extends Component {
  /*   state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  }; */

  /*   componentDidMount() {
    this.firstGetContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateLocalStorageAferChangeContacts(prevState);
  }

  firstGetContacts = () => {
    //console.log(" component did mount");
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    //console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };
  updateLocalStorageAferChangeContacts = (prevState) => {
    //console.log("component did update");
    if (this.state.contacts !== prevState.contacts) {
      //console.log("Контакти було оновлено");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  };
 */
  /*   formSubmitHandler = (data) => {
    this.repeatControl(data);
  }; */

  /* repeatControl = (data) => {
    let nameArray = [];
    nameArray = this.state.contacts.map((cur) => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id: uuidv4(), name: data.name, number: data.number },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(" Контакт вже є у телефонній книзі!!!");
    }
  }; */

  /*   elementDelete = (arr, idContact) => {
    let newArr = arr.filter((elem) => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromContactList = (idContact) => {
    let newArrAfterDel = this.elementDelete(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
  };

  setFilterToState = (filterData) => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };
*/
  filterArr = (fArr) => {
    let newArr = fArr.filter((cur) =>
      cur.name.toUpperCase().includes(this.props.filter)
    );
    return newArr;
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.props.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={this.props.filterSet} />
        <ContactList
          contacts={this.filterArr(this.props.contacts)}
          del={this.props.contactDelete}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: state.app.contacts,
  filter: state.app.filter,
});
const mapDispatchToProrps = (dispatch) => ({
  formSubmitHandler: (contactData) =>
    dispatch(appActions.addContact(contactData)),
  contactDelete: (contactId) => dispatch(appActions.deleteContact(contactId)),
  filterSet: (str) => dispatch(appActions.filterSet(str)),
});
export default connect(mapStateToProps, mapDispatchToProrps)(App);
