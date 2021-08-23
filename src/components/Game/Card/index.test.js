import React from 'react';
import { render } from '@testing-library/react';
import Card from '.';

describe('Card Components', () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it('should be render', () => {
    const { container } = render(<Card cardNo={1} />);
    expect(container.querySelector('img').src).toMatch(/1.webp/);
  });
});
