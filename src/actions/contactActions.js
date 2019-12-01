import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/users')
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  })
};

export const deleteContact = (id) => async dispatch => {
  try {
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  }

}

export const addContact = (contact) => async dispatch => {
  const res = await axios.post('http://jsonplaceholder.typicode.com/users', contact);
  // your api post aka dealing with database is different then the view the user gets, you are making sure the api does trigger and then you are showing a change in view using the information from the response
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  })
}