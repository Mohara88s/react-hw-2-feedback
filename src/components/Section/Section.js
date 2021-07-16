import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    {title && <h3 className={styles.title}>{title}</h3>}
    {children}
  </>
);
export default Section;
