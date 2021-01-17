import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container">
      <Navbar/>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="youremail@test.com"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="pwd">Password:</label>
        <input
          placeholder="******"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="default">
          SIGNUP
        </Button>    
      </form>
    </div>
  );
}

export default Signup;
