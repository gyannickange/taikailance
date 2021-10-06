import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Select2 } from '../../..';

describe('Select Interactive', () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'cookies', label: 'Cookies and Cream' },
    { value: 'oreo', label: 'Oreo' },
  ];

  it('renders', () => {
    const { asFragment } = render(
      <Select2
        multi={false}
        search={true}
        placeholder="Awesome Select Component"
        value={options[2]}
        options={options}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
