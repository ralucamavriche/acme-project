import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

import type { Meta } from '@storybook/react-vite';

const meta: Meta<typeof Home> = {
  component: Home,
  title: 'Pages/Home',
};
export default meta;

export const Default = () => (
  <MemoryRouter>
    <Home />
  </MemoryRouter>
);
