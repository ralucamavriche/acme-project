import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateInvoicePage from './UpdateInvoicePage';

const meta = {
  title: 'Pages/InvoicesPage/UpdateInvoicePage',
  component: UpdateInvoicePage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof UpdateInvoicePage>;

export default meta;

type Story = StoryObj<typeof UpdateInvoicePage>;

export const Default: Story = {
  render: () => <UpdateInvoicePage />,
};
