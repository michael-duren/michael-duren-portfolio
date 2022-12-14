import { useRef, useContext, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FormContainer,
  CloseWindowContainer,
  SentReciept,
} from './contact.component.styles';
import CloseWindowButton from '../../components/close-window/close-window.component';
import { ThemeContext } from 'styled-components';
import { Spinner } from '../../components/spinner/spinner.component.styles';

const Contact = () => {
  const { id } = useContext(ThemeContext);
  const form = useRef();
  const [sentReciept, setSentReciept] = useState(false);
  const [loading, setLoading] = useState(false);

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
          setSentReciept(true);
        },
        (error) => {
          console.log(error.text);
          setSentReciept(false);
        }
      );
  };

  const submitHandler = () => {
    if (!sentReciept) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <form ref={form} onSubmit={sendEmail}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" />
          </>
        )}
        <button type="submit" value="Send" onClick={submitHandler}>
          {loading === true ? 'Sent!' : 'Send'}
        </button>
        {sentReciept && <SentReciept>Successfully Submitted</SentReciept>}
        <p>New clients can also email me at michaeld@michaelduren.com</p>
      </form>
      <CloseWindowContainer>
        <CloseWindowButton id={id} />
      </CloseWindowContainer>
    </FormContainer>
  );
};

export default Contact;
