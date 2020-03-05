import React from 'react';
import './App.css';

const contactArray = [];

  class Sample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contacts: contactArray
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const
      { contacts } = this.state,
      name = this.refs.name.value,
      email = this.refs.email.value,
      phone = this.refs.phone.value;
      console.log("contacts:", contacts)
      this.setState({
        contacts: [...contacts, {
          name,
          email,
          phone
        }]
      }, () => {
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.phone.value = '';
      });
    }
  
    render() {
      const { contacts } = this.state;
      console.log('message',this.state.contacts);
      return (   
        <div class="container">
          <h2>Add Someone</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="name" placeholder="name" />
            <input type="text" ref="email" placeholder="email" />
            <input type="text" ref="phone" placeholder="phone" />
            <button type="submit">Submit</button>
          </form>
          <h2>Exsiting contacts:</h2>
          <ul>
            {contacts.map((contact) => 
           
            <li>
              <label>
              {contact.name}
              </label>
              <label>
              {contact.email}
              </label>
              <label>
              {contact.phone}
              </label>
            </li>
            )}
          </ul>
        </div>
      ) 
    }
  }

  export default Sample;
