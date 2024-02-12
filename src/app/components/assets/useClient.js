import { useState } from 'react';

const useClient = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_o6k85xj";
    const templateId = "template_kqlwkk3";
    const publicKey = "Uls4lRKRITBVREoAz";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'KEVIN',
      message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully!');
      setEmailSubmitted(true);
      setName('');
      setSubject('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error in sending Email!', error);
      toast.error('Error sending email. Check Internet!.');
      setEmailSubmitted(false);
    }
  };

  return {
    emailSubmitted,
    name,
    email,
    subject,
    message,
    setName,
    setEmail,
    setSubject,
    setMessage,
    handleSubmit,
  };
};

export default useClient;
