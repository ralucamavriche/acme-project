import { render } from '@testing-library/react';
import Chart from './Chart';

const mockData = [
  { month: 'January', revenue: 1000 },
  { month: 'February', revenue: 1500 },
];

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Chart', () => {
  it('renders the chart with provided data', () => {
    render(<Chart data={mockData} />);
  });
});
