"use client";
import React, { useState } from 'react'
import axios from 'axios';
import Button from '../Button/GlowButton';

function ContactForm() {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [message,setMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitted")
  //hide these data while moving to production
  const serviceId = 'service_8e5qx78';
  const templateId = 'template_yymh3gl';
  const publicKey = 'rAzTmuoFIQEfJ4NUf';

const data = {
  service_id:serviceId,
  template_id:templateId,
  user_id:publicKey,
  template_params : {
    from_name: name,
    from_email:email,
    to_name:'Sai Portfolio',
     message:message, 
     }
}

try {
  const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data);
  console.log("Email sent successfully");
  setName('');
  setEmail('');
  setMessage('');
}catch(error) {
  console.log(error);
}     

}

  return (
<form onSubmit={handleSubmit} className='flex flex-col '>
  <input className='my-2 input border-white bg-c1' type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
  <input className='my-2 input bg-c1 border-white' type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
  <textarea placeholder='Enter your message' className='my-2 textarea bg-c1 h-36 font-semibold border-white' cols="30" rows="10"  value={message} onChange={(e) => setMessage(e.target.value)} />
  <div className='w-full  mx-auto text-center items-center'>
    <Button className="w-full" buttonText="Send :)" />
  </div>
</form>

  )
}

export default ContactForm