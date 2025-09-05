import { MemoryRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

import type { Meta } from '@storybook/react-vite';

const meta: Meta<typeof MainLayout> = {
  component: MainLayout,
  title: 'Layouts/MainLayout',
};
export default meta;

export const Default = () => (
  <MemoryRouter>
    <MainLayout />
  </MemoryRouter>
);
