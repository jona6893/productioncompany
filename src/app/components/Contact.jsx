import React from 'react'

function Contact() {
  return (
    <div>
      <div className="w-fit m-auto flex flex-col gap-4 items-center p-4">
        <h2 className="text-3xl">Contact</h2>
        <address className="flex flex-col gap-2 items-center">
          Write to us at:
          <a href="mailto:webmaster@example.com">webmaster@example.com</a>
       
          
          <span>Call us on: <a href="tel:76482753">76 48 27 53</a></span>
        
          Københavngade 32A, <br /> københavn 2200
          <br />
          Danmark
        </address>
      </div>
    </div>
  );
}

export default Contact