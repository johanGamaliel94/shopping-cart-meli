import React from 'react';

// Custom Component
export const ShoppingFooter = () => {

  return (
    <footer className="footer-is">
      <div className="footer-left-text">
        <p className="bold-text-md">{'¿Alguna sugerencia?'}</p>
        <p className="mt-10 text-md">{'Envíala a:'}</p>
        <p className="blue-ml-text">
          happy.shopping@mail.com
        </p>
      </div>
      <div className="footer-right-text">
        <br />
        <br />
        <p className="mt-10">
          V1.0.0 | {new Date().getFullYear()} -{' '}
          Happy Shopping
        </p>
      </div>
    </footer>
  );
};

export default ShoppingFooter;
