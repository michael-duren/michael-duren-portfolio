import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormContainer } from './contact.component.styles';
import CloseWindowButton from '../../components/close-window/close-window.component';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_beucihj',
        'template_f5lnaho',
        form.current,
        'anQIB68d_Kp0f0doK'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FormContainer>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <CloseWindowButton />
    </FormContainer>
  );
};

export default Contact;
