import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { sampleCustomers } from '../../../utils/customersDummyData';
import CustomerMobileCard from './CustomerMobileCard';

const meta: Meta<typeof CustomerMobileCard> = {
  title: 'Components/Customers/CustomerMobileCard',
  component: CustomerMobileCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof CustomerMobileCard> = {
  render: (args) => <CustomerMobileCard {...args} />,
};

Default.args = {
  customers: sampleCustomers,
};
