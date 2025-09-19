import { render, screen } from '@testing-library/react';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  it('renders the PencilIcon when action is update', () => {
    render(<ActionButton action="update" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
  it('renders the TrashIcon when action is delete', () => {
    render(<ActionButton action="delete" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
