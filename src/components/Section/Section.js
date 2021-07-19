import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    {title && <h3 className={styles.title}>{title}</h3>}
    {children}
  </>
);
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
Section.defaultProps = {
  title: 'There must be section heading',
};

export default Section;
