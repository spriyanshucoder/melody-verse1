import React from 'react';

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>

      This is a MERN stack application (MongoDB, Express, React, Node.js) that incorporates authentication features. Users can sign up, log in, and log out, with access to protected routes restricted to authenticated users.
      </p>
      <p className='mb-4 text-slate-700'>
      The front-end is developed with React, utilizing React Router for seamless client-side navigation. The back-end is powered by Node.js and Express, with MongoDB serving as the database. Authentication is managed via JSON Web Tokens (JWT).
      </p>
      <p className='mb-4 text-slate-700'>
      This application serves as a foundational template for creating full-stack web applications with authentication using the MERN stack. Feel free to adapt and expand it for your own projects!
      </p>
    </div>
  );
}