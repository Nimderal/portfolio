import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jt405oa', 'template_rpsjv5t', form.current, {
        publicKey: '9QfZHaxlNqbGdUsk4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form  onSubmit={sendEmail} ref={form}>
        <div className='flex flex-col max-w-[1100px] w-full'>
     <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
         <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
         <p className='text-gray-300 py-4'>Send me a message</p>
     </div>
     <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
     <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
     <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
     <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate</button>
     </div>
        </form>
       
    </div>
  )
}
export default Contact