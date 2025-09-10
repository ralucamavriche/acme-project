import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

const meta = {
  component: Sidebar,
  title: 'Components/Sidebar',
};
export default meta;

export const Default = () => (
  <MemoryRouter>
    <Sidebar />
  </MemoryRouter>
);
