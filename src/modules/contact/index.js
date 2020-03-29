import React from 'react';
import Typography from '@material-ui/core/Typography';
import ContactForm from '../../components/contact-form';

const Contact = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Contact
      </Typography>
      <ContactForm />
    </div>
  );
};

export default Contact;
