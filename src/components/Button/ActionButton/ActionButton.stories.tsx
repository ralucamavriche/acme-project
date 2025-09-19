import { Meta, StoryObj } from '@storybook/react-vite/*';
import ActionButton from './ActionButton';

type Story = StoryObj<typeof ActionButton>;

const meta: Meta<typeof ActionButton> = {
  component: ActionButton,
  title: 'Components/Button/ActionButton',
};
export default meta;

export const Update: Story = {
  args: {
    action: 'update',
  },
};

export const Delete: Story = {
  args: {
    action: 'delete',
  },
};
