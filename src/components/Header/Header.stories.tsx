import type { Meta } from '@storybook/react-vite';

import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
};
export default meta;

export const Default = () => <Header />;
