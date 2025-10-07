import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { sampleCustomers } from '../../../utils/customersDummyData';
import CustomerDesktopCard from './CustomerDesktopCard';

const meta = {
  component: CustomerDesktopCard,
  title: 'Components/Customers/CustomerDesktopCard',
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CustomerDesktopCard>;

export default meta;

type Story = StoryObj<typeof CustomerDesktopCard>;

export const Default: Story = {
  render: (args) => <CustomerDesktopCard {...args} />,
  args: {
    customers: sampleCustomers,
  },
};
