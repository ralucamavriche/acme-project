import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { sampleCustomers } from '../../utils/customersDummyData';
import EditInvoiceForm from '../EditInvoiceForm';

const meta = {
  title: 'Components/EditInvoiceForm',
  component: EditInvoiceForm,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof EditInvoiceForm>;

export default meta;

type Story = StoryObj<typeof EditInvoiceForm>;

export const Default: Story = {
  render: (args) => <EditInvoiceForm {...args} />,
  args: {
    customers: sampleCustomers,
  },
};
