import React from 'react';
import Event from '@nativedone/gatsby-theme-events/src/components/event';

export default props => (
  <div>
    <Event {...props} />
    <h2>An event! Yay!</h2>
    <p>Woo hoo!</p>
  </div>
);
