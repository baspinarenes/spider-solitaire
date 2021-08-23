import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Splash from '.';
import { theme } from '../../../globalStyles';

describe('Splash Components', () => {
  it('should be render', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Splash />
      </ThemeProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
