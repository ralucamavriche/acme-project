import { render, screen } from '@testing-library/react';
import AcmeLogo from './AcmeLogo';

describe('Logo', () => {
  it('renders the text correctly', () => {
    render(<AcmeLogo />);
    expect(screen.getByText('Acme')).toBeInTheDocument();
  });

  it('renders the icon correctly', () => {
    render(<AcmeLogo />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
