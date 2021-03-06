import React from 'react';
import { Link } from 'react-router-dom';
import SocialSignIn from 'components/_common/SocialSignIn';
import Form from 'components/_common/Form';

function SignUp({ className }){
  return (
    <div>
      <div className="container">
        <h2>Create Your Account</h2>
        <p>Already have an account? <Link to="/login">Log in »</Link></p>

        <SocialSignIn />
        <Form signUpForm />
      </div>
    </div>
  );
}

export default SignUp;
