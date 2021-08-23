import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import CompletedArea from '.';
import { theme } from '../../../globalStyles';

describe('CompletedArea Components', () => {
  it('should be render', () => {
    const handleClick = jest.fn();

    const { container } = render(
      <ThemeProvider theme={theme}>
        <CompletedArea completedDeckCount={2} onClick={handleClick} />
      </ThemeProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
