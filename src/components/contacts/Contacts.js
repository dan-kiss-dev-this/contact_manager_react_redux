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
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
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
//this.props.contacts
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// })

export default connect(mapStateToProps, { getContacts })(Contacts)
