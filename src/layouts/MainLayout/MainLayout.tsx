import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const MainLayout: React.FC = () => (
  <div className="m-6 flex min-h-screen flex-col">
    <Header variant={'default'} />
    <main className="flex grow">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
