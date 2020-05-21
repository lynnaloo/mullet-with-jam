import React from 'react';
import ReactDOM from 'react-dom';
import Facebook from './Facebook';

ReactDOM.render(
  <Facebook
    title="Welcome to the Mullet Stack."
    subtitle="Facebook in the front. Minus the Walmart. Now running on Azure Static Web Apps."
  />,
  document.getElementById('facebook')
);
