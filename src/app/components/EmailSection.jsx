
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

class EmailSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSubmitted: false,
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = this.state;
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
      this.setState({
        emailSubmitted: true,
        name: '',
        subject: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error in sending Email!', error);
      toast.error('Error sending email. Check Internet!.');
      this.setState({ emailSubmitted: false });
    }
  }

  render() {
    const { emailSubmitted, name, email, subject, message } = this.state;

    return (
      <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        {/* Your JSX code */}
      </section>
    );
  }
}

export default EmailSection;
