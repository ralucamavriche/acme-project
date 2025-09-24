import type { StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta = {
  component: Spinner,
  title: 'Components/Spinner',
};
export default meta;

export const Default: StoryObj<typeof Spinner> = {
  render: () => <Spinner />,
};
