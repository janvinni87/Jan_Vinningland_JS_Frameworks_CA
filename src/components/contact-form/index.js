import React from 'react';
import Form from 'react-basic-form';
import emailRegex from 'email-regex';
import 'react-basic-form/dist/style.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: 600,
    marginTop: 60,
  },
}));

const ContactForm = () => {

  return(
    <Form
      onSubmit={data => console.log(data)}
      validations={{
        email: value => emailRegex({exact: true}).test(value),
      }}
      errorMessages={{
        email: 'Please check your email address.',
      }}
      onSubmit={(data, submitState) => {
        submitState.start();
        setTimeout(() => {
          console.log(data);
          submitState.end();
        }, 1000);
      }}
    >
      <Form.Element label="First Name" name="firstname" type="text" required />
      <Form.Element label="Last Name" name="lastname" type="text" required />
      <Form.Element label="Email" name="email" type="email" required />
      <Form.Element label="Message" name="message" type="textarea" required />
      <Form.Submit />
    </Form>
  );
};

export default ContactForm;
