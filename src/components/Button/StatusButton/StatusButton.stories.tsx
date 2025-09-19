import { Meta, StoryObj } from '@storybook/react-vite/*';
import StatusButton from './StatusButton';

type Story = StoryObj<typeof StatusButton>;

const meta: Meta<typeof StatusButton> = {
  component: StatusButton,
  title: 'Components/Button/StatusButton',
};

export default meta;

export const PaidStatus: Story = {
  args: {
    isPaid: true,
  },
};

export const PendingStatus: Story = {
  args: {
    isPaid: false,
  },
};
