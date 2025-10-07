import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { sampleCustomers } from '../../utils/customersDummyData';
import CreateInvoiceForm from '../CreateInvoiceForm';

const meta = {
  title: 'Components/CreateInvoiceForm',
  component: CreateInvoiceForm,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CreateInvoiceForm>;

export default meta;

type Story = StoryObj<typeof CreateInvoiceForm>;

export const Default: Story = {
  render: (args) => <CreateInvoiceForm {...args} />,
  args: {
    customers: sampleCustomers,
  },
};
