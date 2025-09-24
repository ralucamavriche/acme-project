import type { StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import InvoicesPage from './InvoicesPage';

const meta = {
  component: InvoicesPage,
  title: 'Pages/InvoicesPage',
};
export default meta;

export const Default: StoryObj<typeof InvoicesPage> = {
  render: () => (
    <MemoryRouter>
      <InvoicesPage />,
    </MemoryRouter>
  ),
};
