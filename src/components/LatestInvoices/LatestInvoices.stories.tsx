import { StoryObj } from '@storybook/react-vite/*';
import LatestInvoices from './LatestInvoices';

const meta = {
  component: LatestInvoices,
  title: 'Components/LatestInvoices',
};
export default meta;

export const Default: StoryObj<typeof LatestInvoices> = {
  render: () => <LatestInvoices />,
};
