import React from 'react';

const Section = ({ title, children }) => (
  <>
    {title && <h3>{title}</h3>}
    {children}
  </>
);
export default Section;
