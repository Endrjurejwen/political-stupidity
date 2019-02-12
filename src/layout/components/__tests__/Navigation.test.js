import React from 'react';
import { renderWithRouter } from 'utils';
import Navigation from '../Navigation';

const fakeLinks = [
  { name: 'sdgfdg', path: '/fgfdg' },
  { name: 'sdf', path: '/hggdf' },
  { name: 'ddvfd', path: '/dsfgh' }
];

describe('<Navigation />', () => {
  test('should render list of links', () => {
    const { getAllByTestId } = renderWithRouter(
      <Navigation navItems={fakeLinks} />
    );
    const linkNames = getAllByTestId('link').map(link => link.textContent);
    const fakseLinkNames = fakeLinks.map(link => link.name);
    expect(linkNames).toEqual(fakseLinkNames);
  });
});
