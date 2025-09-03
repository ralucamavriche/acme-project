import MainLayout from './MainLayout';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MainLayout> = {
  component: MainLayout,
  title: 'Layouts/MainLayout',
};
export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  args: {
    children: 'Main Content',
  },
};
