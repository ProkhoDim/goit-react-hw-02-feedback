import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Seciton = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

Seciton.propType = {
  title: PropTypes.string.isRequired,
};

export default Seciton;
