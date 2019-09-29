import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

it('renders a span with the text Hello World', () => {
  const wrapper = rtl.render(
    <App />
  );
  console.log(wrapper.debug());
});