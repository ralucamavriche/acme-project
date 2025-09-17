import { StoryObj } from '@storybook/react-vite/*';
import Chart from './Chart';

const meta = {
  component: Chart,
  title: 'Components/RevenueChart/Chart',
};
export default meta;

const data = [
  { month: 'Jan', revenue: 1200 },
  { month: 'Feb', revenue: 2100 },
  { month: 'Mar', revenue: 3200 },
  { month: 'Apr', revenue: 4000 },
  { month: 'May', revenue: 5000 },
  { month: 'Jun', revenue: 3000 },
  { month: 'Jul', revenue: 2500 },
  { month: 'Aug', revenue: 1800 },
  { month: 'Sep', revenue: 2200 },
  { month: 'Oct', revenue: 2700 },
  { month: 'Nov', revenue: 3500 },
  { month: 'Dec', revenue: 4200 },
];

export const View: StoryObj<typeof Chart> = {
  args: { data },
  render: (args) => (
    <div style={{ width: 500, height: 300 }}>
      <Chart {...args} />
    </div>
  ),
};
