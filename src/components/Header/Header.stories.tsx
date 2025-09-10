import type { Meta } from '@storybook/react-vite';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
};
export default meta;

export const Default = () => (
  <MemoryRouter>
    <Header variant={'default'} />
  </MemoryRouter>
);
export const Sidebar = () => (
  <MemoryRouter>
    <Header variant={'sidebar'} />
  </MemoryRouter>
);
