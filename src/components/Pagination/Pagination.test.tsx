import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('calls onPreviousPageHandle when Previous button is clicked', () => {
    const onPrevious = vi.fn();
    const onNext = vi.fn();
    const onPageChange = vi.fn();

    render(
      <Pagination
        totalPages={5}
        currentPage={2}
        onPreviousPageHandle={onPrevious}
        onNextPageHandle={onNext}
        onPageChange={onPageChange}
      />,
    );
    const prevButton = screen.getByText('Previous');
    fireEvent.click(prevButton);
    expect(onPrevious).toHaveBeenCalled();
  });
  it('calls onNextPageHandle when Next button is clicked', () => {
    const onPrevious = vi.fn();
    const onNext = vi.fn();
    const onPageChange = vi.fn();

    render(
      <Pagination
        totalPages={5}
        currentPage={2}
        onPreviousPageHandle={onPrevious}
        onNextPageHandle={onNext}
        onPageChange={onPageChange}
      />,
    );
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(onNext).toHaveBeenCalled();
  });
});
