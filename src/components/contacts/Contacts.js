import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../../actions/types';
import { getContacts } from '../../actions/contactActions'

class Contacts extends Component {
  componentDidMount() {
    console.log(10, this.props);
    this.props.getContacts()
  }


  render() {
    console.log(16, contacts)
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

// to get state as props
// you can access state anywhere in the app via the connect method
// note state of the app done via store and is different then state of component
// remember if state should persist across components it should go in the store
// if only one component uses some state just do local state no reason to use a store
// note we do state.contact as we are in the contact reducer see folder contactReducer.js and index.js
//this.props.contacts
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// })

export default connect(mapStateToProps, { getContacts })(Contacts)
