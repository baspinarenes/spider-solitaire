import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Program from '.';
import { theme } from '../../../globalStyles';

describe('Splash Components', () => {
  it('should be render', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Program />
      </ThemeProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
