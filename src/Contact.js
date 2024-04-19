import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Feel free to contact me via email at <a href="mailto:umreutkarsh@gmail.com">your-email@example.com</a>, or connect with me on:</p>
      <ul>
        <li><a href="https://in.linkedin.com/in/utkarsh-umre-250293222" target="_blank">LinkedIn</a></li>
        <li><a href="https://twitter.com/utkarshumre_" target="_blank">Twitter</a></li>
        <li><a href="https://github.com/UtkarshUmre" target="_blank">GitHub</a></li>
        {/* Add more social media profiles as needed */}
      </ul>
    </section>
  );
}

export default Contact;
