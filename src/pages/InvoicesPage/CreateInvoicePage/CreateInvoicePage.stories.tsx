import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import CreateInvoicePage from './CreateInvoicePage';

const meta = {
  title: 'Pages/InvoicesPage/CreateInvoicePage',
  component: CreateInvoicePage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CreateInvoicePage>;

export default meta;

type Story = StoryObj<typeof CreateInvoicePage>;

export const Default: Story = {
  render: () => <CreateInvoicePage />,
};
