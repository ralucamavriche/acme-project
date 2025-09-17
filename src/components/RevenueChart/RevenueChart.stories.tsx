import { Meta, StoryObj } from '@storybook/react-vite/*';
import RevenueChart from './RevenueChart';

const meta = {
  component: RevenueChart,
  title: 'Components/RevenueChart',
} satisfies Meta<typeof RevenueChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
