import React from 'react';

const Seciton = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Seciton;
