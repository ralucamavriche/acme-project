import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta = {
  component: Pagination,
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => <Pagination {...args} />,
  args: {
    totalPages: 10,
    currentPage: 1,
    onPreviousPageHandle: () => {
      console.warn('Previous');
    },
    onNextPageHandle: () => {
      console.warn('Next');
    },
    onPageChange: (page: number) => {
      console.warn('Change to', page);
    },
  },
};
