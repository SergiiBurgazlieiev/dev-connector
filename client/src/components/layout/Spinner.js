import React from 'react';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';

const Spinner = () => (
  <UseAnimations
    animation={loading}
    style={{ width: '200px', margin: 'auto', display: 'block' }}
  />
);
export default Spinner;