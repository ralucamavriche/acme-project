import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta = {
  component: SearchBar,
  title: 'Components/SearchBar',
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: (args) => <SearchBar {...args} />,
  args: {
    search: '',
    handleSearch: (query: string) => {
      console.log('Search query:', query);
    },
  },
};
